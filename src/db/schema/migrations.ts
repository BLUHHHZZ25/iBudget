import { createTable, schemaMigrations } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
  migrations: [{
    toVersion: 2,
    steps:[
      createTable({
        name: 'posts',
        columns: [
          {name: 'title', type: 'string', isIndexed: true },
          {name: 'subTitle', type: 'string' },
          {name: 'body', type: 'string'},
          {name: 'is_pinned', type: 'boolean'}
        ]
      }),
      createTable({
        name: 'comments',
        columns:[
          { name: 'body', type: 'string'},
          { name: 'post_id', type: 'string', isIndexed: true},
        ]
      })      
    ]
  }],
})