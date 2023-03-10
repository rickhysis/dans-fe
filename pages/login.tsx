import * as React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/layout'
//import Head from 'next/head'
import LoginForm from '../components/login-form'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
    const router = useRouter();

    React.useEffect(() => {
        const isLogedIn = typeof window !== "undefined" ? localStorage.getItem('__AUTHTOKEN__') : false;

        if (isLogedIn) router.push('/', undefined, { shallow: true });
    }, [])
    
  return (
    <Layout>
      <LoginForm />
    </Layout>
  )
}

export default Login