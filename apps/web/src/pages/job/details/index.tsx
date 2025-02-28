import { SquarePen } from 'lucide-react'

import { Button } from '@app/components'

export function JobDetails() {
  return (
    <section>
      <div className="flex items-center justify-between border-b-2 border-zinc-200 py-6">
        <h2 className="text-xl font-semibold text-zinc-800">
          Descrição da vaga
        </h2>
        <Button variant="outline">
          <SquarePen size={18} />
          Editar
        </Button>
      </div>

      <div className="space-y-2">
        <strong className="block text-sm text-zinc-800">
          Responsabilidades:{' '}
        </strong>

        <p className="block text-sm text-zinc-500">
          - Desenvolver e manter aplicações web e mobile utilizando React e
          React Native com TypeScript.
        </p>
        <p className="block text-sm text-zinc-500">
          - Consumir APIs RESTful e GraphQL.
        </p>
        <p className="block text-sm text-zinc-500">
          - Trabalhar com CSS e seus pré-processadores (ex. SASS).
        </p>
        <p className="block text-sm text-zinc-500">
          - Gerenciar pacotes e dependências com NPM.
        </p>
        <p className="block text-sm text-zinc-500">
          - Implementar testes automatizados e unitários utilizando Jest e React
          Native Testing Library.
        </p>
      </div>
    </section>
  )
}
