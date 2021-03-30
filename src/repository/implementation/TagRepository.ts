import { getRepository, Repository } from 'typeorm';
import { Tag } from '../../entities/Tags';
import { ICreateTagsDTO, ITagsRepository } from '../ITagsRepository'


class TagRepository implements ITagsRepository {


    private repository: Repository<Tag>

    constructor() {
        this.repository = getRepository(Tag)

    }


    async create({ name }: ICreateTagsDTO): Promise<void> {
        const tags = this.repository.create({
            name

        })

        await this.repository.save(tags)
    }


    async listByName(name): Promise<Tag[]> {
        const tools = await this.repository.find(name)

        return tools
    }


}





export { TagRepository }