import { Request, Response } from "express";
import { ListToolsUseCase } from "./ListToolsUseCase";


class ListToolController {

    constructor(private lisToolUseCase: ListToolsUseCase) { }

    handler(request: Request, response: Response) {
        const all = this.lisToolUseCase.execute()
        return response.status(200).json(all)
    }
}

export { ListToolController }