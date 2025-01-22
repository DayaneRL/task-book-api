import { createId } from '@paralleldrive/cuid2'
import { integer, timestamp } from 'drizzle-orm/pg-core'
import { pgTable, text, boolean } from 'drizzle-orm/pg-core'

export const taskLists = pgTable('task_list', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text('title').notNull(),
  description: text('description').notNull(),
  status: boolean('status').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export const goals = pgTable('goals', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text('title').notNull(),
  concluded: boolean('concluded').notNull(),
  taskListId: text('task_list_id')
    .references(() => taskLists.id)
    .notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
