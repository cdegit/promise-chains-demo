// Calculate some prime numbers to simulate an expensive operation
// Code shamelessly stolen from https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Intensive_JavaScript
const longOperation = () => {
    const iterations = 50;
    const multiplier = 1000000000;
    var primes = [];
    for (var i = 0; i < iterations; i++) {
        var candidate = i * (multiplier * Math.random());
        var isPrime = true;
        for (var c = 2; c <= Math.sqrt(candidate); ++c) {
            if (candidate % c === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(candidate);
        }
    }
    return primes;
};

const fakeAPICall = () => fetch('/api/delay');

// Example 1: First, let's look at an individual task
// longOperation();

// Example 1a: Let's try separating that task out
// setTimeout(longOperation);

// Example 2: Let's add some more work to this task
// const sync = () => {
//     longOperation();
//     longOperation();
//     longOperation();
//     longOperation();
// };
// setTimeout(sync);

// Example 3: What if we executed this task after some async action?
// setTimeout(() => {
//     fakeAPICall()
//         .then(longOperation);
// });

// Example 4: What if we chained a bunch of tasks after that async action?
// setTimeout(() => {
//     fakeAPICall()
//         .then(longOperation);
//         .then(longOperation);
//         .then(longOperation);
//         .then(longOperation);
// });

// Example 5: Let's add another async step back in
// setTimeout(() => {
//     fakeAPICall()
//         .then(longOperation);
//         .then(fakeAPICall);
//         .then(longOperation);
// })
