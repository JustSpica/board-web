import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Controller, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { Button, Input } from '@app/components'
import { api } from '@app/lib/axios'
import { client } from '@app/lib/query-client'

type DepartamentData = {
  name: string
  color: string
}

export type FormDepartamentProps = {
  onOpenChange(open: boolean): void
}

export function FormDepartament({ onOpenChange }: FormDepartamentProps) {
  const { control, handleSubmit, register } = useForm<DepartamentData>()

  async function createDepartament(formData: DepartamentData) {
    console.log(formData)

    const companyId = localStorage.getItem('company_id')

    await api.post('/departament', {
      color: formData.color,
      companyId,
      name: formData.name
    })

    client.invalidateQueries({ queryKey: ['query-departaments'] })

    onOpenChange(false)
  }

  return (
    <form onSubmit={handleSubmit(createDepartament)}>
      <Input placeholder="Nome do setor" {...register('name')} />

      <Controller
        control={control}
        name="color"
        render={({ field }) => (
          <RadioGroupPrimitive.Root
            className="mt-4 flex gap-2"
            onValueChange={field.onChange}
          >
            <RadioGroupPrimitive.Item asChild value="red">
              <button
                className={twMerge(
                  'h-5 w-5 rounded-full bg-red-500 ring-red-500 transition-shadow',
                  'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
                )}
              />
            </RadioGroupPrimitive.Item>
            <RadioGroupPrimitive.Item asChild value="orange">
              <button
                className={twMerge(
                  'h-5 w-5 rounded-full bg-orange-500 ring-orange-500 transition-shadow',
                  'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
                )}
              />
            </RadioGroupPrimitive.Item>
            <RadioGroupPrimitive.Item asChild value="yellow">
              <button
                className={twMerge(
                  'h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 transition-shadow',
                  'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
                )}
              />
            </RadioGroupPrimitive.Item>
            <RadioGroupPrimitive.Item asChild value="green">
              <button
                className={twMerge(
                  'h-5 w-5 rounded-full bg-green-500 ring-green-500 transition-shadow',
                  'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
                )}
              />
            </RadioGroupPrimitive.Item>
            <RadioGroupPrimitive.Item asChild value="blue">
              <button
                className={twMerge(
                  'h-5 w-5 rounded-full bg-blue-500 ring-blue-500 transition-shadow',
                  'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
                )}
              />
            </RadioGroupPrimitive.Item>
            <RadioGroupPrimitive.Item asChild value="purple">
              <button
                className={twMerge(
                  'h-5 w-5 rounded-full bg-purple-500 ring-purple-500 transition-shadow',
                  'data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2'
                )}
              />
            </RadioGroupPrimitive.Item>
          </RadioGroupPrimitive.Root>
        )}
      />

      <div className="mt-6 flex w-full items-center justify-end gap-2">
        <Button size="sm" variant="outline" onClick={() => onOpenChange(false)}>
          Cancelar
        </Button>
        <Button type="submit" size="sm">
          Salvar
        </Button>
      </div>
    </form>
  )
}
