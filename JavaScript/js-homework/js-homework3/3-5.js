// 问题：已知abc+cba=1333，编程求出满足条件的所有一位整数abc
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            if (i * 100 + j * 10 + k + i + j * 10 + k * 100 == 1333) {
                console.log(i, j, k);
            }
        }
    }
}