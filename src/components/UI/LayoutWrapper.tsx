import { Navbar } from "./Navbar"

type propType = {
    children: JSX.Element[] | JSX.Element
}

export const LayoutWrapper = ( {children}: propType ): JSX.Element => {
    return (
        <>
            <Navbar />
            { children }
        </>
    )
}
