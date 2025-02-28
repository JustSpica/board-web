import { Company, Prisma } from '@prisma/client'

export interface CompanyRepository {
  create(
    company: Prisma.CompanyCreateWithoutDepartamentsInput
  ): Promise<Company>
  findByName(name: string): Promise<Company>
}
