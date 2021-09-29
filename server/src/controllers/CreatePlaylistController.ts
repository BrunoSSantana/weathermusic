import { Request, Response } from 'express'

interface ICreatePLaylistRequest {
  artist: string
  music_name: string
  url_sound: string
  url_image: string
}

class CreatePlaylistController {
  async handle(request: Request, response: Response): Promise<Response> {
    const musics: ICreatePLaylistRequest[] = request.body
    const { user_id } = request

    // validar se usuário existe

    // criar playlist

    // criar músicas com o playlist_id com o id da playlist criada um
    // for each dentro do array de musics

    return response.json()
  }
}

export { CreatePlaylistController }
