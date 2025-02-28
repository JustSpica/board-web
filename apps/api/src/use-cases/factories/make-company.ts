import { PrismaCompanyRepository } from '@app/repositories/prisma/company-repository'
import { AuthenticateCompanyUseCase } from '../authenticate-company'
import { CreateCompanyUseCase } from '../create-company'

export function makeCompany() {
  const companyRepository = new PrismaCompanyRepository()

  const createCompanyUseCase = new CreateCompanyUseCase(companyRepository)
  const authCompanyUseCase = new AuthenticateCompanyUseCase(companyRepository)

  return { createCompanyUseCase, authCompanyUseCase }
}
