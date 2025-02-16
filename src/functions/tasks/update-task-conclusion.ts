import { eq } from 'drizzle-orm'
import { db } from '../../db/_index'
import { goals } from '../../db/schema'

interface UpdateTaskRequest {
  id: string
  concluded: boolean
}

export async function updateTaskConclusion({
  id,
  concluded,
}: UpdateTaskRequest) {
  const result = await db
    .update(goals)
    .set({ concluded })
    .where(eq(goals.id, id))

  const goal = result[0]

  return {
    goal,
  }
}
