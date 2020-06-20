import { Router } from 'express';

import subareaRouter from '@modules/subareas/infra/http/routes/subarea.routes';
import procedureRouter from '@modules/procedures/infra/http/routes/procedures.routes';

const routes = Router();

routes.use('/subarea', subareaRouter);
routes.use('/subarea', procedureRouter);

export default routes;
