// Vamos brincar com o teste de primalidade e a conjectura de Goldbach!!
export class testePrimalidade {
    constructor (
        private m: number [], // Divisores
        private n: number, // Primos
    ) {};

    private obtainPrimalidade (num: number): boolean {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    };

    public validatingPrimalidade(listadeValores: number []) {
        let limit = Math.sqrt(this.n);
        this.m = [];
        for (let value of listadeValores) {
            if (value >= 2 && value <= limit && this.obtainPrimalidade(value)) {
                this.m.push(value);
                console.log(this.m);
            };
        }

        if (this.obtainPrimalidade(this.n)) {
            console.log(this.m);
            return this.m;
        };

    };
    
    public conjecturaGoldbach (): number [] {
        // A Conjectura de Goldbach é uma afirmação matemática que diz que todo número par maior que 2 pode ser representado como a soma de dois números primos.
        if (!this.m || !this.n) return [];
        const addPrime = this.m.map((value) => value + value);
        return addPrime;
    }

}

const callClass = new testePrimalidade([], 400);
callClass.validatingPrimalidade([2, 3, 4, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
// Podemos utilizar qualquer outra lista. Somente primos vão ser analisados e, posteriormente somados!!
console.log(callClass.conjecturaGoldbach());
export default 1; 