const fs = require('fs');

// fs.writeFile("index.txt" , "Hello world" , (err) => {
//     if (err) {
//         console.log(err);
//     }else{
//         console.log("file created successfully");
        
//     }
// })

// fs.appendFile("index.txt" , " How are you" , (err) => {
//     if (err) {
//         console.error(err);
//     }else {
//         console.log("data appended succcessfully");
        
//     }
// })
// fs.appendFile("index.txt" , " Alhamdulillah" , (err) => {
//     if (err) {
//         console.error(err);
//     }else{
//         console.log("data appended successfully");
        
//     }
// })

// fs.rename("index.txt" , "hello.txt" , (err) => {
//     if (err) {
//         console.error(err);
//     }else {
//         console.log("file renamed successfully");
//     }
// })

// fs.copyFile("./hello.txt" , "./copy/copy.txt" , (err) => {
//     if (err) {
//         console.error(err);
//     }else {
//         console.log("file copied successfully");
        
//     }
// })

// fs.unlink("./hello.txt" , (err) => {
//     if (err) {
//         console.error(err);
//     }else{
//         console.log("file deleted successfully");
        
//     }
// })

// fs.rmdir("./hello" , (err) => {
//     if (err) {
//         console.error(err.message);
//     }else {
//         console.log("directory removed successfully");
        
//     }
// })

// fs.writeFile("hello.txt" , "Hello how are you" , (err) => {
//     if (err) {
//         console.error(err.message);
//     }else{
//         console.log("file created successfully");
        
//     }
// })

fs.appendFile("hello.txt" , " Alhamdulillah" , (err) => {
    if (err) {
        console.error(err.message);
    }else{
        console.log("data added Successfully");
        
    }
})

fs.copyFile("hello.txt", "copy.txt", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("file copied successfully");
    }
});