import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex flex-col my-4 gap-2 items-center justify-center">
      <Separator />
      <Button variant={'link'} asChild>
        <Link href="https://github.com/renatorrocha">
          Desenvolvido por @renatorrocha
        </Link>
      </Button>
    </div>
  )
}
