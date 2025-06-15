import express from "express";
import { getTransactionsByUserId, getTransactionsSummaryByUserId, createTransaction, deleteTransactionByUserId } from "../controllers/transactionsController.js"

const router = express.Router();

router.get("/:userId", getTransactionsByUserId)

router.get("/summary/:userId", getTransactionsSummaryByUserId)

router.post("/", createTransaction)

router.delete("/:id", deleteTransactionByUserId)

export default router