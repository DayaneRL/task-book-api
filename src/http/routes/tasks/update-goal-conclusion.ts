import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { updateTaskConclusion } from '../../../functions/tasks/update-task-conclusion'

export const updateGoalConclusionRoute: FastifyPluginAsyncZod = async app => {
  app.put(
    '/tasks-conclusion',
    {
      schema: {
        body: z.object({
          id: z.string(),
          concluded: z.boolean(),
        }),
      },
    },
    async request => {
      const { id, concluded } = request.body

      const result = await updateTaskConclusion({
        id,
        concluded,
      })

      return result
    }
  )
}
