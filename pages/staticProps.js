import StaticContent from '../components/StaticContent';

export const config = {
  unstable_runtimeJS: false
};

export async function getStaticProps({ params }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return { props: { todos: todos.slice(0,10) } };
}

export default function Home({ todos }) {
  return (
    <div>
      <h1>Toggle static rendered content</h1>
      <div x-data="{ open: false }">
        <StaticContent><button x-on:click="open = !open" x-text="open ? 'hide' : 'show'">Toggle</button></StaticContent>
        <ul x-show="open" style={{ display: 'none' }}>
        { todos.map(({id,title}) => <li key={`todo-${id}`}>{title}</li>) }
        </ul>
      </div>
    </div>
  );
}
