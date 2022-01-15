function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}


//Way 1 利用JSON
var args_JSON = '{"op": "+", "n1": 5, "n2": 10 }'; //JSON是一種字串
const argsWay1 = JSON.parse(args_JSON); //JSON轉換成物件

//Way 2 利用Class
class Args {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}
const argsWay2 = new Args('+', 10, 5)

console.log(calculate(argsWay1));
console.log(calculate(argsWay2));