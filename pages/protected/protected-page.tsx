import * as React from 'react'
import { useRouter } from 'next/router'

interface Props {
    children: React.ReactNode
}

const ProtectedPage: React.FunctionComponent<Props> = (props: Props) => {
    const router = useRouter();

    React.useEffect(() => {
        const isLogedIn = typeof window !== "undefined" ? localStorage.getItem('__AUTHTOKEN__') : false;

        if (!isLogedIn) router.push('/login', undefined, { shallow: true });
    }, [])
    
    return (
        <>
            {props.children}
        </>
    );
};

export default ProtectedPage;