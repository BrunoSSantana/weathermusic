import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('musics')
export class Music {
  @PrimaryColumn()
  id: string

  @Column()
  playlist_id: string

  @Column()
  artist: string

  @Column()
  music_name: string

  @Column()
  url_sound: string

  @Column()
  url_image: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
