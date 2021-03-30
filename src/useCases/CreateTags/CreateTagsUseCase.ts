import { inject, injectable } from 'tsyringe'
import { ITagsRepository } from "../../repository/ITagsRepository"


interface IResquest {
    name: string,
    toolId: string
}

@injectable()
class CreateTagUseCase {


    constructor(
        @inject("TagRepository")
        private tagsRepository: ITagsRepository) { }

    async execute({ name, toolId }: IResquest): Promise<void> {
        await this.tagsRepository.create({ name, toolId })

    }
}

export { CreateTagUseCase }