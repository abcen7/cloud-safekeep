import { FileUpload } from '../../UI/FileUpload'
import styles from './Dashboard.module.scss'
import { ITab, Tabs } from '../../UI/Tabs'
import { RoutePaths } from '../../components/CoreRouter'
import { generatePath } from 'react-router-dom'

const Dashboard = () => {

  const tabs: ITab[] = [
    {
      title: 'Файлы',
      routePath: generatePath(
        RoutePaths.DASHBOARD,
        { place: 'files' },
      ),
      iconPath: '/icons/file.svg'
    },
    {
      title: 'Изображения',
      routePath: generatePath(
        RoutePaths.DASHBOARD,
        { place: 'images' },
      ),
      iconPath: '/icons/file-image.svg'
    },
    {
      title: 'Корзина',
      routePath: generatePath(
        RoutePaths.DASHBOARD,
        { place: 'trash' },
      ),
      iconPath: '/icons/trash.svg'
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