import { EntityRepository, Repository } from 'typeorm'

import { Music } from '../entities/Music'

@EntityRepository(Music)
class MusicsRepositories extends Repository<Music> {}

export { MusicsRepositories }
