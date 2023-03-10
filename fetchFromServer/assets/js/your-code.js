export function getAllDogs() {
  // Your code here
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  // Your code here
  return fetch("/dogs/2");
}

export function postNewDog() {
  // Your code here
  // let url = "/dogs";
  // let header = {
  //   "Content-Type": "application/x-www-form-urlencoded"
  // };
  // let body = new URLSearchParams({name: 'dog', age: 32});
  // const options = {
  //   method: "POST",
  //   headers: header,
  //   body: body
  // }

  // return fetch(url, options);
  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({name: 'dog', age: 32})
  });
}

export function postNewDogV2(name, age) {
  // Your code here
  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({name, age})
  });
}

export function deleteDog(id) {
  // Your code here
  return fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: {
      "AUTH": "ckyut5wau0000jyv5bsrud90y"
    }
  })
}