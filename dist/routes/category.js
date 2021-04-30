"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_1 = require("../controllers/categories");
const router = express_1.Router();
router.get('/', categories_1.getCategories);
/* router.get('/:id',      getUsuario);

router.post('/',        postUsuario);

router.put('/:id',      putUsuario);
router.delete('/:id',   deleteUsuario); */
exports.default = router;
//# sourceMappingURL=category.js.map