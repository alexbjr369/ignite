import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="John Doe"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis totam nobis autem sequi. Alias?"
          />
          <Post
            author="John Doe 2"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta vero delectus quisquam aliquid aut."
          />
        </main>
      </div>
    </div>
  );
}
