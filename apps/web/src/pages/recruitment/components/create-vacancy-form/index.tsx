import { Button, Input, Select } from '@app/components'

import { MarkdownTextArea } from '../markdown-textarea'

export type CreateVacancyFormProps = {
  onClose(open: boolean): void
}

export function CreateVacancyForm({ onClose }: CreateVacancyFormProps) {
  return (
    <form className="space-y-2">
      <Input placeholder="Titulo da vaga" />

      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="Selecione o setor" />
        </Select.Trigger>

        <Select.Content>
          <Select.Item value="teste">teste</Select.Item>
          <Select.Item value="teste2">teste2</Select.Item>
        </Select.Content>
      </Select.Root>

      <MarkdownTextArea />

      <div className="flex w-full items-center justify-end gap-2">
        <Button variant="ghost" onClick={() => onClose(false)}>
          Cancelar
        </Button>
        <Button>Salvar</Button>
      </div>
    </form>
  )
}
