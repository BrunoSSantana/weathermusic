import { Router } from 'express'

import { CreatePlaylistController } from './controllers/playlist/CreatePlaylistController'
import { DeletePlaylistController } from './controllers/playlist/DeletePlaylistController'
import { FindPlaylistByPlaylistIdController } from './controllers/playlist/FindPlaylistByPlaylistIdController'
import { FindPlaylistByUserIdController } from './controllers/playlist/FindPlaylistsByUserIdController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { CreateUserController } from './controllers/user/CreateUserController'
import { UpdateUserController } from './controllers/user/UpdateUserController'
import { ensureAuthenticatedUser } from './middlewares/ensureAuthenticatedUser'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const updateUserController = new UpdateUserController()
const createPlaylistController = new CreatePlaylistController()
const findPlaylistByUserIdController = new FindPlaylistByUserIdController()
const findPlaylistByPlaylistIdController =
  new FindPlaylistByPlaylistIdController()
const deletePlaylistController = new DeletePlaylistController()

const routes = Router()

routes
  .post('/new', createUserController.handle)
  .get('/auth', authUserController.handle)
  .put('/update', ensureAuthenticatedUser, updateUserController.handle)

routes
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
  .get(
    '/playlists/:id',
    ensureAuthenticatedUser,
    findPlaylistByPlaylistIdController.handle
  )
  .delete(
    '/playlists',
    ensureAuthenticatedUser,
    deletePlaylistController.handle
  )

export { routes }
