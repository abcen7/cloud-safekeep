import { FC } from 'react'
import styles from './Items.module.scss'
import { FilePreview } from '../FilePreview'

export interface IItem {
  title: string
  tag: string
  preview?: string
}

interface IItems {
  items: IItem[]
}

const Items: FC<IItems> = ({
                             items,
                           }) => {

  return (
    <div
      className={styles.items}
    >
      {
        items.map(item => {
          return <div className={styles.items__item}>
            <FilePreview item={item} />
            <label>{item.title}</label>
          </div>
        })
      }
    </div>
  )
}

export default Items