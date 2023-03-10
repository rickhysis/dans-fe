import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import PositionView from '../../components/position-view'
//import Head from 'next/head'
import ProtectedPage from '../protected/protected-page'

const View: NextPage = () => {

  const router = useRouter()
  const { slug } = router.query

  return slug ? (
    <ProtectedPage>
      <Layout>
        <Navbar />
        <PositionView detail={slug as string}/>
      </Layout>
    </ProtectedPage>
  ) : null
}

export default View