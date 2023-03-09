/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */
fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
});
/* ============================== Phase 2 ============================== */
fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
})
.then(res => {
  console.log(res.status);
  console.log(res.headers.get("Content-Type"));
  console.log(res.url);
});
/* ============================== Phase 3 ============================== */
fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
  })
})
.then(res => {
  console.log(res.status);
  console.log(res.headers.get("Content-Type"));
  console.log(res.url);
});