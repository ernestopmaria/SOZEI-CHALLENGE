import { IToolsRepository } from "../../repository/IToolsRepository"


interface IResquest {
    title: string,
    link: string,
    description: string,
    tags: string
}

class CreateToolUseCase {
    constructor(private toolRepository: IToolsRepository) { }

    async execute({ title, link, description, tags }: IResquest): Promise<void> {

        const toolAlreadyExists = await this.toolRepository.findByTitle(title)
        if (toolAlreadyExists) {
            throw new Error("this tool already created!")
        }
        this.toolRepository.create({ title, link, description, tags })

    }
}

export { CreateToolUseCase }