import { Button } from '@/components/button'
import Image from 'next/image'

export default function Home() {
  const heading = 'Hi, Taylor'
  const body =
    'You have 6 medical bills ready from ABC Health System. You can pay your bills here or verify your identity to view full bill details.'

  const totalDue = '$600.00'
  return (
    <main className="grid h-full grid-cols-1 grid-rows-[1fr_2fr] place-items-center">
      <div className="flex h-full max-w-xs flex-col justify-end gap-2 pb-6 text-center">
        <h1 className="font-serif text-2xl font-bold text-accent-foreground">
          {heading}
        </h1>
        <p className="text-md h-fit font-light">{body}</p>
      </div>
      <div className="flex h-full w-full justify-center rounded-t-3xl bg-card pt-6 drop-shadow-md">
        <div className="flex w-full max-w-xs flex-col gap-6">
          <div className="flex w-full items-center justify-between">
            <p className="font-bold text-muted-foreground">Total due</p>
            <p className="font-serif text-2xl font-bold text-accent-foreground">
              {totalDue}
            </p>
          </div>
          <Button>Pay total</Button>
        </div>
      </div>
    </main>
  )
}
