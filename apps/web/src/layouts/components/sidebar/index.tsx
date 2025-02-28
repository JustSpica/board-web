/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Command, Plus, UserPlus, Users } from 'lucide-react'

import { Button, DropdownMenu } from '@app/components'
import { api } from '@app/lib/axios'

import { FormDepartament } from './form-departament'
import { SidebarLink } from './sidebar-link'
import { TeamButton } from './team-buttom'

export function Sidebar() {
  const [isDepartamentDropdownOpen, setIsDepartamentDropdownOpen] =
    useState(false)

  const { data: departamentsData } = useQuery({
    queryKey: ['query-departaments'],
    queryFn: async () => {
      const companyId = localStorage.getItem('company_id')

      const { data } = await api.get('/company/departaments', {
        params: {
          companyId
        }
      })

      return data
    }
  })

  return (
    <div className="h-full w-80 border-r-2 border-zinc-200 px-4 py-4">
      <header className="flex items-center justify-between border-b-2 border-zinc-200 pb-4">
        <h3 className="text-xl font-medium">Board</h3>
      </header>

      <div className="space-y-4 border-b-2 border-zinc-200 py-4">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <TeamButton />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="space-y-2" side="right">
            <DropdownMenu.Label className="px-2">Equipes</DropdownMenu.Label>
            <div className="space-y-1">
              <DropdownMenu.Item className="flex items-center gap-2">
                <div className="rounded-md bg-black p-2 text-white">
                  <Command size={16} />
                </div>

                <span className="block text-sm font-medium text-zinc-800">
                  Rocks Company
                </span>
              </DropdownMenu.Item>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <span className="block px-2 text-xs font-medium uppercase text-zinc-500">
          Menu principal
        </span>

        <div className="space-y-1">
          <SidebarLink href="/employee">
            <Users size={18} />
            Funcionários
          </SidebarLink>

          <SidebarLink href="/recruitment">
            <UserPlus size={18} />
            Recrutamento
          </SidebarLink>
        </div>
      </div>

      <div className="space-y-4 py-4">
        <div className="flex items-center justify-between px-2 text-zinc-500">
          <span className="text-xs font-medium uppercase">Setores</span>
          <DropdownMenu.Root
            open={isDepartamentDropdownOpen}
            onOpenChange={setIsDepartamentDropdownOpen}
          >
            <DropdownMenu.Trigger asChild>
              <Button size="icon" variant="ghost">
                <Plus size={18} />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="space-y-2 px-4" side="right">
              <DropdownMenu.Label>Adicionar setor</DropdownMenu.Label>
              <FormDepartament onOpenChange={setIsDepartamentDropdownOpen} />
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        <div className="space-y-4 px-2">
          {departamentsData?.departaments?.map((departament: any) => (
            <div className="flex items-center gap-2" key={departament.id}>
              <div
                className={`h-3 w-3 rounded-sm bg-${departament.color}-500`}
              />
              <span className="text-sm text-zinc-800">{departament.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
