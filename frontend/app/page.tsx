import { sanityFetch } from '@/src/sanity/live'
import { POSTS_QUERY } from '@/src/sanity/queries'


export default async function Home() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

  return (
    <main>
      {posts.map((post) => (
        <div key={post._id}>
          {post.title}
          {post.slug && <a href={`/posts/${post.slug.current}`}>clic</a>}
          {/*             {post.body && <PortableText value={post.body} />}
           */}
        </div>
      ))}
    </main>
  )
}
