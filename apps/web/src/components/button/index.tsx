import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { twMerge as merge } from 'tailwind-merge'

const button = tv({
  base: 'flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors',
  variants: {
    size: {
      sm: 'p-2 text-xs'
    },
    variant: {
      link: 'p-0 hover:underline',
      ghost: 'border border-zinc-200 hover:bg-black hover:text-white',
      primary: 'bg-black text-white hover:bg-zinc-900'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export const Button = React.forwardRef<React.ElementRef<'button'>, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={merge(button(props), className)} {...props} />
  )
)
Button.displayName = 'Button'
