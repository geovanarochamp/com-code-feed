import { Header } from './components/Header/Header'
import { Profile } from './components/Profile/Profile'
import { Post } from './components/Post/Post'

import './global.css'
import styles from './App.module.css'

// author: { avatarURL: '', name:'', role:'' }
// publishAt: date

const user = {
  coverURL: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
  avatarURL: 'https://github.com/pedromarins.png',
  name: 'Pedro Marins',
  role: 'Mentor'
}

const posts = [ 
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/pedromarins.png',
      name: 'Pedro Marins',
      role: 'Mentor'
    },
    publishedAt: new Date('2022-12-09 20:00')
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/henriquecrang.png',
      name: 'Henrique de Andrade',
      role: 'Mentor'
    },
    publishAt: new Date('2022-12-09 18:')
  },
  {
    id: 3,
    author: {
      avatarURL: 'https://github.com/geovanarochamp.png',
      name: 'Geovana Rocha',
      role: 'Desenvolvedora Front End'
    },
    publishAt: new Date('2022-12-09 14:07')
  }
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Profile data={user}/>
        <main>
        {
          posts.map( post => {
            return (
              <Post 
                author={post.author} publishedAt={post.publishedAt}
              />
            )
          })
        }
        </main>

      </div>
    </div>
  )
}

export default App
