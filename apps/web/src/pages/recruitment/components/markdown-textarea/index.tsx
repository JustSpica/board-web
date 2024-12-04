import React, { useRef, useState } from 'react'
import { Bold, Heading, Italic } from 'lucide-react'

import { Textarea } from '@app/components/form'

export function MarkdownTextArea() {
  const [value, setValue] = useState('')
  const textareaRef = useRef<React.ElementRef<'textarea'>>(null)

  function handleAddCustomMarkdown(type: string) {
    const current = textareaRef.current

    if (current) {
      const start = current.selectionStart
      const end = current.selectionEnd

      const selectedValue = value.substring(start, end)

      if (start !== end) {
        if (type === 'heading') {
          return setValue((prevState) => {
            return `${prevState.substring(0, start)}###${selectedValue}${prevState.substring(end)}`
          })
        }

        if (type === 'bold') {
          return setValue((prevState) => {
            return `${prevState.substring(0, start)}**${selectedValue}**${prevState.substring(end)}`
          })
        }

        if (type === 'italic') {
          return setValue((prevState) => {
            return `${prevState.substring(0, start)}_${selectedValue}_${prevState.substring(end)}`
          })
        }
      }
    }
  }

  return (
    <div className="flex w-full flex-col space-y-1 rounded-md border border-zinc-200 p-2">
      <div className="flex gap-1">
        <button
          type="button"
          className="rounded-md p-1 text-zinc-800 transition-colors hover:bg-zinc-100"
          onClick={() => handleAddCustomMarkdown('heading')}
        >
          <Heading size={18} />
        </button>
        <button
          type="button"
          className="rounded-md p-1 text-zinc-800 transition-colors hover:bg-zinc-100"
          onClick={() => handleAddCustomMarkdown('bold')}
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          className="rounded-md p-1 text-zinc-800 transition-colors hover:bg-zinc-100"
          onClick={() => handleAddCustomMarkdown('italic')}
        >
          <Italic size={18} />
        </button>
      </div>

      <Textarea
        ref={textareaRef}
        className="min-h-[250px]"
        placeholder="Adicione a descrição da vaga"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}
