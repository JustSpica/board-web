import { useForm } from 'react-hook-form'
import { Link } from 'wouter'

import { Button, Input } from '@app/components'

export function SignIn() {
  const { register } = useForm()

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

        <form className="space-y-4">
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
            Entrar
          </Button>
        </form>
      </div>
    </section>
  )
}
