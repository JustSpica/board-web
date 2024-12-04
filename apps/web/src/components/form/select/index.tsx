import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

import { twMerge } from 'tailwind-merge'

export const Root = SelectPrimitive.Root

export const Content = React.forwardRef(() => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content />
  </SelectPrimitive.Portal>
))
export const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={twMerge('', className)}
    {...props}
  />
))
Trigger.displayName = SelectPrimitive.Trigger.displayName
