import { hash } from 'bcryptjs'

import type { CompanyRepository } from '@app/repositories/@types/company-repository'

interface CreateCompanyUseCaseRequest {
  name: string
  password: string
}

export class CreateCompanyUseCase {
  constructor(private companyRepository: CompanyRepository) {}

  async handle({ name, password }: CreateCompanyUseCaseRequest) {
    const passwordHash = await hash(password, 6)

    const company = await this.companyRepository.create({
      name,
      password_hash: passwordHash
    })
    delete company.password_hash

    return { company }
  }
}
