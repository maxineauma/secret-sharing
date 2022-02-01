class Shamir {

    solve_polynomial(P, x, coeff) {

        let y = 0;
        for (let [i, v] of coeff.entries()) {
            y += x ** i * v;
        }
        return y % P;

    }

    generate_shares(K, P, coeff) {

        let shares = [];
        for (let x = 1; x < K + 1; x++) {
            shares.push([
                x, this.solve_polynomial(P, x, coeff)
            ]);
        }

        return shares;

    }

    lagrange_optimized(shares) {

        let sums = 0;

        for (let j = 0; j < shares.length; j++) {

            let products = 1;
            for (let m = 0; m < shares.length; m++) {
                if (m != j)
                    products *= (shares[m][0]) / (shares[m][0] - shares[j][0]);
            }

            products *= shares[j][1];
            sums += products;

        }

        return sums;

    }

}

module.exports = Shamir;