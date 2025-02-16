import { db } from '../../db/_index'
import { goals } from '../../db/schema'

interface CreateTaskRequest {
  title: string
  concluded: boolean
  taskListId: string
}

export async function createTask({
  title,
  concluded,
  taskListId,
}: CreateTaskRequest) {
  const result = await db
    .insert(goals)
    .values({
      title,
      concluded,
      taskListId,
    })
    .returning()

  const goal = result[0]

  return {
    goal,
  }
}
