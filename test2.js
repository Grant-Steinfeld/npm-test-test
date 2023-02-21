import promise from "@grant-steinfeld/npm-test";

const promise1 = promise.gitInfo("brendandburns");
const promise2 = promise.gitInfo("grant-steinfeld");

Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
});
