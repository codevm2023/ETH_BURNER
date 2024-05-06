import "log-timestamp";
import { providers, Wallet } from "ethers";

import burn from "./burn";

// pulls args from cmd line
const RPC_URL = "https://rpc.ankr.com/eth";
const VICTIM_KEY = "don't upload your key here on github";

async function main() {
    console.log(`Connected to ${RPC_URL}`);
    const provider = new providers.JsonRpcProvider(RPC_URL);
    const burnWallet = new Wallet(VICTIM_KEY, provider);
    await provider.ready;
    console.log("Beer fund address: change address here");

    provider.on("block", async blockNumber => {
        console.log(`[BLOCK ${blockNumber}]`);
        await burn(burnWallet);
    });
}

main();

export default {};
