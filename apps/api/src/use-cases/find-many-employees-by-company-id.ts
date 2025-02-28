import type { EmployeeRepository } from '@app/repositories/@types/employee-repository'

export interface FindManyEmployeesByCompanyIdRequest {
  companyId: string
}

export class FindManyEmployeesByCompanyId {
  constructor(private employeeRepository: EmployeeRepository) {}

  async handle({ companyId }: FindManyEmployeesByCompanyIdRequest) {
    const employees =
      await this.employeeRepository.findManyByCompanyId(companyId)

    return { employees }
  }
}
