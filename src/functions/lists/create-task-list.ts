import { db } from '../../db/_index'
import { taskLists } from '../../db/schema'

interface CreateTaskListRequest {
  title: string
  description: string
  status: boolean
}

export async function createTaskList({
  title,
  description,
  status,
}: CreateTaskListRequest) {
  
  const result = await db
    .insert(taskLists)
    .values({
      title,
      description,
      status,
    })
    .returning()

  const taskList = result[0]

  return {
    taskList,
  }
}
