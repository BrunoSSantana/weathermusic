import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { MusicsRepositories } from '../repositories/MusicsRepositories'
import { PlaylistsRepositories } from '../repositories/PlaylistsRepositories'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface ICreatePLaylistRequest {
  artist: string
  music_name: string
  url_sound: string
  url_image: string
}

class CreatePlaylistController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const usersrepository = getCustomRepository(UsersRepositories)
      const playlistrepository = getCustomRepository(PlaylistsRepositories)
      const musicsrepository = getCustomRepository(MusicsRepositories)

      const data = request.body
      const musics: ICreatePLaylistRequest[] = data.musics
      const { user_id } = request

      const user = await usersrepository.findOne({ id: user_id })

      if (!user) {
        return response.json({ message: 'User does not exists' })
      }

      const playlist = playlistrepository.create({
        user_id
      })
      const { id: playlist_id } = await playlistrepository.save(playlist)

      console.log('musics', musics)
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

      return response.json()
    } catch (error) {
      return response.json(error)
    }
  }
}

export { CreatePlaylistController }
