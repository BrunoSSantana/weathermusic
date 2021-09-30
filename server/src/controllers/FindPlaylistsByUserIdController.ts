import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { MusicsRepositories } from '../repositories/MusicsRepositories'
import { PlaylistsRepositories } from '../repositories/PlaylistsRepositories'

class FindPlaylistByUserIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const playlistsrepository = getCustomRepository(PlaylistsRepositories)
      const musicsrepository = getCustomRepository(MusicsRepositories)
      const { user_id } = request

      const playlists_id = await playlistsrepository.find({
        select: ['id'],
        where: { user_id }
      })

      const musics = await Promise.all(
        playlists_id.map(async playlist => {
          const music = await musicsrepository.find({
            where: { playlist_id: playlist.id },
            relations: ['playlist']
          })
          return music
        })
      )

      return response.json({ musics, playlists_id })
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindPlaylistByUserIdController }
