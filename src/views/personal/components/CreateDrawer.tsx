import Button from '@/components/ui/Button'
import Drawer from '@/components/ui/Drawer'
import { Field, FieldProps, Form, Formik } from 'formik'
import {
    FormContainer,
    FormItem,
    Input,
    Select,
    Switcher,
} from '@/components/ui'
import * as Yup from 'yup'
import usePersonal from '../usePersonal'
import { User } from '@/@types/api'

const options: any[] = [{ value: '4', label: 'Prueba' }]

const parseSucursal = (sucursal: any) => ({ sucursal: sucursal.id })

const parseCreateUser = ({ sucursal, ...user }: User) => ({
    sucursal: parseSucursal(sucursal),
    ...user,
})

const commonSchema = {
    email: Yup.string()
        .email('Ingresa un email válido.')
        .required('Ingresa un email.'),
    nombre: Yup.string()
        .min(3, 'El nombre es muy corto.')
        .max(24, 'El nombre es muy largo.')
        .required('Ingresa un nombre.'),
    apellido: Yup.string()
        .min(3, 'El apellido es muy corto.')
        .max(24, 'El apellido es muy largo.')
        .required('Ingresa un apellido.'),
    username: Yup.string()
        .min(3, 'El nombre de usuario es muy corto.')
        .max(12, 'El nombre de usuario es muy largo.')
        .required('Ingresa un nombre de usuario.'),
    sucursal: Yup.string()
        .required('Ingresa una sucursal')
        .not(['none'], 'Debes seleccionar una sucursal.'),
    activo: Yup.boolean(),
    operativo: Yup.boolean(),
}

const validationSchemaCreate = Yup.object().shape({
    ...commonSchema,
    password: Yup.string()
        .min(3, 'La contraseña es muy corta.')
        .required('Ingresa una contraseña.'),
})

const validationSchemaEdit = Yup.object().shape({
    id: Yup.number().required(),
    ...commonSchema,
})

const CreateDrawer = () => {
    const {
        createDrawer,
        closePersonalDrawer,
        createPersonal,
        reloadPersonal,
    } = usePersonal()
    const onDrawerClose = () => {
        closePersonalDrawer()
    }
    const label = createDrawer === 'create' ? 'Crear' : 'Guardar'
    const title = createDrawer === 'create' ? 'Crear' : 'Editar'
    return (
        <Drawer
            title={title}
            isOpen={createDrawer !== null}
            onClose={onDrawerClose}
            onRequestClose={onDrawerClose}
        >
            <Formik
                initialValues={
                    createDrawer !== 'create'
                        ? (createDrawer as Omit<User, 'id'>)
                        : {
                              email: '',
                              username: '',
                              nombre: '',
                              apellido: '',
                              sucursal: '',
                              activo: true,
                              operativo: true,
                              password: '',
                          }
                }
                validationSchema={
                    createDrawer === 'create'
                        ? validationSchemaCreate
                        : validationSchemaEdit
                }
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    console.log('submited')
                    try {
                        await (createDrawer === 'create'
                            ? createPersonal(values)
                            : (() => {})())
                        reloadPersonal()
                        resetForm()
                        onDrawerClose()
                    } catch (error) {
                        alert(error)
                    }
                    setSubmitting(false)
                }}
            >
                {({ touched, errors, isSubmitting, values }) => (
                    <Form id="create-edit">
                        <FormContainer>
                            <FormItem
                                label="Sucursal"
                                invalid={errors.sucursal && touched.sucursal}
                                errorMessage={errors.sucursal}
                            >
                                <Field name="sucursal">
                                    {({ field, form }: FieldProps<any>) => (
                                        <Select
                                            field={field}
                                            form={form}
                                            placeholder="Selecciona una sucursal..."
                                            options={options}
                                            value={options.filter(
                                                (option) =>
                                                    option.value ===
                                                    values.sucursal,
                                            )}
                                            onChange={(option) =>
                                                form.setFieldValue(
                                                    field.name,
                                                    option?.value,
                                                )
                                            }
                                        />
                                    )}
                                </Field>
                            </FormItem>
                            <FormItem
                                label="Nombre"
                                invalid={errors.nombre && touched.nombre}
                                errorMessage={errors.nombre}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="nombre"
                                    placeholder="Nombre"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label="Apellido"
                                invalid={errors.apellido && touched.apellido}
                                errorMessage={errors.apellido}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="apellido"
                                    placeholder="Apellido"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label="Email"
                                invalid={errors.email && touched.email}
                                errorMessage={errors.email}
                            >
                                <Field
                                    type="email"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="Email"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label="Usuario"
                                invalid={errors.username && touched.username}
                                errorMessage={errors.username}
                            >
                                <Field
                                    autoComplete="off"
                                    name="username"
                                    placeholder="Usuario"
                                    component={Input}
                                />
                            </FormItem>
                            {createDrawer === 'create' && (
                                <FormItem
                                    label="Contraseña"
                                    invalid={
                                        errors.password && touched.password
                                    }
                                    errorMessage={errors.password}
                                >
                                    <Field
                                        type="password"
                                        autoComplete="off"
                                        name="password"
                                        placeholder="Contraseña"
                                        component={Input}
                                    />
                                </FormItem>
                            )}
                            <FormItem
                                label="Activo"
                                invalid={errors.activo && touched.activo}
                                errorMessage={errors.activo}
                            >
                                <Field name="activo" component={Switcher} />
                            </FormItem>
                            <FormItem
                                label="Operativo"
                                invalid={errors.operativo && touched.operativo}
                                errorMessage={errors.operativo}
                            >
                                <Field name="operativo" component={Switcher} />
                            </FormItem>
                            <FormItem>
                                <Button
                                    variant="solid"
                                    className="w-full"
                                    type="submit"
                                    loading={isSubmitting}
                                >
                                    {label}
                                </Button>
                            </FormItem>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </Drawer>
    )
}

export default CreateDrawer
