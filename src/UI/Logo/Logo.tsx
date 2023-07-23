import { FC, CSSProperties } from 'react'

interface ILogo {
  className?: string,
  style?: CSSProperties
  width?: string
}

const Logo: FC<ILogo> = ({
                           className,
                           style,
                           width,
                         }) => {
  return (
    <img
      src='/cloud.svg'
      alt=''
      width={width}
      className={className}
      style={style}
    />
  )
}

export default Logo