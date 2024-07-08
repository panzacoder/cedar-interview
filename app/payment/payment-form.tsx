import { Button } from '@/components/button'
import { Input } from '@/components/form/input'

export function PaymentForm() {
  return (
    <form className="grid grid-cols-1 gap-4">
      <Input label="Card number" id="cardNumber" />
      <div className="grid grid-cols-2 gap-2">
        <Input label="Expires (MM/YY)" id="expiry" />
        <Input label="Security code (CVV)" id="cvv" />
      </div>
      <Input label="Name on card" id="name" />
      <Input label="Zip code" id="zipCode" />
      <Button type="submit">Continue</Button>
    </form>
  )
}
