import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { Button, Input } from '@app/components'
import { api } from '@app/lib/axios'

export type FormDepartamentProps = {
  onOpenChange(open: boolean): void
}

export function FormDepartament({ onOpenChange }: FormDepartamentProps) {
  const { handleSubmit, register } = useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function createDepartament(data: any) {
    const { company } = JSON.parse(localStorage.getItem('company') || '{}')

    await api.post('/departament', {
      ...data,
      companyId: company.id
    })
  }

  return (
    <form onSubmit={handleSubmit(createDepartament)}>
      <Input placeholder="Nome do setor" {...register('name')} />

      <RadioGroupPrimitive.Root className="mt-4 flex gap-2">
        <RadioGroupPrimitive.Item asChild value="red" {...register('color')}>
          <button
            className={twMerge(
              'h-5 w-5 rounded-full bg-red-500 ring-red-500 transition-shadow',
              'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
            )}
          />
        </RadioGroupPrimitive.Item>
        <RadioGroupPrimitive.Item asChild value="orange" {...register('color')}>
          <button
            className={twMerge(
              'h-5 w-5 rounded-full bg-orange-500 ring-orange-500 transition-shadow',
              'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
            )}
          />
        </RadioGroupPrimitive.Item>
        <RadioGroupPrimitive.Item asChild value="yellow" {...register('color')}>
          <button
            className={twMerge(
              'h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 transition-shadow',
              'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
            )}
          />
        </RadioGroupPrimitive.Item>
        <RadioGroupPrimitive.Item asChild value="green" {...register('color')}>
          <button
            className={twMerge(
              'h-5 w-5 rounded-full bg-green-500 ring-green-500 transition-shadow',
              'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
            )}
          />
        </RadioGroupPrimitive.Item>
        <RadioGroupPrimitive.Item asChild value="blue" {...register('color')}>
          <button
            className={twMerge(
              'h-5 w-5 rounded-full bg-blue-500 ring-blue-500 transition-shadow',
              'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
            )}
          />
        </RadioGroupPrimitive.Item>
        <RadioGroupPrimitive.Item asChild value="purple" {...register('color')}>
          <button
            className={twMerge(
              'h-5 w-5 rounded-full bg-purple-500 ring-purple-500 transition-shadow',
              'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
            )}
          />
        </RadioGroupPrimitive.Item>
      </RadioGroupPrimitive.Root>

      <div className="mt-6 flex w-full items-center justify-end gap-2">
        <Button size="sm" variant="outline" onClick={() => onOpenChange(false)}>
          Cancelar
        </Button>
        <Button size="sm">Salvar</Button>
      </div>
    </form>
  )
}
