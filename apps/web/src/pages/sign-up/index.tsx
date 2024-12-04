import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'wouter'

import { Button, Input } from '@app/components'

type CompanyAccountData = {
  companyName: string
  password: string
}

export function SignUp() {
  const [, setLocation] = useLocation()
  const { handleSubmit, register } = useForm<CompanyAccountData>()

  async function createCompanyAccount() {
    setLocation('/app/recruitment')
  }

  return (
    <section className="flex h-screen w-full items-center bg-zinc-100">
      <div className="mx-auto max-w-[450px] space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-zinc-800">Crie a sua conta</h1>
          <span className="text-sm text-zinc-500">
            Já possui uma conta?{' '}
            <Link className="text-blue-500 hover:underline" href="/sign-in">
              Entre aqui
            </Link>
          </span>
        </header>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(createCompanyAccount)}
        >
          <div>
            <label
              className="text-sm font-medium text-zinc-800"
              htmlFor="companyName"
            >
              Nome da empresa
            </label>
            <Input {...register('companyName')} />
          </div>
          <div>
            <label
              className="text-sm font-medium text-zinc-800"
              htmlFor="password"
            >
              Senha
            </label>
            <Input {...register('password')} />
          </div>
          <Button type="submit" className="w-full justify-center">
            Cadastrar-se
          </Button>
        </form>
      </div>
    </section>
  )
}
