import type { DepartamentRepository } from '@app/repositories/@types/departament-repository'

export interface FindManyDepartamentsByCompanyIdRequest {
  companyId: string
}

export class FindManyDepartamentsByCompanyId {
  constructor(private departamentRepository: DepartamentRepository) {}

  async handle({ companyId }: FindManyDepartamentsByCompanyIdRequest) {
    const departaments =
      await this.departamentRepository.findManyByCompanyId(companyId)

    return { departaments }
  }
}
