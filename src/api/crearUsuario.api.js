export const crearUsuario = async ({ name, lastname, email, password }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      name: name,
      lastname: lastname,
      email: email,
      password: password
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    const response = await fetch("http://localhost:8080/api/usuarios", requestOptions);
    const jsonData = await response.text();
  
    return {
      status: response.status,
      data: jsonData
    };
  };
  
  export default crearUsuario;
  