import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { taskLists } from '../../db/schema'

interface editTaskListRequest {
  id: string
  data: {
    title: string;
    description: string;
    status: boolean;
  }
}

export async function editTaskList({
  id,
  data,
}: editTaskListRequest) {
  const result = await db
    .update(taskLists)
    .set({ 
        title: data.title,
        description: data.description,
        status: data.status
    })
    .where(eq(taskLists.id, id))
    
    .returning()

  const taskList = result[0]

  return {
    taskList,
  }
}
