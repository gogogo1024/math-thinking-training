/*
 * @Author: snoy
 * @Email: jxycbjhc@163.com
 * @Date: 2020-01-20 22:44:55
 * @Last Modified by: snoy
 * @Last Modified time: 2020-01-20 23:50:39
 * @Description: Description
 */

// 公钥和私钥生成以及非对称加密和解密

/**
 * 生成公钥和私钥
 * @param {*} p  素数
 * @param {*} q  素数
 */
function generateEncryptionKey(p, q) {
  let n = p * q;
  let t = (p - 1) * (q - 1);
  let e = 7; // 暂时取7
  let d = 1;
  for (let i = 1; ; i++) {
    if ((7 * i) % t === 1) {
      d = i;
      break;
    }
  }
  //公钥 私钥 n
  return { pk: e, sk: d, n: n };
}

/**
 * 公钥加密明文
 * @param {*} m 明文
 * @param {*} n p*q
 * @param {*} pk 公钥
 */

function encryption(m, n, pk) {
  let c = Math.pow(m, pk) % n;
  return c;
}
/**
 * 私钥解密明文
 * @param {*} c 密文
 * @param {*} n p*q
 * @param {*} sk 私钥
 */

function decryption(c, n, sk) {
  let m = Math.pow(c, sk) % n;
  return m;
}

let obj = generateEncryptionKey(11, 13);
console.log(obj);
let m = 2;
const c = encryption(m, obj.n, obj.pk);
console.log(m === decryption(c, obj.n, obj.sk));
