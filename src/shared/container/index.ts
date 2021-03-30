import { container } from 'tsyringe'

import { ToolRepository } from '../../module/tools/repository/implementation/ToolRepository'
import { IToolsRepository } from '../../module/tools/repository/IToolsRepository'



container.registerSingleton<IToolsRepository>(
    'ToolRepository',
    ToolRepository
)
