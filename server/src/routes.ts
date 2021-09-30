import { Router } from 'express'

import { AuthUserController } from './controllers/AuthUserController'
import { CreatePlaylistController } from './controllers/CreatePlaylistController'
import { CreateUserController } from './controllers/CreateUserController'
import { FindPlaylistByUserIdController } from './controllers/FindPlaylistsByUserIdController'
import { ensureAuthenticatedUser } from './middlewares/ensureAuthenticatedUser'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const createPlaylistController = new CreatePlaylistController()
const findPlaylistByUserIdController = new FindPlaylistByUserIdController()

const routes = Router()

routes
  .post('/new', createUserController.handle)
  .get('/auth', authUserController.handle)
  .post(
    '/playlist/save',
    ensureAuthenticatedUser,
    createPlaylistController.handle
  )
  .get(
    '/playlists',
    ensureAuthenticatedUser,
    findPlaylistByUserIdController.handle
  )

export { routes }
