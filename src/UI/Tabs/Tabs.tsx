import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Tabs.module.scss'

export interface ITab {
  title: string,
  routePath: string,
  iconPath: string
}

interface ITabs {
  tabs: ITab[]
}

const Tabs: FC<ITabs> = ({
                           tabs,
                         }) => {
  return (
    <div className={styles.tabs}>
      {
        tabs.map(tab => {
          return (
            <NavLink
              to={tab.routePath}
              className={styles.tabs__tab}
            >
              <img
                src={tab.iconPath}
                className={styles.tabs__tab__icon}
                alt='icon'
              />
              <p className={styles.tabs__tab__title}>{tab.title}</p>
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default Tabs