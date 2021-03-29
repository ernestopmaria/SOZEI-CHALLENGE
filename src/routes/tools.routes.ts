import { Router } from 'express';
import { CreateTagsController } from '../useCases/CreateTags/CreateTagsController';
import { CreateToolsController } from '../useCases/CreateTools/CreateToolsController';
import { DeleteToolController } from '../useCases/DeleteTools/DeleteToolsController';
import { ListTagController } from '../useCases/ListTags/ListTagsController';
import { ListToolController } from '../useCases/ListTools/ListToolsController';




const toolsRoutes = Router();
const createToolController = new CreateToolsController()
const listToolsController = new ListToolController()
const deleteToolsController = new DeleteToolController()
const createTagsControler = new CreateTagsController()
const listTagsController = new ListTagController()


toolsRoutes.post("/tools", createToolController.handle)

toolsRoutes.get("/tools",listToolsController.handle)

toolsRoutes.delete("/tools/:id", deleteToolsController.handle) 


toolsRoutes.post("/tools/tag", createTagsControler.handle)

toolsRoutes.get("/tools/tag/:name",listTagsController.handle)

export { toolsRoutes }