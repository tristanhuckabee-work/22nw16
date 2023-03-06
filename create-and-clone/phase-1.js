function stretch() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  })
  p.then(() => console.log('done stretching'));
  return p;
}

function runOnTreadmill() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 500);
  })
  p.then(() => console.log('done running on the treadmill'));
  return p;
}

function liftWeights() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  })
  p.then(() => console.log('done lifting weights'));
  return p;
}

function workout() {
  stretch()
  .then(runOnTreadmill)
  .then(liftWeights)
  .then(() => console.log('done working out'));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out