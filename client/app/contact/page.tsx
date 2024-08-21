
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import { Appbar } from "@/components/appbar"

export default function Footer() {
  return (
    <>
    <div className="flex flex-col">
      <section className="w-full  py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Have a question, feedback, or just want to say hello? Fill out the form below and we'll get back to you as
            soon as possible.
          </p>
        </div>
      </section>
      <section className="w-full mt-10 ">
        <div className="container md:px-6 md:w-2/4">
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-6 text-center flex justify-center items-center my-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Follow Us</h2>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <TwitterIcon className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <InstagramIcon className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <LinkedinIcon className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}