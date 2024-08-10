
import Link from "next/link"
export default function HeroSection() {
  return (
    <div className="flex flex-col">
      <main className="">
        <section className="w-full h-screen	 py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="grid max-w-[800px] mx-auto gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Discover the Latest Insights and Trends
              </h1>
              <p className="text-lg text-muted-foreground">
                Our blog covers a wide range of topics, from technology and business to lifestyle and personal growth.
              </p>
              <div>
                <Link
                  href="/blog"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read the Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
       </main>
      </div>
  )
}