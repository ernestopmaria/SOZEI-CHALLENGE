import {inject,injectable} from 'tsyringe'
import { ITagsRepository } from "../../repository/ITagsRepository"


interface IResquest {
   name:string,
   tool:string
}

@injectable()
class CreateTagUseCase {


    constructor(
        @inject("TagRepository")
        private tagsRepository: ITagsRepository) { }

    async execute({ name, tool}: IResquest): Promise<void> {
        this.tagsRepository.create({name, tool})

    }
}

export { CreateTagUseCase }