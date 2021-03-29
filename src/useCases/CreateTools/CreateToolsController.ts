import { Request, Response } from "express"
import { CreateToolUseCase } from "./CreateToolUseCase"

class CreateToolsController {

    constructor(private createToolUseCase: CreateToolUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { title, link, description, tags } = request.body

        await this.createToolUseCase.execute({ title, link, description, tags })
        return response.status(201).send()
    }


}

export { CreateToolsController }