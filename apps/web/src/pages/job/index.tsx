import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { useLocation } from 'wouter'

import { Button, Tabs } from '@app/components'

import { JobCandidates } from './candidates'
import { JobDetails } from './details'

export function Job() {
  const [currentTab, setCurrentTab] = useState('details')

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

      <section className="w-full flex-1 bg-white">
        <div className="border-b-2 border-zinc-200">
          <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <Tabs.List className="flex px-8">
              <Tabs.Trigger
                value="details"
                isSelected={currentTab === 'details'}
              >
                Descrição da vaga
              </Tabs.Trigger>
              <Tabs.Trigger
                value="candidates"
                isSelected={currentTab === 'candidates'}
              >
                Candidatos
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>

        <div className="px-8">
          {currentTab === 'details' && <JobDetails />}
          {currentTab === 'candidates' && <JobCandidates />}
        </div>
      </section>
    </section>
  )
}
