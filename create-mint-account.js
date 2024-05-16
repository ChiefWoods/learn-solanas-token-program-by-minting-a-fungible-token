import { Connection } from "@solana/web3.js";
import { payer } from "./utils.js"
import { createMint } from "@solana/spl-token";

const connection = new Connection('http://localhost:8899');
const mintAuthority = payer.publicKey;
const freezeAuthority = payer.publicKey;
const mint = await createMint(connection, payer, mintAuthority, freezeAuthority, 9);
console.log(mint.toBase58());