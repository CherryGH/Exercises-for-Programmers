/*
   2017-04-26 by Jimmy Xiang
 */

var readline = require("readline")

var reader = readline.createInterface({input:process.stdin,output:process.stdout});
reader.setPrompt('What is your name?');
reader.prompt();

reader.on('line',(line)=>{var name=line.trim();
   	console.log("Hello, "+name+", nice to meet you!")
   	process.exit();
});