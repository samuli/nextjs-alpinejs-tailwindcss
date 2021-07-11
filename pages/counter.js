import Head from 'next/head';
import counterJS from '!!raw-loader!../js/counter.js';
import UglifyJS from 'uglify-js';
import StaticContent from '../components/StaticContent';

export const config = {
  unstable_runtimeJS: false
};

export async function getStaticProps({ params }) {
  return { props: { js: UglifyJS.minify(counterJS).code } };
}

export default function Counter({ js }) {
  return (
    <>
      <Head>
      </Head>
      <div>
        <div x-data="Counter()" className="flex items-center">
          <p>Counter: <StaticContent><span x-text="cnt"></span></StaticContent></p>
          <div className="flex ml-2 gap-x-1">
            <button className="w-8" x-on:click="inc()">+</button>
            <button className="w-8" x-on:click="dec()">-</button>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: js }} />
      </div>
    </>
  );
}
