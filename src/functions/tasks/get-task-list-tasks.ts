import { db } from '../../db/_index'
import { goals, taskLists } from '../../db/schema'
import { and, count, desc, eq, gte, lte, sql } from 'drizzle-orm'

interface GetTaskListTasksRequest {
  taskListId?: string
}

export async function getTaskListTasks({
  taskListId,
}: GetTaskListTasksRequest) {
  
  if(taskListId){
      const pendingTasks = await db
      .select()
      .from(goals)
      .where(eq(goals.taskListId, taskListId))
      .orderBy(goals.createdAt)

      const totalCompleted = pendingTasks?.filter((task)=>task.concluded==true)?.length;
      const total = pendingTasks?.length;

    return { 
      tasks: pendingTasks,
      total,
      totalCompleted 
    }
  }
  return null;
  // else{
  //   const lastTaskList = await db
  //   .select({
  //     id: taskLists.id,
  //   })
  //   .from(taskLists)
  //   .orderBy(taskLists.createdAt)
  //   .limit(1);

  //   const pendingTasks = await db
  //   .select()
  //   .from(goals)
  //   .where(eq(goals.taskListId, lastTaskList[0].id))
  //   .orderBy(goals.createdAt)

  //   return { tasks: pendingTasks }
  // } 
    
}
