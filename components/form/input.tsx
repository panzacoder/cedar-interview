import { cn } from '@/lib/utils'
import { CheckIcon, AlertCircle } from 'lucide-react'
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
      <div className="relative flex w-full">
        <input
          className={cn(
            'w-full rounded-lg border border-input p-2 text-foreground focus:border-accent',
            fieldState.error && 'border-destructive-foreground'
          )}
          id={name}
          {...field}
          {...rest}
        />
        {fieldState.isDirty && !fieldState.invalid && (
          <CheckIcon className="absolute right-2 top-2 text-green-700" />
        )}
        {fieldState.error && (
          <AlertCircle className="absolute right-2 top-2 text-destructive-foreground" />
        )}
      </div>
      <p className="text-destructive-foreground">{fieldState.error?.message}</p>
    </div>
  )
}

Input.displayName = 'Input'

export { Input }
