function calcAggregates(arr) {
    arr = arr.map(Number);

    function reduce(arr, func) {
        let result = arr[0];

        for (let i of arr.slice(1)) {
            result = func(result, i);
        }
        return result;
    }

    let sum = reduce(arr, (a, b) => a + b);
    let min = reduce(arr, (a, b) => Math.min(a, b));
    let max = reduce(arr, (a, b) => Math.max(a, b));
    let product = reduce(arr, (a, b) => a * b);
    let join = reduce(arr, (a, b) => String(a) + b);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}


calcAggregates(["2", "3", "10", "5"]);