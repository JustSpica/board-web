import { makeCompany } from '@app/use-cases/factories/make-company'
import { FastifyReply, FastifyRequest } from 'fastify'
import zod from 'zod'

export class CompanyController {
  async authenticate(request: FastifyRequest, reply: FastifyReply) {
    const companyData = zod.object({
      name: zod.string(),
      password: zod.string()
    })

    const { name, password } = companyData.parse(request.body)

    try {
      const { authCompanyUseCase } = makeCompany()

      const company = await authCompanyUseCase.handle({ name, password })

      return reply.status(200).send(company)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const companyData = zod.object({
      name: zod.string(),
      password: zod.string()
    })

    const { name, password } = companyData.parse(request.body)

    try {
      const { createCompanyUseCase } = makeCompany()

      const company = await createCompanyUseCase.handle({ name, password })

      return reply.status(201).send(company)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
