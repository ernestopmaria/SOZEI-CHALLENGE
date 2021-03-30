
import { Tag } from "../entities/Tags";

interface ICreateTagsDTO {
    name: string,
    toolId: string

}

interface ITagsRepository {
    listByName({ name }: ICreateTagsDTO): Promise<Tag[]>;
    create({ name }: ICreateTagsDTO): Promise<void>
}

export { ITagsRepository, ICreateTagsDTO }