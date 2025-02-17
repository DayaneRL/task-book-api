import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { goals, taskLists } from '../../db/schema'

interface DeleteTaskListRequest {
  id: string
}

export async function deleteTaskList({
  id,
}: DeleteTaskListRequest) {
  
  const deleteTasks = await db.delete(goals).where(eq(goals.taskListId, id));

  const result = await db.delete(taskLists).where(eq(taskLists.id, id)).returning()

  const task = result[0]

  return {
    task,
  }
}
