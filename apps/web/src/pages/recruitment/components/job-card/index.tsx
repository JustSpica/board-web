import { ChevronRight } from 'lucide-react'
import { useLocation } from 'wouter'

import { Button } from '@app/components'

export type JobCardProps = {
  id: string
}

export function JobCard({ id }: JobCardProps) {
  const [, setLocation] = useLocation()

  function redirect() {
    setLocation(`/recruitment/job/${id}`)
  }

  return (
    <section className="max-w-[500px] rounded-xl border-2 border-zinc-200 bg-white p-4">
      <div className="flex items-center justify-between text-zinc-500">
        <h2 className="text-xl font-semibold text-zinc-800">
          Software Engineer Jr
        </h2>
        <Button size="icon" variant="ghost" onClick={redirect}>
          <ChevronRight size={18} />
        </Button>
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-zinc-500">
        Uma descrição simples da vaga cadastrada para apresentação.
      </p>

      <div className="mt-6 flex items-center gap-2">
        <span className="flex items-center gap-1 rounded-md bg-purple-200 p-2 text-sm font-medium text-purple-800">
          <span className="block h-2 w-2 rounded-full bg-purple-500" />
          Developers
        </span>
      </div>
    </section>
  )
}
