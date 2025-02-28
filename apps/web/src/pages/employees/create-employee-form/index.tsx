/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'

import { Button, Input, Select } from '@app/components'

import { api } from '@app/lib/axios'
import { client } from '@app/lib/query-client'

export type CreateVacancyFormProps = {
  onClose(open: boolean): void
}

export function CreateEmployeeForm({ onClose }: CreateVacancyFormProps) {
  const { control, handleSubmit, register } = useForm()

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

  async function createEmployee(formData: any) {
    const companyId = localStorage.getItem('company_id')

    console.log(formData)

    await api.post('/employee', {
      name: formData.name,
      email: formData.email,
      companyId,
      departamentId: formData.departamentId
    })

    client.invalidateQueries({ queryKey: ['query-employees'] })

    onClose(false)
  }

  return (
    <form className="mt-2 space-y-2" onSubmit={handleSubmit(createEmployee)}>
      <Input placeholder="Nome" {...register('name')} />
      <Input placeholder="E-mail" {...register('email')} />

      <Controller
        control={control}
        name="departamentId"
        render={({ field }) => (
          <Select.Root onValueChange={field.onChange}>
            <Select.Trigger>
              <Select.Value placeholder="Selecione o setor" />
            </Select.Trigger>

            <Select.Content>
              {departamentsData?.departaments?.map((departament: any) => (
                <Select.Item key={departament.id} value={departament.id}>
                  {departament.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        )}
      />

      <div className="flex w-full items-center justify-end gap-2">
        <Button variant="ghost" onClick={() => onClose(false)}>
          Cancelar
        </Button>
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  )
}
