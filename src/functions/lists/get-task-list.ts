import { db } from '../../db/_index'
import { taskLists } from '../../db/schema'

export async function getTaskList() {
  const taskList = await db.select().from(taskLists)

  return { taskList }
}
