import { useState } from 'react'
import { FileUser, Plus } from 'lucide-react'

import { Button, Dialog } from '@app/components'

import { JobCard } from './components/job-card'
import { CreateVacancyForm } from './components/create-vacancy-form'

export function Recruitment() {
  const [newVacancyDialog, setNewVacancyDialog] = useState(false)

  return (
    <section className="h-full w-full space-y-6 px-8 py-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-md bg-white p-2 shadow-md">
            <FileUser size={32} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-800">Vagas</h2>
            <span className="text-sm text-zinc-500">
              Gerencie o processo de recrutamento.
            </span>
          </div>
        </div>

        <Dialog.Root open={newVacancyDialog} onOpenChange={setNewVacancyDialog}>
          <Dialog.Trigger asChild>
            <Button>
              <Plus size={18} />
              Criar nova vaga
            </Button>
          </Dialog.Trigger>
          <Dialog.Content className="space-y-2">
            <Dialog.Title>Nova vaga</Dialog.Title>
            <CreateVacancyForm onClose={setNewVacancyDialog} />
          </Dialog.Content>
        </Dialog.Root>
      </header>

      <div className="flex flex-wrap gap-4">
        <JobCard id="1" />
        <JobCard id="2" />
        <JobCard id="3" />
        <JobCard id="4" />
        <JobCard id="5" />
        <JobCard id="6" />
      </div>
    </section>
  )
}
