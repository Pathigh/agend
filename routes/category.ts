import { Router } from 'express';

import { getCategories } from '../controllers/categories';

const router = Router();

router.get('/',         getCategories);
/* router.get('/:id',      getUsuario);

router.post('/',        postUsuario);

router.put('/:id',      putUsuario);
router.delete('/:id',   deleteUsuario); */

export default router;