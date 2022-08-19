import Link from 'next/link'

export function Button({ href, className, ...props }) {
  className =
    'inline-flex justify-center rounded-2xl bg-rose-600 p-4 text-base font-semibold text-white hover:bg-rose-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 active:text-white/70'

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
