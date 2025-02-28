import type { DepartamentRepository } from '@app/repositories/@types/departament-repository'

export interface CreateDepartamentUseCaseRequest {
  color: string
  companyId: string
  name: string
}

export class CreateDepartamentUseCase {
  constructor(private departamentRepository: DepartamentRepository) {}

  async handle({ color, companyId, name }: CreateDepartamentUseCaseRequest) {
    const departament = await this.departamentRepository.create({
      color,
      company_id: companyId,
      name
    })

    return { departament }
  }
}
