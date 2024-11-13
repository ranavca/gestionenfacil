import { HiArrowCircleDown } from 'react-icons/hi'
import { Button } from '../ui'
import Container from './Container'
import DoubleSidedImage from './DoubleSidedImage'

export interface ErrorScreenProps {
    onRetry?: () => any
}

export default function ErrorScreen(props: ErrorScreenProps) {
    const { onRetry } = props
    return (
        <Container className="h-full">
            <div className="h-full flex flex-col items-center justify-center">
                <DoubleSidedImage
                    src="/img/others/img-2.png"
                    darkModeSrc="/img/others/img-2-dark.png"
                    alt="Access Denied!"
                />
                <div className="mt-6 text-center">
                    <h3 className="mb-2">Hubo un error</h3>
                    <p className="text-base">
                        Lamentamos las molestias, vuelve a intentar más tarde.
                    </p>
                    {onRetry && (
                        <Button className="mt-6" onClick={onRetry}>
                            Reintentar
                        </Button>
                    )}
                </div>
            </div>
        </Container>
    )
}
