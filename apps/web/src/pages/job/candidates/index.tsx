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

      <Table.Root>
        <Table.Header>
          <Table.Head>Nome</Table.Head>
          <Table.Head>E-mail</Table.Head>
          <Table.Head>Linkedin</Table.Head>
          <Table.Head>Status</Table.Head>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Guilherme</Table.Cell>
            <Table.Cell>Teste123@teste.com</Table.Cell>
            <Table.Cell>Guilherme Spica Luiz</Table.Cell>
            <Table.Cell>
              <span className="rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-500">
                Em andamento
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  )
}
