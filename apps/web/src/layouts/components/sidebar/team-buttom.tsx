import React from 'react'
import { Command, ChevronsUpDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export const TeamButton = React.forwardRef<
  React.ElementRef<'button'>,
  React.ComponentPropsWithoutRef<'button'>
>((props, ref) => {
  return (
    <button
      ref={ref}
      className={twMerge(
        'relative flex w-full items-center gap-2 rounded-md p-2 transition-colors',
        'hover:bg-zinc-100 data-[state=open]:bg-zinc-100'
      )}
      {...props}
    >
      <div className="rounded-md bg-black p-2 text-white">
        <Command size={24} />
      </div>

      <div className="flex flex-col items-start justify-between">
        <span className="block text-sm font-medium text-zinc-800">
          Rocks Company
        </span>
        <span className="block text-xs font-medium text-zinc-500">
          Equipe - 20 membros
        </span>
      </div>

      <ChevronsUpDown className="absolute right-2 text-zinc-500" size={18} />
    </button>
  )
})
TeamButton.displayName = 'TeamButton'
