import { Alert } from '@/components/ui'
import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <>
            <div className="mb-8">
                <h3 className="mb-1">¡Hola! 👋</h3>
                <p>Inicia sesión con tus credenciales.</p>
            </div>
            <SignInForm disableSubmit={false} />
        </>
    )
}

export default SignIn
