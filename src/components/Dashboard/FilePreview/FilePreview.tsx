import { FC } from 'react'
import styles from './FilePreview.module.scss'
import { IItem } from '../Items'

interface IFilePreview {
  item: IItem
}

const FilePreview: FC<IFilePreview> = ({
                                         item,
                                       }) => {
  return (
    <>
      {
        item?.preview
          ?
          <div className={styles.preview_container}>
            <img
              className={styles.preview_container__image}
              src={item?.preview}
              alt='preview'
            />
          </div>
          :
          <div className={styles.file_preview_wrapper}>
            <div className={styles.preview_container}>
              <img
                className={styles.preview_container__image}
                src='/icons/file.svg'
                alt=''
              />
            </div>
            <span
              className={styles.file_preview_wrapper__badge}
            >{item.tag}</span>
          </div>
      }
    </>
  )
}

export default FilePreview