import { ChevronLeft, SquarePen } from 'lucide-react'
import { useLocation } from 'wouter'

import { Button } from '@app/components'

export function Job() {
  const [, setLocation] = useLocation()

  function redirect() {
    setLocation('/recruitment')
  }

  return (
    <section className="flex h-full w-full flex-col">
      <header className="space-y-2 border-b-2 border-zinc-200 px-8 py-6">
        <Button variant="link" onClick={redirect}>
          <ChevronLeft size={18} />
          Voltar
        </Button>
        <h2 className="text-xl font-semibold text-zinc-800">
          Software Engineer
        </h2>
      </header>

      <section className="w-full flex-1 bg-white px-8">
        <div className="flex items-center justify-between border-b-2 border-zinc-200 py-6">
          <h2 className="text-xl font-semibold text-zinc-800">
            Descrição da vaga
          </h2>
          <Button variant="ghost">
            <SquarePen size={18} />
            Editar
          </Button>
        </div>
      </section>
    </section>
  )
}
