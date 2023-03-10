import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"
import user from './images/bruno_user.jpg'
import './global.css'
import styles from './App.module.css'

const posts : PostType[] = [
  {
    id:1,
    author:{
      src: user,
      name: 'Bruno A',
      rule: 'Programmer'
    },
    content:[
      {type: 'paragraph', content:' Fala galeraa 👋 '},
      {type: 'paragraph', content:' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: ' jane.design/doctorcare '},
    ],
    publishedAt: new Date('2023-01-03 20:51:32'),
  },
  {
    id:2,
    author:{
      src: user,
      name: 'Bruno A',
      rule: 'Programmer'
    },
    content:[
      {type: 'paragraph', content:' Fala galeraa 👋 '},
      {type: 'paragraph', content:' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: ' jane.design/doctorcare '},
    ],
    publishedAt: new Date('2022-12-27 11:21:47'),
  }
]

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post=>{
            return(
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
