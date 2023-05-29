//返回介于min和max间的整数
export function randomInt(min, max) {
    const p = Math.random();
    return Math.floor(min * (1 - p) + max * p);
}

const articleLength = randomInt(3000, 5000); //设置文章长度介于3000~5000字
const sectionLength = randomInt(200, 500); // 设置段落长度介于200到500字

let lastPicked = null;
//随机选出数组中的一个元素
// export function randomPick(arr) {
//     let picked = null;
//     do {
//         const index = randomInt(0, arr.length);
//         picked = arr[index];
//     } while ((picked = lastPicked));
//     lastPicked = picked;
//     return picked;
// }

//优化
//避免连续两次选择到同样的元素
// export function randomPick(arr) {
//     const len = arr.length - 1;
//     const index = randomInt(0, len);
//     [arr[index], arr[len]] = [arr[len], arr[index]];
//     return arr[index];
// }

//二次优化
export function createRandomPicker(arr) {
    arr = [...arr]; // copy 数组，以免修改原始数据
    function randomPick() {
        const len = arr.length - 1;
        const index = randomInt(0, len);
        const picked = arr[index];
        [arr[index], arr[len]] = [arr[len], arr[index]];
        return picked;
    }
    randomPick(); // 抛弃第一次选择结果
    return randomPick;
}