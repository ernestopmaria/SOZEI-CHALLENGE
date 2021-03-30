import { Router } from 'express';
import { CreateToolController } from '../module/tools/useCases/CreateTools/CreateToolController';
import { DeleteToolController } from '../module/tools/useCases/DeleteTools/DeleteToolsController';
import { ListToolsController } from '../module/tools/useCases/ListTools/ListToolsController';





const toolsRoutes = Router();
const createToolController = new CreateToolController()
const listToolsController = new ListToolsController()
const deleteToolsController = new DeleteToolController()



toolsRoutes.post("/tools", createToolController.handle)

toolsRoutes.get("/tools/:tag", listToolsController.handle)

toolsRoutes.delete("/tools/:id", deleteToolsController.handle)


export { toolsRoutes }