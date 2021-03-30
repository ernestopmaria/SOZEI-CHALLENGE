import { Router } from 'express';
import { CreateToolController } from '../module/tools/useCases/CreateTools/CreateToolController';
import { DeleteToolController } from '../module/tools/useCases/DeleteTools/DeleteToolsController';
import { ListAllToolsController } from '../module/tools/useCases/ListAllTools/ListAllToolsController';
import { ListToolsController } from '../module/tools/useCases/ListToolsByTag/ListToolsController';





const toolsRoutes = Router();
const createToolController = new CreateToolController()
const listToolsController = new ListToolsController()
const deleteToolsController = new DeleteToolController()
const listAllToolsController = new ListAllToolsController()



toolsRoutes.post("/", createToolController.handle)

toolsRoutes.get("/", listAllToolsController.handle)

toolsRoutes.get("/:tag", listToolsController.handle)

toolsRoutes.delete("/:id", deleteToolsController.handle)


export { toolsRoutes }