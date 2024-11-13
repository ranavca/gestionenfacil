import { apiSignIn, apiSignOut, apiSignUp } from '@/services/AuthService'
import {
    setUser,
    signInSuccess,
    signOutSuccess,
    useAppSelector,
    useAppDispatch,
} from '@/store'
import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'
import type { SignInCredential, SignUpCredential } from '@/@types/auth'
import { faker } from '@faker-js/faker/locale/es_MX'

type Status = 'success' | 'failed'

function useAuth() {
    const dispatch = useAppDispatch()

    const auth = useAppSelector((state) => state.auth)

    const navigate = useNavigate()

    const query = useQuery()

    const { token, signedIn } = useAppSelector((state) => state.auth.session)

    const signIn = async (
        values: SignInCredential,
    ): Promise<
        | {
              status: Status
              message: string
          }
        | undefined
    > => {
        try {
            // const resp = await apiSignIn(values)
            // if (resp.data) {
            //     const { token } = resp.data
            //     dispatch(signInSuccess(token))
            //     dispatch(
            //         setUser({
            //             avatar: '',
            //             userName: 'Raimundo Navarrete',
            //             authority: ['User'],
            //             email: '',
            //         }),
            //     )
            //     const redirectUrl = query.get(REDIRECT_URL_KEY)
            //     navigate(
            //         redirectUrl
            //             ? redirectUrl
            //             : appConfig.authenticatedEntryPath,
            //     )
            //     return {
            //         status: 'success',
            //         message: '',
            //     }
            // }
            dispatch(signInSuccess('token'))
            dispatch(
                setUser({
                    avatar: faker.image.avatar(),
                    userName: faker.person.fullName(),
                    authority: ['User', 'Admin'],
                    email: faker.internet.email(),
                }),
            )
            const redirectUrl = query.get(REDIRECT_URL_KEY)
            navigate(
                redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath,
            )
            return {
                status: 'success',
                message: '',
            }
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        } catch (errors: any) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const handleSignOut = () => {
        dispatch(signOutSuccess())
        dispatch(
            setUser({
                avatar: '',
                userName: '',
                email: '',
                authority: [],
            }),
        )
        navigate(appConfig.unAuthenticatedEntryPath)
    }

    const user = auth.user

    const signOut = async () => {
        // await apiSignOut()
        handleSignOut()
    }

    return {
        authenticated: token && signedIn,
        signIn,
        signOut,
        user,
    }
}

export default useAuth
