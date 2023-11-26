import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function ButtonAction({ audio }: any) {
  return (
    <>
      <Separator />
      <div className="flex justify-center items-center gap-4">
        <Button onClick={() => audio.play()}>Ler Cards</Button>
        <Separator orientation="vertical" className="h-8" />
        <Button onClick={() => audio.load()} variant="secondary">
          pausar
        </Button>
      </div>
    </>
  )
}
