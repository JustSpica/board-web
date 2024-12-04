import React from 'react'
import { twMerge as merge } from 'tailwind-merge'

export const Input = React.forwardRef<
  React.ElementRef<'input'>,
  React.ComponentPropsWithoutRef<'input'>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={merge(
        'w-full px-4 py-2 outline-none ring-zinc-200 transition-shadow',
        'rounded-md border border-zinc-200',
        'text-sm placeholder:text-zinc-500',
        'focus-visible:ring-2',
        className
      )}
      {...props}
    />
  )
})
Input.displayName = 'Input'
