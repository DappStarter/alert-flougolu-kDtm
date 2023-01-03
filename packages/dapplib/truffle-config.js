require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stool curtain saddle provide hunt glove equal genius'; 
let testAccounts = [
"0xc1fb1cb8a8ad41da863af7d56c32e0648706d3dcce770c66335c41ef710ed732",
"0xe8460909bfea8aada8c9f2419580339451303fe7614b6e8bd21150fec4d3cd27",
"0xec1bd9ead8edbbf02ecb3aba876c7b9638080fe53c60a9dbe538207bce9a4554",
"0x7cc40d4ab3a1dcef4ca605effaee1b9c438afcd50d112a973e33d1873ce8c26e",
"0xc8fb83de2616589c8c96d6f9c03967be57322fcb0ee7be6e7ac908f088f1a030",
"0xb37bbe9a5b5ac6870ae8752e92adc947b12e41e7e77c6878eb865756465867f7",
"0x23c814599e5ada2c41e96ef489c2a7d6aaa986e17d6f391e37fe466022c91e4e",
"0x01c124e2bdef95d001ad2574eead750f8acf7e47723a00977a5626889b944fc9",
"0x0bfe970155af76fa814636459233949b1bf852b6c6383c2cdeab3906b5279eb2",
"0x48df9066386866b74f418ecf966be2abfd5341922bfa2adf4e76ac6431957fbe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

