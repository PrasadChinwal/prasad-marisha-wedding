import Image from 'next/image'

export function Logo(props) {
  return (
      <Image
          src="/logo.svg"
          className={'rounded-full bg-rose-200/50 bg-center bg-contain'}
          alt="Logo"
          width={80}
          height={80}
      />
  )
}
