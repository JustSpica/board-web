import { Prisma } from '@prisma/client'
import type { DepartamentRepository } from '../@types/departament-repository'
import { prisma } from '@app/lib/prisma-client'

export class PrismaDepartamentRepository implements DepartamentRepository {
  async create(data: Prisma.DepartamentUncheckedCreateInput) {
    return await prisma.departament.create({ data })
  }

  async findManyByCompanyId(companyId: string) {
    return await prisma.departament.findMany({
      where: {
        company_id: companyId
      }
    })
  }
}
