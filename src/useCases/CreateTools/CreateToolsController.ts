import { Request, Response } from "express"
import { CreateToolUseCase } from "./CreateToolUseCase"

class CreateToolsController {

    constructor(private createToolUseCase: CreateToolUseCase) { }

    handle(request: Request, response: Response): Response {
        const { title, link, description, tags } = request.body

        this.createToolUseCase.execute({ title, link, description, tags })
        return response.status(201).send()
    }


}

export { CreateToolsController }