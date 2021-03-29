import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTagsUseCase } from "./ListTagsUseCase";



class ListTagController {

    async handle(request: Request, response: Response):Promise<Response> {
        const {name} = request.params
        const listTagsUseCase = container.resolve(ListTagsUseCase)
        const all = await listTagsUseCase.execute(name)
        return response.status(200).json(all)
    }
}
export { ListTagController }