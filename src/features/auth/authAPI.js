export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users",{
      method:"POST",
      body: JSON.stringify(userData),
      headers:{"Content-type":"application/json"}
    });
    // TODO: on server it will only return relevant insformation of user
    const data = await response.json();
    resolve({data})
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/"+update.id,{
      method:"PATCH",
      body: JSON.stringify(update),
      headers:{"Content-type":"application/json"}
    });
    // TODO: on server it will only return relevant insformation of user
    const data = await response.json();
    resolve({data})
  });
}
  


export function checkUser(logInInfo) {
  return new Promise(async (resolve,reject) => {
    const email = logInInfo.email
    const password = logInInfo.password
    const response = await fetch("http://localhost:8080/users?email="+ email);
    // TODO: on server it will only return relevant insformation of user
    const data = await response.json();
    console.log({data})
    
    if(data.length){
      if(password===data[0].password){
        resolve({data:data[0]})
      }else{
        reject({message:"wrong credentials"})
      }
    }else{
      reject({message:"user not found"})
    }
    resolve({data})
  });
}
  