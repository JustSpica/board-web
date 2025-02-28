/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Plus, Users } from 'lucide-react'

import { Button, Dialog, Table } from '@app/components'

import { api } from '@app/lib/axios'

import { CreateEmployeeForm } from './create-employee-form'

export function Employees() {
  const [newEmployeeDialog, setNewEmployeeDialog] = useState(false)

  const companyId = localStorage.getItem('company_id')

  const { data: departamentsData } = useQuery({
    queryKey: ['query-departaments'],
    queryFn: async () => {
      const { data } = await api.get('/company/departaments', {
        params: {
          companyId
        }
      })

      return data
    }
  })

  const { data: employeesData } = useQuery({
    queryKey: ['query-employees'],
    queryFn: async () => {
      const { data } = await api.get('/company/employees', {
        params: {
          companyId
        }
      })

      return data
    }
  })

  return (
    <section className="flex h-full w-full flex-col">
      <header className="flex items-center justify-between border-b-2 border-zinc-200 px-8 py-6">
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

        <Dialog.Root
          open={newEmployeeDialog}
          onOpenChange={setNewEmployeeDialog}
        >
          <Dialog.Trigger asChild>
            <Button>
              <Plus size={18} />
              Adicionar funcionário
            </Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Novo funcionário</Dialog.Title>
            <CreateEmployeeForm onClose={setNewEmployeeDialog} />
          </Dialog.Content>
        </Dialog.Root>
      </header>

      <section className="w-full flex-1 bg-white">
        <Table.Root>
          <Table.Header>
            <Table.Head>Nome do funcionário</Table.Head>
            <Table.Head>E-mail</Table.Head>
            <Table.Head>Setor</Table.Head>
          </Table.Header>
          <Table.Body>
            {employeesData?.employees?.map((employee: any) => {
              const departament = departamentsData?.departaments?.find(
                (item: any) => item.id === employee.departament_id
              )

              return (
                <Table.Row key={employee.id}>
                  <Table.Cell>{employee.name}</Table.Cell>
                  <Table.Cell>{employee.email}</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      <div
                        className={`h-3 w-3 rounded-sm bg-${departament.color}-500`}
                      />
                      <span className="text-sm text-zinc-800">
                        {departament.name}
                      </span>
                    </div>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      </section>
    </section>
  )
}
