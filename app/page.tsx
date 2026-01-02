import { BlogPosts } from './components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>

      <p className="mb-4">
        I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
