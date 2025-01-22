import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getTaskList } from '../../../functions/lists/get-task-list'
import z from 'zod'

export const getTaskListRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/task-list',
    // {
    //   schema: {
    //     querystring: z.object({
    //       page: z.number(),
    //       limit: z.number(),
    //     }),
    //   },
    // },
    async request => {
      //doing - pagination
      // const { page = 1 } = request.query
      // const { limit = 10 } = request.query
      
      // const salto = (page - 1) * limit
      // const total_items = results.length //dar count no banco
      // const total_pages = Math.ceil(total_items / limit)

      // const post = await Post.find().skip(salto).limit(limit);

      const { taskList } = await getTaskList()

      return { taskList }
    }
  )
}
