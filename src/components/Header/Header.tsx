import { FC } from 'react'
import styles from './Header.module.scss'
import { Logo } from '../../UI/Logo'
import { NavLink } from 'react-router-dom'
import routePaths from '../CoreRouter/routePaths.ts'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <NavLink
        to={routePaths.DASHBOARD}
        style={{
          textDecoration: 'none'
        }}
      >
        <div className={styles.header__logo}>
          <Logo
            width={'48px'}
          />
          <p className={styles.header__logo__title}>CloudSafeKeep</p>
        </div>
      </NavLink>
    </header>
  )
}

export default Header