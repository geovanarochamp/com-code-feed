import { Header } from './components/Header/Header'
import { Profile } from './components/Profile/Profile'
import { Post } from './components/Posts/Posts'

import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Profile />
        <Post />

      </div>
    </div>
  )
}

export default App
