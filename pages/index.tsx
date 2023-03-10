import type { NextPage } from 'next'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import PositionList from '../components/position-list'
//import Head from 'next/head'
import ProtectedPage from './protected/protected-page'

const Home: NextPage = () => {
  return (
    <ProtectedPage>
      <Layout>
        <Navbar />
        <PositionList />
      </Layout>
    </ProtectedPage>
  )
}

export default Home