import { inject, injectable } from "tsyringe";
import { Tag } from "../../entities/Tags";

import { ITagsRepository } from "../../repository/ITagsRepository";


@injectable()
class ListTagsUseCase {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagsRepository) { }

  async execute(name: string): Promise<Tag[]> {
    const tag = await this.tagRepository.listByName({ name })
    return tag;

  }
}

export { ListTagsUseCase }