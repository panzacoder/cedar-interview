type ButtonProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement>
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded-xl bg-primary p-2 text-primary-foreground"
      {...rest}
    >
      {children}
    </button>
  )
}
