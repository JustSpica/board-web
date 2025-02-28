import { Prisma } from '@prisma/client'

import { prisma } from '@app/lib/prisma-client'
import { CompanyRepository } from '../@types/company-repository'

export class PrismaCompanyRepository implements CompanyRepository {
  async create(company: Prisma.CompanyCreateWithoutDepartamentsInput) {
    return await prisma.company.create({
      data: company
    })
  }

  async findByName(name: string) {
    return await prisma.company.findFirst({
      where: {
        name
      }
    })
  }
}
