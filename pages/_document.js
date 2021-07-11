import Document, { Html, Head, NextScript, Main } from 'next/document'
import criticalJS from '!!raw-loader!../js/theme.js';
import UglifyJS from 'uglify-js';
import Layout from '../components/Layout';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script defer src="https://unpkg.com/alpinejs@3.2.1/dist/cdn.min.js"></script>
          <script dangerouslySetInnerHTML={{ __html: UglifyJS.minify(criticalJS).code }} />
        </Head>
        <body className="p-2 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          <Layout>
            <Main />
          </Layout>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
