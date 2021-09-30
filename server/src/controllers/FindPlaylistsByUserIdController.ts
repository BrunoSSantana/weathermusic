import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { PlaylistsRepositories } from '../repositories/PlaylistsRepositories'

class FindPlaylistByUserIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const playlistsrepository = getCustomRepository(PlaylistsRepositories)
      const { playlist_id } = request.body

      const musics = await playlistsrepository.find()

      return response.json(musics)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindPlaylistByUserIdController }
