import { ChangeEvent, FC, useRef, useState } from 'react'
import styles from './FileUpload.module.scss'

const FileUpload: FC = () => {

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedFile(file || null)
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className={styles.file_upload}>
      <input
        type='file'
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
      <button
        className={styles.file_upload__button}
        onClick={handleButtonClick}
      >
        <img
          src='/upload.svg'
          alt='Icon'
          className={styles.file_upload__button__icon}
        />
        <p className={styles.file_upload__button__title}>Загрузить файл</p>
      </button>
      {selectedFile &&
        <div className={styles.file_upload__selected_file}>Выбран файл: {selectedFile.name}</div>
      }
    </div>
  )
}

export default FileUpload