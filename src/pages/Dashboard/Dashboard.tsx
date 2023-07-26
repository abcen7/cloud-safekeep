import { FileUpload } from '../../UI/FileUpload'
import styles from './Dashboard.module.scss'
import { ITab, Tabs } from '../../UI/Tabs'
import { RoutePaths } from '../../components/CoreRouter'
import { generatePath } from 'react-router-dom'

const Dashboard = () => {

  const tabs: ITab[] = [
    {
      title: '/dashboard/files',
      path: generatePath(
        RoutePaths.DASHBOARD,
        { place: 'files' },
      ),
    },
    {
      title: '/dashboard/images',
      path: generatePath(
        RoutePaths.DASHBOARD,
        { place: 'images' },
      ),
    },
    {
      title: '/dashboard/trash',
      path: generatePath(
        RoutePaths.DASHBOARD,
        { place: 'trash' },
      ),
    },
  ]

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__content}>
        <div className={styles.dashboard__content__aside}>
          <FileUpload />
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard