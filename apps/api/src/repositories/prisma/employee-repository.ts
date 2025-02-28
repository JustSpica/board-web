import { Prisma } from '@prisma/client'

import { prisma } from '@app/lib/prisma-client'
import { EmployeeRepository } from '../@types/employee-repository'

export class PrismaEmployeeRepository implements EmployeeRepository {
  async create(employee: Prisma.EmployeeUncheckedCreateInput) {
    return await prisma.employee.create({
      data: employee
    })
  }

  async findManyByCompanyId(companyId: string) {
    return await prisma.employee.findMany({
      where: {
        company_id: companyId
      }
    })
  }
}
