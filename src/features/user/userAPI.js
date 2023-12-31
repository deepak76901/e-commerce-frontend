export function fetchLoggedInUserOrders(userId) {
  return new Promise( async (resolve) =>{
            const response = await fetch("http://localhost:8080/orders/?users.id="+userId);
            const data = await response.json()
      resolve({data})
      }
  )
}

export function fetchLoggedInUser(userId) {
  return new Promise( async (resolve) =>{
            const response = await fetch("http://localhost:8080/users/");
            const data = await response.json()
      resolve({data})
      }
  )
}


export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "Content-type": "application/json" },
    });
    // TODO: on server it will only return relevant insformation of user
    const data = await response.json();
    resolve({ data });
  });
}