import { Plus } from 'lucide-react'

import { Button, Table } from '@app/components'

export function JobCandidates() {
  return (
    <div>
      <header className="flex items-center justify-between border-zinc-200 pt-6">
        <h2 className="text-xl font-semibold text-zinc-800">Candidatos</h2>
        <Button>
          <Plus size={18} />
          Adicionar candidato
        </Button>
      </header>

      <div className="relative w-full overflow-hidden">
        <Table.Root>
          <Table.Header>
            <Table.Head>Nome</Table.Head>
            <Table.Head>E-mail</Table.Head>
            <Table.Head>Linkedin</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Ações</Table.Head>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>teste</Table.Cell>
              <Table.Cell>teste2</Table.Cell>
              <Table.Cell>teste3</Table.Cell>
              <Table.Cell>teste4</Table.Cell>
              <Table.Cell>Ações</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  )
}
