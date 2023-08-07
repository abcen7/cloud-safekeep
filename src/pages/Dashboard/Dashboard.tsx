import { FileUpload } from '../../UI/FileUpload'
import styles from './Dashboard.module.scss'
import { ITab, Tabs } from '../../UI/Tabs'
import { RoutePaths } from '../../components/CoreRouter'
import { generatePath } from 'react-router-dom'
import { IItem, Items } from '../../components/Dashboard/Items'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [items, setItems] = useState<IItem[]>([
    {
      title: 'photo1.png',
      tag: 'png',
      preview:
        'https://sun9-67.userapi.com/impg/hyj9KQ6-9TCXok1iiNzsLVdlUAe6tJukw_MYNw/VcvQK91bhmA.jpg?size=2560x1703&quality=95&sign=9f974ade8df8408c98806a5098474919&type=album',
    },
    {
      title: 'photo1.png',
      tag: 'png',
      preview:
        'https://images.unsplash.com/photo-1620120966883-d977b57a96ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjJTIwb3MlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
  ])

  const tabs: ITab[] = [
    {
      title: 'Файлы',
      routePath: generatePath(RoutePaths.DASHBOARD, { place: 'files' }),
      iconPath: '/icons/file.svg',
    },
    {
      title: 'Изображения',
      routePath: generatePath(RoutePaths.DASHBOARD, { place: 'images' }),
      iconPath: '/icons/file-image.svg',
    },
    {
      title: 'Корзина',
      routePath: generatePath(RoutePaths.DASHBOARD, { place: 'trash' }),
      iconPath: '/icons/trash.svg',
    },
  ]

  useEffect(() => {
    const x: IItem[] = []
    for (let i = 0; i < 10; ++i) {
      items.forEach((item) => x.push(item))
    }
    setItems(x)
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__content}>
        <div className={styles.dashboard__content__aside}>
          <FileUpload />
          <Tabs tabs={tabs} />
        </div>
        <div className={styles.dashboard__content__items}>
          <Items items={items} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
