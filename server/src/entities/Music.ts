import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { Playlist } from './Playlist'

@Entity('musics')
export class Music {
  @PrimaryColumn()
  id: string

  @Column()
  playlist_id: string

  @JoinColumn({ name: 'playlist_id' })
  @ManyToOne(() => Playlist)
  playlist: Playlist

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
