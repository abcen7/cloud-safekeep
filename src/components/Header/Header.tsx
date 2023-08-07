import { FC } from 'react'
import styles from './Header.module.scss'
import { Logo } from '../../UI/Logo'
import { generatePath, NavLink } from 'react-router-dom'
import { RoutePaths } from '../CoreRouter'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <NavLink
          to={generatePath(RoutePaths.DASHBOARD, { place: '' })}
          style={{
            textDecoration: 'none',
          }}
        >
          <div className={styles.header__wrapper__logo}>
            <Logo width={'48px'} />
            <p className={styles.header__wrapper__logo__title}>CloudSafeKeep</p>
          </div>
        </NavLink>
        <NavLink
          to={RoutePaths.ACCOUNT}
          style={{
            textDecoration: 'none',
          }}
        >
          <div className={styles.header__wrapper__account}>
            <p className={styles.header__wrapper__account__title}>
              Hi, Name 👋
            </p>
          </div>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
