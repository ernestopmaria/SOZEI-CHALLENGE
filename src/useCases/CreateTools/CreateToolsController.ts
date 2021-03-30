import { Request, Response } from "express"
import { container } from 'tsyringe'
import { CreateToolUseCase } from "./CreateToolUseCase"

class CreateToolsController {



    async handle(request: Request, response: Response): Promise<Response> {
        const { title, link, description } = request.body
        const createToolUseCase = container.resolve(CreateToolUseCase)

        await createToolUseCase.execute({ title, link, description })
        return response.status(201).send()
    }


}

export { CreateToolsController }