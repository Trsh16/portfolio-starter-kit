import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "../blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="flex flex-col gap-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) >
            new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="
              group
              block
              rounded-xl
              bg-gradient-to-r from-gray-500 to-gray-600
              p-[1px]
              transition-all
              hover:scale-[1.01]
              active:scale-[0.98]
            "
          >
            <div
              className="
                rounded-[11px]
                bg-white
                dark:bg-neutral-950
                overflow-hidden
                transition-all
                group-hover:bg-transparent
              "
            >
              {/* Thumbnail */}
              {post.metadata.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-4 space-y-2">
                <p className="text-sm text-neutral-500  dark:text-neutral-400 group-hover:text-white/90">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>

                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-white">
                  {post.metadata.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 group-hover:text-white/90">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
