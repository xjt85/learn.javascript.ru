function fact(n) {
    if (n > 1) {
        return n * fact(n - 1);
    } else {
        return n;
    };
}

console.log(fact(3));