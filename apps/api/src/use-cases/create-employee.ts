import { EmployeeRepository } from '@app/repositories/@types/employee-repository'

interface CreateEmployeeUseCaseRequest {
  name: string
  email: string
  companyId: string
  departamentId: string
}

export class CreateEmployeeUseCase {
  constructor(private employeeRepository: EmployeeRepository) {}

  async handle({
    companyId,
    departamentId,
    email,
    name
  }: CreateEmployeeUseCaseRequest) {
    const employee = await this.employeeRepository.create({
      company_id: companyId,
      departament_id: departamentId,
      email,
      name
    })

    return { employee }
  }
}
