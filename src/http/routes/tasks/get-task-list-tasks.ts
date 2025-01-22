import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getTaskListTasks } from '../../../functions/tasks/get-task-list-tasks'
import z from 'zod'

export const getTaskListTasksRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/task-list-tasks',
    {
      schema: {
        querystring: z.object({
          taskListId: z.string(),
        }),
      },
    },
    async request => {
      const { taskListId } = request.query

      const data = await getTaskListTasks({ taskListId })

      return data
    }
  )
}
