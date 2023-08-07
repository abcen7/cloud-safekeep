import { FC } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
