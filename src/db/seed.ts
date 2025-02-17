import dayjs from 'dayjs'
import { client, db } from '.'
import { taskLists, goals } from './schema'

async function seed() {
  await db.delete(taskLists)
  await db.delete(goals)

  const result = await db
    .insert(taskLists)
    .values([{ title: 'Lista 1', description: 'primeira lista', status: true }])
    .returning()

  await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', concluded: false, taskListId: result[0].id },
    ])
}

seed().finally(() => {
  client.end()
})
