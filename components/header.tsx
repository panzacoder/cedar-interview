import Image from 'next/image'
export function Header() {
  return (
    <header className="flex h-[81px] border-b border-b-border px-2">
      <Image
        src="/abc.svg"
        alt="ABC Company Logo"
        width={152}
        height={38}
        priority
      />
    </header>
  )
}
