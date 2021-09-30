import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { PlaylistsRepositories } from '../repositories/PlaylistsRepositories'

class DeletePlaylistController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const playlistsrepository = getCustomRepository(PlaylistsRepositories)
      const { playlist_id } = request.body

      const playlist = await playlistsrepository.delete(playlist_id)

      return response.json(playlist)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { DeletePlaylistController }
