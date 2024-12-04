import { ChevronRight } from 'lucide-react'
import { useLocation } from 'wouter'

export type JobCardProps = {
  id: string
}

export function JobCard({ id }: JobCardProps) {
  const [, setLocation] = useLocation()

  function redirect() {
    setLocation(`/recruitment/${id}`)
  }

  return (
    <section className="max-w-[500px] rounded-xl border-2 border-zinc-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-zinc-800">UI/UX Designer</h2>
        <button
          className="rounded-md p-1 transition-colors hover:bg-zinc-100"
          onClick={redirect}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-zinc-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        doloremque voluptates ad sit voluptate amet necessitatibus perferendis
        iure vel ex temporibus, voluptatum quidem dignissimos consequuntur
        explicabo! Voluptate vero non tempore!
      </p>

      <div className="mt-6 flex items-center gap-2">
        <span className="flex items-center gap-1 rounded-md bg-green-200 p-2 text-sm font-medium text-green-800">
          <span className="block h-2 w-2 rounded-full bg-green-500" />
          Designer
        </span>

        <span className="flex items-center gap-1 rounded-md border border-zinc-200 p-2 text-sm font-medium text-zinc-500">
          Tempo integral
        </span>

        <span className="flex items-center gap-1 rounded-md border border-zinc-200 p-2 text-sm font-medium text-zinc-500">
          Remoto
        </span>
      </div>
    </section>
  )
}
