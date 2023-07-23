import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes.ts'
import { MainLayout } from '../Layout'
import multiLazy from '../../utils/multiLazy'

const CoreRouter: FC = () => {

  const [
    DashboardPage,
  ] = multiLazy([
    () => import('../../pages/Dashboard.tsx'),
  ])

  return (
    <Routes>
      <Route
        path={routes.ROOT}
        element={<MainLayout />}
      >
        {/*<Route*/}
        {/*  path={routes.ACCOUNT}*/}
        {/*  element={<AccountPage />}*/}
        {/*/>*/}
        <Route
          path={routes.DASHBOARD}
          element={<DashboardPage />}
        />
        {/*<Route*/}
        {/*  path={routes.LOGIN}*/}
        {/*  element={<LoginPage />}*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path={routes.REGISTER}*/}
        {/*  element={<RegisterPage />}*/}
        {/*/>*/}
      </Route>
    </Routes>
  )
}

export default CoreRouter