import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { MusicsRepositories } from '../repositories/MusicsRepositories'

class FindPlaylistByPlaylistIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const musicsrepository = getCustomRepository(MusicsRepositories)
      const { playlist_id } = request.body

      const musics = await musicsrepository.find({ where: { playlist_id } })

      return response.json(musics)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindPlaylistByPlaylistIdController }
