import {
    HiOutlineHome,
    HiOutlineClipboardCheck,
    HiOutlineUserCircle,
    HiOutlineIdentification,
    HiOutlineShoppingBag,
    HiOutlineCurrencyDollar,
    HiOutlineTag,
} from 'react-icons/hi'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <HiOutlineHome />,
    admin: <HiOutlineIdentification />,
    clients: <HiOutlineUserCircle />,
    personal: <HiOutlineUserCircle />,
    products: <HiOutlineTag />,
    sales: <HiOutlineCurrencyDollar />,
}

export default navigationIcon
