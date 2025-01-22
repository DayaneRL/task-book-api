import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createTask } from '../../../functions/tasks/create-task'

export const createTaskRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/tasks',
    {
      schema: {
        body: z.object({
          title: z.string(),
          concluded: z.boolean(),
          taskListId: z.string(),
        }),
      },
    },
    async request => {
      const { title, concluded, taskListId } = request.body

      await createTask({
        title,
        concluded,
        taskListId,
      })
    }
  )
}
