import { Employee, Prisma } from '@prisma/client'

export interface EmployeeRepository {
  create(employee: Prisma.EmployeeUncheckedCreateInput): Promise<Employee>
  findManyByCompanyId(companyId: string): Promise<Employee[]>
}
