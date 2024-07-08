'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/accordion'
import { PaymentForm, PaymentFormSchema } from './payment-form'
import { useState } from 'react'

export default function PaymentPage() {
  const [step, setStep] = useState('1')
  const [paymentInfo, setPaymentInfo] = useState<PaymentFormSchema>()

  function handleSuccessfulSubmission(formData: PaymentFormSchema) {
    console.log(formData)
    setStep('2')
    setPaymentInfo(formData)
  }
  return (
    <main className="flex h-full w-full justify-center">
      <div className="h-fit w-full max-w-md bg-card px-8 py-4 sm:rounded-xl">
        <Accordion type="single" collapsible defaultValue={step} value={step}>
          <AccordionItem value="1" onClick={() => setStep('1')}>
            <AccordionTrigger className="hover:no-underline">
              1 Payment information
            </AccordionTrigger>
            <AccordionContent>
              <PaymentForm onSubmit={handleSuccessfulSubmission} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="2"
            className="sm:border-none"
            disabled={!paymentInfo}
            onClick={() => paymentInfo && setStep('2')}
          >
            <AccordionTrigger className="hover:no-underline disabled:text-muted-foreground">
              2 Review and pay
            </AccordionTrigger>
            <AccordionContent>
              {paymentInfo && <div>paymentInfo.cardNumber</div>}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}
