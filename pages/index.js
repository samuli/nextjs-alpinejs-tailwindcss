import Link from '../components/Link';

export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <>
      <h1>Examples</h1>
      <ul>
        <li><Link href="/counter">Counter</Link></li>
        <li><Link href="/staticProps">getStaticProps</Link></li>
        <li><Link href="/template">Template tag</Link></li>
      </ul>
    </>
  );
}
