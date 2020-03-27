require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strike rival mad attitude half end army giant'; 
let testAccounts = [
"0x8453311ccdd16980729a735ad21cc0ec0f780c5a91ea191f42a995c04bba51ef",
"0xac3fdd9de4910807519bea354bddbdac34a3b9c520487f1a0a766bc3b8cf6e14",
"0xb6f8fd589ca59d6f4464dc61ec4e1dcdb025e677fb622e5534e627ec37150f89",
"0xb1e089a1bb8144805c6104b6b4ec17fcdf0f51404b97eb0554d53c887eb1e869",
"0x15a6535f1d9e4b1141219a15080e8ddf574a4b806cf14e7cdbf205145ca0f153",
"0xbe9ceadbc8a401cc2405a7053c1eceb2d22c8a2d000df862286c59a9da3d060c",
"0xc56025a954292451c197c2e2c8215583f42c31bd56aea9f7f6a136d92a4c750f",
"0x2689b68e803b30c644e185a9894376b7749ccf6c2ab7c6a88caa700de7416a80",
"0xdac3458b6cd3fb8698e9c138dbfc42a0e5737c1127f4d97220c86f41f7554d49",
"0x4945b4589be4bea0efe13c0573ae1d5b6da22fe7608abd810d15f9f934cf3aa8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
