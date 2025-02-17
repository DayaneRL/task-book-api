import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'

import { createTaskRoute } from './routes/tasks/create-task'
import { updateGoalConclusionRoute } from './routes/tasks/update-goal-conclusion'
import { deleteTaskRoute } from './routes/tasks/delete-task'
import { editTaskRoute } from './routes/tasks/edit-task'

import { getTaskListTasksRoute } from './routes/tasks/get-task-list-tasks'

import { createTaskListRoute } from './routes/lists/create-task-list'
import { getTaskListRoute } from './routes/lists/get-task-list'
import { deleteTaskListRoute } from './routes/lists/delete-task-list'
import { editTaskListRoute } from './routes/lists/edit-task-list'

import fastifyCors from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

//ref: github.com/turkerdev/fastify-type-provider-zod
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTaskRoute)
app.register(createTaskListRoute)
app.register(updateGoalConclusionRoute)
app.register(editTaskRoute)
app.register(deleteTaskRoute)

app.register(getTaskListTasksRoute)

app.register(getTaskListRoute)
app.register(editTaskListRoute)
app.register(deleteTaskListRoute)

app.get('/', async () => {
  return { message: 'App is running...' }
})

const port = process.env.PORT || 3333;

app
  .listen(port)
  .then(() => {
    console.log('Listening on port 3333')
  })
