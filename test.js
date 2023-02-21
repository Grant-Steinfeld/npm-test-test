import promise from "@grant-steinfeld/npm-test";

promise
  .gitInfo("grant-steinfeld")
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.error(msg);
  });
