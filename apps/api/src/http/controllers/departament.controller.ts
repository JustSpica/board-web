import { FastifyReply, FastifyRequest } from 'fastify'
import zod from 'zod'

import { makeDepartaments } from '@app/use-cases/factories/make-departaments'

export class DepartamentController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const schema = zod.object({
      color: zod.string(),
      companyId: zod.string(),
      name: zod.string()
    })

    const { color, companyId, name } = schema.parse(request.body)

    try {
      const { createDepartamentUseCase } = makeDepartaments()

      const departament = await createDepartamentUseCase.handle({
        color,
        companyId,
        name
      })

      return reply.status(201).send(departament)
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
      const { fetchAllDepartaments } = makeDepartaments()

      const departaments = await fetchAllDepartaments.handle({ companyId })

      return reply.status(200).send(departaments)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
