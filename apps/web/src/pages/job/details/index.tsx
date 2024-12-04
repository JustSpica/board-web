import { SquarePen } from 'lucide-react'

import { Button } from '@app/components'

export function JobDetails() {
  return (
    <div className="flex items-center justify-between border-b-2 border-zinc-200 py-6">
      <h2 className="text-xl font-semibold text-zinc-800">Descrição da vaga</h2>
      <Button variant="outline">
        <SquarePen size={18} />
        Editar
      </Button>
    </div>
  )
}
