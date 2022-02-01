const Shamir = require('./sss.js');
const sss = new Shamir();

const S = 123456789; // secret
const N = 4; // parts to divide secret into
const K = N / 2; // subset of parts sufficient to recover secret
const P = 2 ** 127 - 1; // 12th Mersenne Prime; P>S>N

// forming the polynomial of degree (K-1):
let coeff = [S];
for (x = 0; x < K - 1; x++) {
    coeff.push(
        Math.floor(Math.random() * (10000)) // random coefficients
    );
}

var result = sss.lagrange_optimized(sss.generate_shares(K, P, coeff));
console.log(result);