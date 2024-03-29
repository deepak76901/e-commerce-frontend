export function fetchLoggedInUserOrders(userId) {
  return new Promise( async (resolve) =>{
            const response = await fetch("/orders/?users.id="+userId);
            const data = await response.json()
      resolve({data})
      }
  )
}

export function fetchLoggedInUser(userId) {
  return new Promise( async (resolve) =>{
            const response = await fetch("/users/" + userId);
            const data = await response.json()
      resolve({data})
      }
  )
}


export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "Content-type": "application/json" },
    });
    // TODO: on server it will only return relevant insformation of user
    const data = await response.json();
    resolve({ data });
  });
}