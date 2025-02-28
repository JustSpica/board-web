import { Departament, Prisma } from '@prisma/client'

export interface DepartamentRepository {
  create(
    departament: Prisma.DepartamentUncheckedCreateInput
  ): Promise<Departament>
  findManyByCompanyId(companyId: string): Promise<Departament[]>
}
