import { Router } from 'express'

import { AuthUserController } from './controllers/AuthUserController'
import { CreateUserController } from './controllers/CreateController'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()

const routes = Router()

routes
  .post('/new', createUserController.handle)
  .get('/auth', authUserController.handle)

export { routes }
