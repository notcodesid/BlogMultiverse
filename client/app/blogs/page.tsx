"use client";
import { BlogCard } from "@/components/blogCard";
import { useBlogs  } from "../hook";

export interface Blog {
  id : number;
  content: string;
  title: string;
  author: {
    username: string;
  };
}

export default function Blog() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
      Loading...
      </div>;
  }

  return (
    <>
      <main className="py-12 px-4 md:px-6">
        <section className="max-w-3xl mx-auto grid gap-8">
          <div className="grid gap-2">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <p className="text-muted-foreground">
              Check out our latest blog posts and stay up-to-date with our content.
            </p>
          </div>
          <div className="grid gap-6">
            {blogs.map((blog) => (
             <BlogCard 
             id={blog.id} 
                authorName={blog.author.username}
                title={blog.title}
                content={blog.content}
                publishedDate={"2 Feb 2024"} 
                />
            ))}


          </div>
        </section>
      </main>
    </>
  );
}
