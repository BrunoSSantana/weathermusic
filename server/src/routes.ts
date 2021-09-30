import { Router } from 'express'

import { AuthUserController } from './controllers/AuthUserController'
import { CreatePlaylistController } from './controllers/CreatePlaylistController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAuthenticatedUser } from './middlewares/ensureAuthenticatedUser'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const createPlaylistController = new CreatePlaylistController()

const routes = Router()

routes
  .post('/new', createUserController.handle)
  .get('/auth', authUserController.handle)
  .post(
    '/playlist/save',
    ensureAuthenticatedUser,
    createPlaylistController.handle
  )

export { routes }
