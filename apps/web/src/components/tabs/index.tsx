import React from 'react'
import * as TabsPritimive from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export const Root = TabsPritimive.Root

export const List = TabsPritimive.List

export type TabsTriggerProps = {
  isSelected?: boolean
} & React.ComponentPropsWithoutRef<typeof TabsPritimive.Trigger>

export const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPritimive.Trigger>,
  TabsTriggerProps
>(({ children, isSelected, ...props }, ref) => (
  <TabsPritimive.Trigger
    ref={ref}
    className={twMerge(
      'relative p-3 text-sm font-medium text-zinc-500 transition-colors',
      'data-[state=active]:text-zinc-800',
      'hover:text-black'
    )}
    {...props}
  >
    {children}

    {isSelected && (
      <motion.div
        layoutId="activeTab"
        className="absolute -bottom-px left-0 right-0 h-0.5 bg-black"
      />
    )}
  </TabsPritimive.Trigger>
))
Trigger.displayName = TabsPritimive.Trigger.displayName
