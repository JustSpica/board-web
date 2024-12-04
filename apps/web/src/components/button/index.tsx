import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const button = tv({
  base: 'flex items-center gap-2 rounded-md transition-colors',
  variants: {
    size: {
      sm: 'p-2 text-xs',
      md: 'px-4 py-2 text-sm',
      icon: 'p-1'
    },
    variant: {
      ghost: 'hover:bg-zinc-100',
      link: 'p-0 hover:underline',
      outline: 'border border-zinc-200 hover:bg-black hover:text-white',
      primary: 'border border-black bg-black text-white hover:bg-zinc-900'
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary'
  }
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export const Button = React.forwardRef<React.ElementRef<'button'>, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={twMerge(button(props), className)}
      {...props}
    />
  )
)
Button.displayName = 'Button'
