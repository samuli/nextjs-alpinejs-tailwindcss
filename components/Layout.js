import StaticContent from '../components/StaticContent';
import Link from '../components/Link';

const Layout = ({ children }) => {
  return (
    <>
      <navigation>
        <div className="flex w-full justify-between mb-2">
          <Link className="no-underline" href="/"><p className="font-bold">Next.js static site with AlpineJS+tailwindcss</p></Link>
          <div x-data="{ darkTheme: DARK_THEME }" className="flex">
            <p>Dark theme: <StaticContent><span x-text="darkTheme"></span></StaticContent></p>
            <button
              x-on:click="darkTheme = !darkTheme; SET_DARK_THEME(darkTheme)"
              className="ml-2">Toggle</button>
          </div>
        </div>
      </navigation>
      <main>{children}</main>
    </>
  );
};

export default Layout;
