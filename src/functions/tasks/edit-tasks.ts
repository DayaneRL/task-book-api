import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { goals } from '../../db/schema'

interface editTaskRequest {
  id: string
  data: {
    title: string;
    concluded: boolean;
    taskListId: string;
  }
}

export async function editTask({
  id,
  data,
}: editTaskRequest) {
  const result = await db
    .update(goals)
    .set({ 
        title: data.title
    })
    .where(eq(goals.id, id))
    .returning()

  const task = result[0]

  return {
    task,
  }
}
