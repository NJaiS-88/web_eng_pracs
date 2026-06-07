const fs = require('fs');
const file = 'one.txt';
function write(text){
    fs.writeFileSync(file, text);
}
function read(){
    const content = fs.readFileSync(file, 'utf-8');
    console.log(content);
}
function append(text){
    fs.appendFileSync(file,'\n'+text );
}
function deleteFile(){
    fs.unlinkSync(file);
    console.log("file deleted successfully");
}

write("hello world");
read();
append("bello");
read();
deleteFile();