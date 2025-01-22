import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createTaskList } from '../../../functions/lists/create-task-list'

export const createTaskListRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/task-list',
    {
      schema: {
        body: z.object({
          title: z.string(),
          description: z.string(),
          status: z.boolean(),
        }),
      },
    },
    async request => {
      console.log(request.body)
      const { title, description, status } = request.body

      await createTaskList({
        title,
        description,
        status,
      })
    }
  )
}
