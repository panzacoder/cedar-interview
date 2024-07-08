import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import { FieldValue, FieldValues, useController } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  label: string
  name: FieldValue<T>
  wrapperClassName?: string
} & React.HTMLAttributes<HTMLInputElement>
const Input = <T extends FieldValues>({
  label,
  wrapperClassName,
  name,
  ...rest
}: InputProps<T>) => {
  const { field, fieldState } = useController({ name })
  return (
    <div className={cn('flex w-full flex-col gap-2', wrapperClassName)}>
      <label htmlFor={name} className="text-muted-foreground">
        {label}
      </label>
      <input
        className="w-full rounded-lg border border-input p-2 text-foreground focus:border-accent"
        id={name}
        {...field}
        {...rest}
      />
      <p className="text-destructive-foreground">{fieldState.error?.message}</p>
    </div>
  )
}

Input.displayName = 'Input'

export { Input }
