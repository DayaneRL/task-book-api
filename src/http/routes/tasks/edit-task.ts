import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { editTask } from '../../../functions/tasks/edit-tasks'

export const editTaskRoute: FastifyPluginAsyncZod = async app => {
  app.put(
    '/tasks',
    {
      schema: {
        querystring: z.object({
            id: z.string(),
        }),
        body: z.object({
          data: z.object({
            title: z.string(),
            concluded: z.boolean(),
            taskListId: z.string(),
          }),
        }),
      },
    },
    async request => {
        const { id } = request.query
        const { data } = request.body

        const result = await editTask({
            id,
            data,
        })

        return result
    }
  )
}
