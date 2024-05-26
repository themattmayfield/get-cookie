This is a tiny next app to show how you can use a server action on both the server and client to get a cookie.

The first paragraph on the [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) section in the next.js documentation says:

`Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.`

And we know in a server action we can manage cookies. This should be enough to imply that in a client component, since we can get cookies, we can use them to set the header in fetch()
# get-cookie
