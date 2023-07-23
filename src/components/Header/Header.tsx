import { FC } from 'react'
import styles from './Header.module.scss'
import { Logo } from '../../UI/Logo'
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icon}>
        <Logo
          width={"48px"}
        />
      </div>
    </header>
  )
}

export default Header