const express = require('express');
const router = express.Router();
const penulisController = require('../controller/penulisController');
const komikController = require('../controller/komikController');
const genreController = require('../controller/genreController');
const authMiddleware = require('../controller/authMiddelware');

router.post("/register", penulisController.register);
router.post("/login", penulisController.login);

router.get("/genre", authMiddleware, genreControler.getAll);
router.post("/genre", authMiddleware, genreController.create);
router.put("/genre/:id", authMiddleware, genreController.update);
router.delete("/genre/:id", authMiddleware, genreController.remove);

