import Image from 'next/image'
import { Button } from '@/components/button'
import Link from 'next/link'

export const PaymentConfirmation = ({
  amount,
  cardNumber
}: {
  amount: string
  cardNumber: string
}) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h4 className="text-xl">
        {`You're about to make a payment of`} <strong>{amount}</strong>
      </h4>
      <div className="flex flex-col gap-4 text-sm">
        <span className="font-bold text-muted-foreground">Payment method</span>
        <div className="flex items-center gap-2">
          <Image src="/visa.svg" alt="Visa Card Logo" width={24} height={24} />{' '}
          <span>
            Card ending in ****
            {cardNumber.slice(-4)}
          </span>
        </div>
        <Link href="/thank-you">
          <Button>Pay {amount}</Button>
        </Link>
      </div>
    </div>
  )
}
