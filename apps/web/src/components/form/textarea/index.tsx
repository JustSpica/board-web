import React from 'react'
import { twMerge as merge } from 'tailwind-merge'

export const Textarea = React.forwardRef<
  React.ElementRef<'textarea'>,
  React.ComponentPropsWithoutRef<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
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
Textarea.displayName = 'Textarea'
