import { useAppDispatch, useAppSelector } from '@/store'
import { PersonalState, updateState } from '@/store/slices/personal'
import {
    createPersonal as createPersonalApi,
    findPersonal,
    deletePersonal as deletePersonalApi,
} from '@/services/PersonalService'
import { useEffect } from 'react'
import { User } from '@/@types/api'
import { faker } from '@faker-js/faker'
import ApiService from '@/services/ApiService'

export default function usePersonal() {
    const personal = useAppSelector((state) => state.personal)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (personal.personal === null) {
            ;(async () => {
                // setTimeout(() => {
                //     const personal: User[] = Array(100)
                //         .fill(' ')
                //         .map((_, i) => ({
                //             id: i + 1,
                //             username: faker.internet.userName(),
                //             nombre: faker.person.firstName(),
                //             apellido: faker.person.lastName(),
                //             operativo: faker.datatype.boolean(),
                //             activo: faker.datatype.boolean(),
                //             email: faker.internet.email(),
                //             sucursal: faker.location.city(),
                //         }))
                //     dispatch(updateState({ personal }))
                // }, 2000)
                try {
                    const dbPersonal = await findPersonal()
                    console.log(dbPersonal)
                    dispatch(updateState({ personal: dbPersonal.data }))
                } catch (error) {
                    dispatch(updateState({ personal: 'error' }))
                }
            })()
        }
    }, [personal.personal])

    const openPersonalDrawer = (dto: PersonalState['createDrawer']) =>
        dispatch(updateState({ createDrawer: dto }))
    const closePersonalDrawer = () =>
        dispatch(updateState({ createDrawer: null }))

    const openDeleteDialog = (dto: PersonalState['deleteDialog']) =>
        dispatch(updateState({ deleteDialog: dto }))
    const closeDeleteDialog = () =>
        dispatch(updateState({ deleteDialog: null }))

    const reloadPersonal = () => dispatch(updateState({ personal: null }))

    const deletePersonal = async (user: User) => {
        await deletePersonalApi(user)
    }

    const createPersonal = async (user: Omit<User, 'id'>) => {
        const { sucursal, ...rest } = user
        const parsed: Omit<User, 'id'> = {
            ...rest,
            sucursal: parseInt(sucursal),
        }
        await createPersonalApi(parsed)
    }

    const totalData = personal.personal?.length || 0

    return {
        ...personal,
        openPersonalDrawer,
        closePersonalDrawer,
        createPersonal,
        reloadPersonal,
        totalData,
        openDeleteDialog,
        closeDeleteDialog,
        deletePersonal,
    }
}
