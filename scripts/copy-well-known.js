const fs = require('fs');  
const path = require('path');  
  
// 源文件路径  
const sourceFile = path.join(__dirname, '../source/.well-known/pki-validation/FC39D24DF8F247E8E7ECC882745D043B.txt');  
// 目标文件路径（Hexo的public目录）  
const destFile = path.join(__dirname, '../public/.well-known/pki-validation/FC39D24DF8F247E8E7ECC882745D043B.txt');  
  
// 确保目录存在  
fs.mkdirSync(path.dirname(destFile), { recursive: true });  
  
// 复制文件  
fs.copyFileSync(sourceFile, destFile);  
  
console.log('文件已复制到public目录');