import { Plus, Users } from 'lucide-react'

import { Button } from '@app/components'

export function Employees() {
  return (
    <section className="h-full w-full space-y-6 px-8 py-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-md bg-white p-2 shadow-md">
            <Users size={32} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-800">
              Funcionários
            </h2>
            <span className="text-sm text-zinc-500">
              Gerencie seus funcionários.
            </span>
          </div>
        </div>

        <Button>
          <Plus size={18} />
          Adicionar funcionário
        </Button>
      </header>
    </section>
  )
}
