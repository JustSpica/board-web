import { FastifyReply, FastifyRequest } from 'fastify'
import zod from 'zod'

import { makeEmployee } from '@app/use-cases/factories/make-employee'

export class EmployeeController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const schema = zod.object({
      name: zod.string(),
      email: zod.string(),
      companyId: zod.string(),
      departamentId: zod.string()
    })

    const { companyId, departamentId, email, name } = schema.parse(request.body)

    try {
      const { createEmployeeUseCase } = makeEmployee()

      const employee = await createEmployeeUseCase.handle({
        companyId,
        departamentId,
        email,
        name
      })

      return reply.status(201).send(employee)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async findManyByCompanyId(request: FastifyRequest, reply: FastifyReply) {
    const schema = zod.object({
      companyId: zod.string()
    })

    const { companyId } = schema.parse(request.query)

    try {
      const { findManyEmployeesByCompanyId } = makeEmployee()

      const employees = await findManyEmployeesByCompanyId.handle({
        companyId
      })

      return reply.status(200).send(employees)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
