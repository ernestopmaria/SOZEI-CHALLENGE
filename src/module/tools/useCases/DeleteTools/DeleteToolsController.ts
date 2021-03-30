import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteToolUseCase } from './DeleteToolUseCase'

class DeleteToolController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const deleteToolUseCase = container.resolve(DeleteToolUseCase)
            deleteToolUseCase.execute({ id })
            return response.status(200).send()
        } catch (err) {
            return response.status(400).json({ error: err.message })
        }
    }
}

export { DeleteToolController }