import { Outlet } from 'react-router-dom'
import './App.scss'
import { Header } from './modules/Header'
import { Footer } from './modules/Footer'

function App() {

  return (
    <div className="app">
      <header>
        <Header />
      </header>

      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
