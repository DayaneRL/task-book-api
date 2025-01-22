import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { deleteTaskList } from '../../../functions/lists/delete-task-list'

export const deleteTaskListRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/task-list',
    {
      schema: {
        querystring: z.object({
          id: z.string(),
        }),
      },
    },
    async request => {
      const { id } = request.query

      const { task } = await deleteTaskList({ id })

      return { task }
    }
  )
}
