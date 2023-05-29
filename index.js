import fs, { readFile, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const url =
    import.meta.url; //获取当前脚本文件的url
const path = resolve(dirname(fileURLToPath(url)), "corpus/data.json");
// readFile(path, (err, data) => {
//     if (!err) {
//         //输出的内容不是文本内容，而是 Buffer 对象，表示文件的二进制数据内容
//         //使用toString修改
//         console.log(data.toString("utf-8"));
//         const corpus = JSON.parse(data);
//     } else {
//         console.error(err);
//     }
// });
// console.log(fs);
const data = readFileSync(path, { encoding: "utf-8" });
const corpus = JSON.parse(data);
console.log(corpus);