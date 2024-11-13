import classNames from 'classnames'
import Container from '@/components/shared/Container'
import { APP_NAME } from '@/constants/app.constant'
import { PAGE_CONTAINER_GUTTER_X } from '@/constants/theme.constant'

export type FooterPageContainerType = 'gutterless' | 'contained'

type FooterProps = {
    pageContainerType: FooterPageContainerType
}

const FooterContent = () => {
    return <></>
}

export default function Footer({
    pageContainerType = 'contained',
}: FooterProps) {
    return (
        <footer
            className={classNames(
                `footer flex flex-auto items-center h-16 ${PAGE_CONTAINER_GUTTER_X}`,
            )}
        >
            {pageContainerType === 'contained' ? (
                <Container>
                    <FooterContent />
                </Container>
            ) : (
                <FooterContent />
            )}
        </footer>
    )
}
