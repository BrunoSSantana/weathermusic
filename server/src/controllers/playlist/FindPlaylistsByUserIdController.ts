import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

// import { MusicsRepositories } from '../repositories/MusicsRepositories'
import { PlaylistsRepositories } from '../../repositories/PlaylistsRepositories'
import { UsersRepositories } from '../../repositories/UsersRepositories'

class FindPlaylistByUserIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const playlistsrepository = getCustomRepository(PlaylistsRepositories)
      const usersrepository = getCustomRepository(UsersRepositories)
      const { user_id } = request

      const playlists_id = await playlistsrepository.find({
        select: ['id', 'reference'],
        where: { user_id }
      })

      const user = await usersrepository.findOne(user_id)

      // const musics = await Promise.all(
      //   playlists_id.map(async playlist => {
      //     const music = await musicsrepository.find({
      //       where: { playlist_id: playlist.id },
      //       relations: ['playlist']
      //     })
      //     return music
      //   })
      // )

      return response.json({
        playlists_id,
        user: {
          name: user.name,
          id: user.id,
          email: user.email
        }
      })
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindPlaylistByUserIdController }
