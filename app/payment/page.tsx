import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/accordion'
import { PaymentForm } from './payment-form'

export default function PaymentPage() {
  return (
    <main className="flex h-full w-full justify-center">
      <div className="h-fit w-full max-w-md bg-card px-8 py-4 sm:rounded-xl">
        <Accordion type="single" collapsible defaultValue="1">
          <AccordionItem value="1">
            <AccordionTrigger>1 Payment information</AccordionTrigger>
            <AccordionContent>
              <PaymentForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="sm:border-none">
            <AccordionTrigger className="">2 Review and pay</AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}
