import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/85613172?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>John Doe</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="01 de julho às 08:00h" dateTime="2022-07-01 08:00:00">
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem, ipsum.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse autem
          excepturi qui, laborum, alias exercitationem assumenda praesentium
          eligendi suscipit fuga commodi nostrum minus dolores itaque.
        </p>
        <p>
          Link: <a href="">Lorem, ipsum dolor.</a>
        </p>
        <p>
          <a href="">#Lorem</a> <a href="">#Lorem</a> <a href="">#Lorem</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
