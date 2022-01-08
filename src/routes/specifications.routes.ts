import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

/* specificationsRoutes.get('/', (request, response) => {
  const specifications = specificationsRepository.list();

  return response.json(specifications);
}); */

export { specificationsRoutes };
