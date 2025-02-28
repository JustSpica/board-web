import { PrismaEmployeeRepository } from '@app/repositories/prisma/employee-repository'

import { CreateEmployeeUseCase } from '../create-employee'
import { FindManyEmployeesByCompanyId } from '../find-many-employees-by-company-id'

export function makeEmployee() {
  const employeeRepository = new PrismaEmployeeRepository()

  const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository)
  const findManyEmployeesByCompanyId = new FindManyEmployeesByCompanyId(
    employeeRepository
  )

  return { createEmployeeUseCase, findManyEmployeesByCompanyId }
}
