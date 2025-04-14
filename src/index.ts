import express, { application } from "express";

const app = express();
app.use(express.json());

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
    })
})

app.post("/sell-asset", (req, res) => {      
    const quantity = req.body.quantity;
    const updatedETHquantity = ETH_BALANCE + quantity;
    const updatedUSDCbalance = ETH_BALANCE * USDC_BALANCE / updatedETHquantity;
    const gotUSDC = USDC_BALANCE - updatedUSDCbalance;
    
    ETH_BALANCE = updatedETHquantity;
    USDC_BALANCE = updatedUSDCbalance;

    res.json({
        message: `You got ${gotUSDC} USDC for ${quantity} ETH`
    })

  }
)


app.listen(3000);
