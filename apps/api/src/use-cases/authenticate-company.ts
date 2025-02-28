import { compare } from 'bcryptjs'

import type { CompanyRepository } from '@app/repositories/@types/company-repository'

import { InvalidCredentialsError } from './errors'

interface AuthenticateCompanyUseCaseRequest {
  name: string
  password: string
}

export class AuthenticateCompanyUseCase {
  constructor(private companyRepository: CompanyRepository) {}

  async handle({ name, password }: AuthenticateCompanyUseCaseRequest) {
    const company = await this.companyRepository.findByName(name)

    if (!company) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, company.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      company
    }
  }
}
