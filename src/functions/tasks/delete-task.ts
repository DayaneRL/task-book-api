import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { goals } from '../../db/schema'

interface DeleteTaskRequest {
  id: string
}

export async function deleteTask({
  id,
}: DeleteTaskRequest) {
  const result = await db.delete(goals).where(eq(goals.id, id)).returning()

  const task = result[0]

  return {
    task,
  }
}
