import { FC } from 'react'
import './styles/_main.scss'
import { BrowserRouter } from 'react-router-dom'
import { CoreRouter } from './components/CoreRouter'

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <CoreRouter />
      </BrowserRouter>
    </>
  )
}

export default App
