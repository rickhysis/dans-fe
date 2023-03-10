import * as React from 'react'

interface Props {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props:Props) => {
    return (
        <div className="bg-slate-200 sm:h-screen md:h-screen h-full">
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;