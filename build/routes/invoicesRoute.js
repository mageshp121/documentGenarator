"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/payment', (req, res) => {
    console.log("calling");
    res.render('paymentInvoiceTemplate');
});
router.get('/invitation', (req, res) => {
    res.send("everything okey with initation");
});
exports.default = router;
