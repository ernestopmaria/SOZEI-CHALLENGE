import { Tag } from "../entities/Tags";

interface ICreateTagsDTO {
    name: string,

}

interface ITagsRepository {
    listByName({ name }: ICreateTagsDTO): Promise<Tag[]>;
    create({ name }: ICreateTagsDTO): Promise<void>
}

export { ITagsRepository, ICreateTagsDTO }