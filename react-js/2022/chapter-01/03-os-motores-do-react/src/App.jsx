import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/85613172?v=4',
      name: 'John Doe',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem, ipsum.'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse autem excepturi qui, laborum, alias exercitationem assumenda praesentium eligendi suscipit fuga commodi nostrum minus dolores itaque.'},
      { type: 'link', content: 'Lorem, ipsum dolor.'},
    ],
    publishedAt: new Date('2022-06-25 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/85613172?v=4',
      name: 'John Doe 2',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem, ipsum.'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse autem excepturi qui, laborum, alias exercitationem assumenda praesentium eligendi suscipit fuga commodi nostrum minus dolores itaque.'},
      { type: 'link', content: 'Lorem, ipsum dolor.'},
    ],
    publishedAt: new Date('2022-06-26 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
