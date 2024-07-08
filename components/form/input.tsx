import { cn } from '@/lib/utils'

type InputProps = {
  label: string
  wrapperClassName?: string
} & React.HTMLAttributes<HTMLInputElement>
export function Input({ label, id, wrapperClassName, ...rest }: InputProps) {
  return (
    <div className={cn('flex w-full flex-col gap-2', wrapperClassName)}>
      <label htmlFor={id} className="text-muted-foreground">
        {label}
      </label>
      <input
        className="w-full rounded-lg border border-input p-2 text-primary-foreground focus:border-accent"
        id={id}
        {...rest}
      />
    </div>
  )
}
