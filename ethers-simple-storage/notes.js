//

// rpc - remote procedure call: a connection to a blockchain node that someone is running
// url - uniform resource locator: connects us to make API calls and to interact with a blockchain node
// blockchain nodes run certain software and some of them expose an API call

// the abi tells our code what functions and properties a contract has. the alternative would be to use the bytecode
// which would be difficult.

// an environment variable is a variable in your scripting environment

// ethers.js is a toolkit that has wrappers that make api calls a lot simpler

// npm is a package manager
// yarn is also a package manager
// yarn.lock tells us the exact version of all the different versions of our project

// synchronous programming moves one line after the other
// asynchronous - you can have code running at the same time

// Synchronous
// 1. Put popcorn in microwave
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
// 1. Put popcorn in microwave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// Promise -> can be pending, filled or rejected

async function setupMovieNight() {
  await cookPopcorn();
  await pourDrinks();
  startMovie(); // only start movie once the above Promises have been fulfilled
}

function cookPopcorn() {
  return Promise();
}
