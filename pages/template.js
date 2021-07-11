import pageJS from '!!raw-loader!../js/api.js';
import UglifyJS from 'uglify-js';

import StaticContent from '../components/StaticContent';

export const config = {
  unstable_runtimeJS: false
};

export async function getStaticProps({ params }) {
  return { props: { js: UglifyJS.minify(pageJS).code } };
}

export default function Home({ js }) {
  return (
    <>
      <h1>Template tag</h1>
      <div x-data="API()" x-init="getData()">
        <div className="flex gap-x-2">
          <button x-on:click="getData('users')">Users</button>
          <button x-on:click="getData('posts')">Posts</button>
        </div>
        <ul>
          <StaticContent>
            <template x-for="d in data">
              <li x-text="d"></li>
            </template>
          </StaticContent>
        </ul>
      </div>
      <script dangerouslySetInnerHTML={{ __html: js }} />
    </>
  );
}
