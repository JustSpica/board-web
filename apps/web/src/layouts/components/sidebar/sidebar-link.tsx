/* eslint-disable react/destructuring-assignment */
import { Link, useLocation } from 'wouter'
import { twMerge } from 'tailwind-merge'

type SidebarLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ComponentProps<typeof Link>

export function SidebarLink(props: SidebarLinkProps) {
  const [current] = useLocation()

  const match = current.includes(String(props.href))

  return (
    <Link
      className={twMerge(
        'flex items-center gap-2 rounded-md p-2 text-sm text-zinc-800 transition-colors',
        'hover:bg-zinc-100',
        match && 'bg-black text-white hover:bg-zinc-900'
      )}
      {...props}
    />
  )
}
