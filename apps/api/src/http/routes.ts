import { FastifyInstance } from 'fastify'

import { CompanyController } from './controllers/company.controller'
import { DepartamentController } from './controllers/departament.controller'
import { EmployeeController } from './controllers/employee.cotroller'

const companyController = new CompanyController()
const departamentController = new DepartamentController()
const employeeController = new EmployeeController()

export async function appRoutes(app: FastifyInstance) {
  app.post('/employee', employeeController.create)

  app.post('/departament', departamentController.create)

  app.post('/company', companyController.create)
  app.get('/company/departaments', departamentController.findManyByCompanyId)
  app.get('/company/employees', employeeController.findManyByCompanyId)

  app.post('/auth', companyController.authenticate)
}
