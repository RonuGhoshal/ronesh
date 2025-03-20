import './App.css'
import Home from './components/Home'
import Music from './components/Music'
import Blog from './components/Blog'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState(window.location.hash.replace('#', '') || 'home')

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash.replace('#', '') || 'home')
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'music':
        return <Music />
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src="src/assets/ro.jpg" alt="Logo" className="logo-image" />
          RONESH
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home" onClick={() => setActiveTab('home')}>Home</a></li>
            <li><a href="#music" onClick={() => setActiveTab('music')}>Music</a></li>
            <li><a href="#blog" onClick={() => setActiveTab('blog')}>Blog</a></li>
            <li><a href="#contact" onClick={() => setActiveTab('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {renderContent()}
        <nav className="nav-mobile">
          <ul>
            <li><a href="#home" onClick={() => setActiveTab('home')}>Home</a></li>
            <li><a href="#music" onClick={() => setActiveTab('music')}>Music</a></li>
            <li><a href="#blog" onClick={() => setActiveTab('blog')}>Blog</a></li>
            <li><a href="#contact" onClick={() => setActiveTab('contact')}>Contact</a></li>
          </ul>
        </nav>
      </main>
    </div>
  )
}

export default App
