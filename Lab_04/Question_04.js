				//Question 04
console.log("\tQuestion 04")
const fs= require('fs')

const inFileName=__dirname+'/Test.txt';
const outFileName=__dirname+'/Test_Copy.txt';

//Create ReadStream for input file
const readStream = fs.createReadStream(inFileName);
const writeStream = fs.createWriteStream(outFileName);

//Now we need to connect readStream to writeStream inorder to transfer data
//Through pipe
readStream.pipe(writeStream);

//We can listen to the data through readStream
//Using the event on('data')
readStream.on('data',data=>{
	console.log(data.toString())
})
