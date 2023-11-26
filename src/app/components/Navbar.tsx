import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex items-center justify-center h-16 gap-12 px-4">
      <Button variant={'link'} asChild>
        <Link className="text-2xl" href="/">
          Cards
        </Link>
      </Button>
      <Button variant={'link'} asChild>
        <Link className="text-2xl" href="/gallery">
          Galeria
        </Link>
      </Button>
    </div>
  )
}
