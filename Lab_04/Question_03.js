				//Question 03
console.log("\tQuestion 03")

const fs = require('fs')
const fileName = __dirname+'/Test.txt'

//Read file Asynchronously
fs.readFile(fileName,function(err,data){
	if(err)
		console.log(err)

	else{
		console.log(data)
		console.log(data.toString())
		
	}
})

//Read File synchronously
const data = fs.readFileSync(fileName);
console.log(data.toString())
