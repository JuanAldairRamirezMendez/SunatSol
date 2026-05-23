require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { query } = require("./db");

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get("/health", async (_req, res) => {
  try {
    const result = await query("select now() as server_time");
    res.json({ ok: true, serverTime: result.rows[0].server_time });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Database connection failed" });
  }
});

app.get("/clients/:ruc", async (req, res) => {
  try {
    const { ruc } = req.params;
    const result = await query(
      "select client_name from public.clients where client_ruc = $1 order by created_at desc limit 1",
      [ruc]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ ok: false, message: "Client not found" });
    }

    res.json({ ok: true, clientName: result.rows[0].client_name });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Could not fetch client" });
  }
});

app.post("/receipts", async (req, res) => {
  try {
    const {
      userId,
      clientId,
      receiptNumber,
      grossAmount,
      retentionApplied,
      retentionAmount,
      netAmount,
      paymentMethod,
    } = req.body;

    if (!userId || !clientId || !receiptNumber || typeof grossAmount !== "number" || typeof netAmount !== "number") {
      return res.status(400).json({ ok: false, message: "Missing required fields" });
    }

    const result = await query(
      `insert into public.receipts (
        user_id,
        client_id,
        receipt_number,
        gross_amount,
        retention_applied,
        retention_amount,
        net_amount,
        payment_method,
        status
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, 'issued') returning *`,
      [
        userId,
        clientId,
        receiptNumber,
        grossAmount,
        Boolean(retentionApplied),
        retentionAmount ?? 0,
        netAmount,
        paymentMethod || "contado",
      ]
    );

    res.status(201).json({ ok: true, receipt: result.rows[0] });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Could not create receipt" });
  }
});

app.listen(port, () => {
  console.log(`SUNAT SOL API listening on port ${port}`);
});