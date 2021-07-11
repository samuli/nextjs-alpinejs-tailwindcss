# Next.js static site with AlpineJS and tailwindcss

[Demo](https://60eadbb216850098e1caa2d0--naughty-beaver-b42d94.netlify.app)

## Notes

- To export a static Next.js site (without React-bundle and client-side hydration), set this for all pages:
   ``` export const config = {                                                                                                                                              unstable_runtimeJS: false,                                                                                                                                        };```
- Add interactivity to the exported static markup using AlpineJS. 
- If needed, you can use an external js-file for example by:
   - Add a link-tag to Head:
       ```
       <Head>
         <script type="text/javascript" src="/foo.js" />
       </Head>
       ```
   - Inline the source file using webpack's raw-loader `dangerouslySetInnerHTML` (see https://github.com/samuli/nextjs-alpinejs-tailwindcss/blob/main/pages/counter.js)
   - For critical js, inline the source to the Head-tag (see https://github.com/samuli/nextjs-alpinejs-tailwindcss/blob/main/pages/_document.js)
- Note: if an element's markup is changed by AlpineJS (for example when using Alpine's `x-text`) you might get a React warning in development-mode (e.g. Warning: Text content did not match). To prevent this, wrap the element in <StaticContent>:
  ``` 
  <StaticContent><button x-on:click="open = !open" x-text="open ? 'hide' : 'show'">Toggle</button></StaticContent>
  ```
  This prevents Next.js from rendering (and hence also hot-reloading) the element on the client-side (see https://github.com/samuli/nextjs-alpinejs-tailwindcss/blob/main/pages/counter.js). 
 
## References:
- https://www.johanbleuzen.fr/blog/next-remove-clientside-javascript
- https://webcloud.se/blog/2020-03-12-nextjs-without-client-side-react/

---


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
