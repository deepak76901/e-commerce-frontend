export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart",{
      method:"POST",
      body: JSON.stringify(item),
      headers:{"Content-type":"application/json"}
    });
    // TODO: on server it will only return relevant insformation of user
    const data = await response.json();
    resolve({data})
  });
}



export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart?user="+userId);
    const data = await response.json();
    resolve({data})
  });
}