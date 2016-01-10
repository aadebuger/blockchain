var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://1257.net:8545"));
 var coinbase = web3.eth.coinbase;
console.log("coinbase",coinbase)
 var originalBalance = web3.eth.getBalance(coinbase).toNumber();
 console.log("originalBalance",originalBalance)
 web3.fromWei(web3.eth.getBalance(web3.eth.coinbase), "ether")
 function test()
 {
 	console.log("test")
 	 web3.eth.defaultAccount = web3.eth.coinbase;
        // create contract
    
        web3.eth.contract(abi).new({data: code}, function (err, contract) {
            if(err) {
                console.error(err);
                return;
            // callback fires twice, we only want the second call when the contract is deployed
            } else if(contract.address){
                myContract = contract;
                console.log('address: ' + myContract.address);
             //   document.getElementById('status').innerText = 'Mined!';
             //   document.getElementById('call').style.visibility = 'visible';
            }
        });

 }
var source = "" +
    "contract test {\n" +
    "   function multiply(uint a) constant returns(uint d) {\n" +
    "       return a * 7;\n" +
    "   }\n" +
    "}\n";
    var compiled = web3.eth.compile.solidity(source);
    var code = compiled.test.code;
    console.log("code"+code);
var abi = compiled.test.info.abiDefinition;
test()

//web3.eth.sendTransaction({from: '0x036a03fc47084741f83938296a1c8ef67f6e34fa', to: '0xa8ade7feab1ece71446bed25fa0cf6745c19c3d5', value: web3.toWei(1, "ether")})
