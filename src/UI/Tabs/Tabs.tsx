import { FC } from 'react'
import { NavLink } from 'react-router-dom'

export interface ITab {
  title: string,
  path: string
}

interface ITabs {
  tabs: ITab[]
}

const Tabs: FC<ITabs> = ({
                           tabs,
                         }) => {
  return (
    <div>
      {
        tabs.map(tab => {
          return <NavLink to={tab.path}>{tab.title}</NavLink>
        })
      }
    </div>
  )
}

export default Tabs