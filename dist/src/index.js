"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let ETH_BALANCE = 200;
let USDC_BALANCE = 700000;
app.post("/buy-asset", (req, res) => {
    const product = ETH_BALANCE * USDC_BALANCE;
    const quantity = req.body.quantity;
    const updatedETHquantity = ETH_BALANCE - quantity;
    const updatedUSDCbalance = ETH_BALANCE * USDC_BALANCE / updatedETHquantity;
    const paidAmount = updatedUSDCbalance - USDC_BALANCE;
    ETH_BALANCE = updatedETHquantity;
    USDC_BALANCE = updatedUSDCbalance;
    res.json({
        message: `You paid ${paidAmount} USDC for ${quantity} ETH`
    });
});
app.listen(3000);
// app.post("/sell-asset", (req, res) => {      
//     }
// )
