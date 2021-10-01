import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { MusicsRepositories } from '../../repositories/MusicsRepositories'
import { PlaylistsRepositories } from '../../repositories/PlaylistsRepositories'
import { UsersRepositories } from '../../repositories/UsersRepositories'

class CreatePlaylistController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const usersrepository = getCustomRepository(UsersRepositories)
      const playlistrepository = getCustomRepository(PlaylistsRepositories)
      const musicsrepository = getCustomRepository(MusicsRepositories)

      const { ritmo, temp, musics } = request.body
      const { user_id } = request

      const user = await usersrepository.findOne({ id: user_id })

      if (!user) {
        return response.json({ message: 'User does not exists' })
      }

      const date = new Date(Date.now())

      const dateFormat = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

      const playlist = playlistrepository.create({
        user_id,
        reference: `${ritmo}-${temp}-${dateFormat}-${Date.now()}`
      })
      const { id: playlist_id } = await playlistrepository.save(playlist)

      for (const music of musics) {
        const sound = musicsrepository.create({
          artist: music.artist,
          music_name: music.music_name,
          playlist_id,
          url_image: music.url_image,
          url_sound: music.url_sound
        })

        await musicsrepository.save(sound)
      }

      return response.json(playlist)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { CreatePlaylistController }
