import { IToolsRepository } from "../../repository/IToolsRepository"
import {inject,injectable} from 'tsyringe'


interface IResquest {
    title: string,
    link: string,
    description: string,
    tags: string
}

@injectable()
class CreateToolUseCase {


    constructor(
        @inject("ToolRepository")
        private toolRepository: IToolsRepository) { }

    async execute({ title, link, description, tags }: IResquest): Promise<void> {

        const toolAlreadyExists = await this.toolRepository.findByTitle(title)
        if (toolAlreadyExists) {
            throw new Error("this tool already created!")
        }
        this.toolRepository.create({ title, link, description, tags })

    }
}

export { CreateToolUseCase }