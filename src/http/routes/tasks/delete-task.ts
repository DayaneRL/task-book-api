import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { deleteTask } from '../../../functions/tasks/delete-task'

export const deleteTaskRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/tasks',
    {
      schema: {
        querystring: z.object({
          id: z.string(),
        }),
      },
    },
    async request => {
      const { id } = request.query

      const { task } = await deleteTask({ id })

      return { task }
    }
  )
}
