import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routePaths from './routePaths.ts'
import { MainLayout } from '../Layout'
import multiLazy from '../../utils/multiLazy'

const CoreRouter: FC = () => {
  const [DashboardPage, NotFoundPage] = multiLazy([
    () => import('../../pages/Dashboard/Dashboard.tsx'),
    () => import('../../pages/NotFound/NotFound.tsx'),
  ])

  return (
    <Suspense fallback={<>...</>}>
      <Routes>
        <Route path={routePaths.ROOT} element={<MainLayout />}>
          {/*<Route*/}
          {/*  path={routes.ACCOUNT}*/}
          {/*  element={<AccountPage />}*/}
          {/*/>*/}
          <Route path={routePaths.DASHBOARD} element={<DashboardPage />} />
          {/*<Route*/}
          {/*  path={routes.LOGIN}*/}
          {/*  element={<LoginPage />}*/}
          {/*/>*/}
          {/*<Route*/}
          {/*  path={routes.REGISTER}*/}
          {/*  element={<RegisterPage />}*/}
          {/*/>*/}

          <Route path={routePaths.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default CoreRouter
