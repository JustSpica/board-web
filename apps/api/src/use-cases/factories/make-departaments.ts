import { PrismaDepartamentRepository } from '@app/repositories/prisma/departament-repository'

import { CreateDepartamentUseCase } from '../create-departament'
import { FindManyDepartamentsByCompanyId } from '../find-many-departaments-by-company-id'

export function makeDepartaments() {
  const departamentRepository = new PrismaDepartamentRepository()

  const createDepartamentUseCase = new CreateDepartamentUseCase(
    departamentRepository
  )
  const fetchAllDepartaments = new FindManyDepartamentsByCompanyId(departamentRepository)

  return { createDepartamentUseCase, fetchAllDepartaments }
}
