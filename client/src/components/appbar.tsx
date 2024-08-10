import { MountainIcon } from "lucide-react";
import Link from "next/link"

export function Appbar() {

    return (
        <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" >
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">BlogMultiverse</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} >
            Home
          </Link>
          <Link href="/blogs" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blog
          </Link>
          <Link href="/signup" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} >
            Sign up
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
    )
}