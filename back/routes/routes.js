import express from "express";

import { mpesaCallback, mpesaDonate } from "../controllers/mpesaController.js";
import { bankDonate } from "../controllers/bankController.js";

const router = express.Router();

//mpesa endpoint
router.post("/mpesa", mpesaDonate);
router.post("/mpesa-callback", mpesaCallback);

//bank endpoint
router.post("/bank", bankDonate);

export { router as Router };
