import {container} from 'tsyringe'
import { TagRepository } from '../../repository/implementation/TagRepository'
import { ToolRepository } from '../../repository/implementation/ToolRepository'
import { ITagsRepository } from '../../repository/ITagsRepository'
import { IToolsRepository } from '../../repository/IToolsRepository'

container.registerSingleton<IToolsRepository>("ToolRepository", ToolRepository)
container.registerSingleton<ITagsRepository>("TagRepository", TagRepository)