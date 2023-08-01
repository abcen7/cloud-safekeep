import { FC } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <p>Hello!</p>
      </div>
    </footer>
  )
}

export default Footer