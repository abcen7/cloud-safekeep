import { FC } from 'react'
import styles from './Header.module.scss'
import { Logo } from '../../UI/Logo'
import { NavLink } from 'react-router-dom'
import routePaths from '../CoreRouter/routePaths.ts'
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icon}>
        <NavLink to={routePaths.DASHBOARD}>
          <Logo
            width={"48px"}
          />
        </NavLink>
      </div>
    </header>
  )
}

export default Header