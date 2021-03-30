import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateToolUseCase } from './CreateToolUseCase'

class CreateToolController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title, link, description, tags } = request.body
      const createToolUseCase = container.resolve(CreateToolUseCase)

      const tool = await createToolUseCase.execute({
        title,
        link,
        description,
        tags
      })
      return response.status(201).json(tool)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export { CreateToolController }