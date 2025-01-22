import { db } from '../../db'
import { goals, taskLists } from '../../db/schema'
import { and, count, desc, eq, gte, lte, sql } from 'drizzle-orm'

interface GetTaskListTasksRequest {
  taskListId?: string
}

export async function getTaskListTasks({
  taskListId,
}: GetTaskListTasksRequest) {
  
  if(taskListId){
      const pendingGoals = await db
      .select()
      .from(goals)
      .where(eq(goals.taskListId, taskListId))
      .orderBy(goals.createdAt)

      const totalCompleted = pendingGoals?.filter((goal)=>goal.concluded==true)?.length;
      const total = pendingGoals?.length;

    return { 
      goals: pendingGoals,
      total,
      totalCompleted 
    }
  }else{
    const lastTaskList = await db
    .select({
      id: taskLists.id,
    })
    .from(taskLists)
    .orderBy(taskLists.createdAt)
    .limit(1);

    const pendingGoals = await db
    .select()
    .from(goals)
    .where(eq(goals.taskListId, lastTaskList[0].id))
    .orderBy(goals.createdAt)

    return { goals:pendingGoals }
  } 
    
}
