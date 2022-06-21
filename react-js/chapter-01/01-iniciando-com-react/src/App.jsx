import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post
        author="John Doe"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis totam nobis autem sequi. Alias?"
      />
      <Post
        author="John Doe 2"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta vero delectus quisquam aliquid aut."
      />
    </div>
  );
}
