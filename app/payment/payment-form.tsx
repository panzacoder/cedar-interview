import { Button } from '@/components/button'
import { Input } from '@/components/form/input'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  cardNumber: z.string().min(16, {
    message: 'Please enter a valid card number.'
  }),
  expiry: z.string().min(5, {
    message: 'Please enter a valid expiration date.'
  }),
  cvv: z.string().min(3, {
    message: 'Please enter a valid CVV.'
  }),
  name: z.string().min(2, {
    message: 'Please enter a valid name.'
  }),
  zipCode: z.string().min(5, {
    message: 'Please enter a valid zip code.'
  })
})

export type PaymentFormSchema = z.infer<typeof formSchema>

const FormInput = Input<PaymentFormSchema>
export function PaymentForm({
  onSubmit
}: {
  onSubmit: (data: PaymentFormSchema) => void
}) {
  const form = useForm<PaymentFormSchema>({
    resolver: zodResolver(formSchema),
    shouldUseNativeValidation: false,
    defaultValues: {
      cardNumber: '',
      expiry: '',
      cvv: '',
      name: '',
      zipCode: ''
    }
  })

  return (
    <FormProvider {...form}>
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormInput label="Card number" name="cardNumber" />
        <div className="grid grid-cols-2 gap-2">
          <FormInput label="Expires (MM/YY)" name="expiry" />
          <FormInput label="Security code (CVV)" name="cvv" />
        </div>
        <FormInput label="Name on card" name="name" />
        <FormInput label="Zip code" name="zipCode" />
        <Button type="submit">Continue</Button>
      </form>
    </FormProvider>
  )
}
