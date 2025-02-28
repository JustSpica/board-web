import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'wouter'

import { Button, Input } from '@app/components'
import { api } from '@app/lib/axios'

type CompanyAccountData = {
  name: string
  password: string
}

export function SignIn() {
  const [, setLocation] = useLocation()
  const { handleSubmit, register } = useForm<CompanyAccountData>()

  async function signInCompanyAccount(formData: CompanyAccountData) {
    const { data } = await api.post('/auth', {
      name: formData.name,
      password: formData.password
    })

    localStorage.setItem('company_id', data.company.id)

    setLocation('/app/recruitment')
  }

  return (
    <section className="flex h-screen w-full items-center bg-zinc-100">
      <div className="mx-auto max-w-[450px] space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-zinc-800">
            Entre com a sua conta
          </h1>
          <span className="text-sm text-zinc-500">
            Não possui uma conta ainda?{' '}
            <Link className="text-blue-500 hover:underline" href="/sign-in">
              Cadastre-se aqui
            </Link>
          </span>
        </header>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(signInCompanyAccount)}
        >
          <div>
            <label
              className="text-sm font-medium text-zinc-800"
              htmlFor="companyName"
            >
              Nome da empresa
            </label>
            <Input {...register('name')} />
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
            Entrar
          </Button>
        </form>
      </div>
    </section>
  )
}
