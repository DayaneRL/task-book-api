import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { editTaskList } from '../../../functions/lists/edit-task-list'

export const editTaskListRoute: FastifyPluginAsyncZod = async app => {
  app.put(
    '/task-list',
    {
      schema: {
        querystring: z.object({
            id: z.string(),
        }),
        body: z.object({
          data: z.object({
            title: z.string(),
            description: z.string(),
            status: z.boolean(),
          }),
        }),
      },
    },
    async request => {
        const { id } = request.query
        const { data } = request.body

        const result = await editTaskList({
            id,
            data,
        })

        return result
    }
  )
}
