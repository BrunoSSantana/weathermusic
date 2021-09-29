import { EntityRepository, Repository } from 'typeorm'

import { Playlist } from '../entities/Playlist'

@EntityRepository(Playlist)
class PlaylistsRepositories extends Repository<Playlist> {}

export { PlaylistsRepositories }
