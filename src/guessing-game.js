class GuessingGame {
    constructor() {
        let min;
        let max;
        let mid;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = Math.round((this.min + this.max) / 2);
        return this.mid;
    }

    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;
    }
}

module.exports = GuessingGame;


// function test(mi, ma, num) {
//     let max = ma;
//     let min = mi;
//     let mid;

//     if (num > max || num < min) {
//         console.log('some truble');
//         return 'some truble'
//     }

//     while (min <= max) {
//         mid = Math.round((min + max) / 2);

//         if (num === max) {
//             console.log(max);
//             return max;
//         }

//         if (num === min) {
//             console.log(min);
//             return min;
//         }

//         if (num === mid) {
//             console.log(mid);
//             return mid;
//         } else if (num < mid) {
//             max = mid - 1;
//         } else {
//             min = mid + 1;
//         }

//     }

// }

// test(45, 4355, 645)
// test(345, 1030, 999)
// test(23, 234, 231)
// test(3, 3453, 435)
// test(5, 8665, 7654)


// function mid(a, b) {
//     console.log(Math.round((b - a) / 2) + a, 'not');
//     console.log(Math.round((a + b) / 2), 'my');
// }

// mid(10, 100);
// mid(50, 100);
// mid(65, 99);
// mid(12, 54);
// mid(1, 45);
// mid(0, 98);


// class Guessing {
//     constructor() {
//         let min;
//         let max;
//         let mid;
//     }

//     setRange(min, max) {
//         this.min = min;
//         this.max = max;
//         console.log(this.min, this.max);
//     }

//     guess() {
//         this.mid = Math.round((this.min + this.max) / 2);
//         console.log(this.mid);
//         return this.mid;
//     }

//     lower() {
//         console.log('lower');
//         this.max = this.mid;
//     }

//     greater() {
//         console.log('greater');
//         this.min = this.mid;
//     }
// }

// const number = 998;
// const game = new Guessing();
// game.setRange(0, 6118)

// let result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
