import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateMusics1632917899868 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'musics',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'playlist_id',
            type: 'uuid'
          },
          {
            name: 'artist',
            type: 'varchar'
          },
          {
            name: 'music_name',
            type: 'varchar'
          },
          {
            name: 'url_sound',
            type: 'varchar'
          },
          {
            name: 'url_image',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKMusicPlaylistId',
            referencedTableName: 'playlists',
            referencedColumnNames: ['id'],
            columnNames: ['playlist_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('musics')
  }
}
