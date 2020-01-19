// 0和1既不是素数也不是和数，2，3，5，7，11素数
function getPrime(n) {
  let i = 0,
    j = 0,
    c = 0;
  let primeArr = [];
  for (i = 2; i <= n; i++) {
    primeArr[i] = 1; // 假设从2开始都是素数
  }
  for (i = 2; i * i <= n; i++) {
    // 能被n整除只需要到√n（假设存在有√n能被n整除的数p，那n/p一定比√n小，当循环从小到大时候一定能招到它，因此p就不需要去找了）
    // 例如N=15,能被它整除的有1，3，5，N被3整除的时候商是5，因此循环判断只需要到3
    if (primeArr[i] === 1) {
      for (j = 2 * i; j <= n; j++) {
        // 2的倍数，3倍数以及后面的这些数这些肯定就不是素数了
        if (!primeArr[j]) {
          //不是素数跳过
          continue;
        }
        if (j % i == 0) {
          primeArr[j] = 0;
        }
      }
    }
  }
  let str = "";
  primeArr.forEach((value, index) => {
    if (value == 1) {
      console.log(index + " ");
    }
  });
}
getPrime(100);
