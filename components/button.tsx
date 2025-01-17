type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="w-full rounded-xl bg-primary p-2 text-primary-foreground"
      {...rest}
    >
      {children}
    </button>
  )
}
