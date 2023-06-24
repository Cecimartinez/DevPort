export const login = async (email, password) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");

  const raw = JSON.stringify({
    "email": email,
    "password": password
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode: "cors"
  };

  const response = await fetch("http://localhost:8080/api/usuarios/login", requestOptions)
  const jsonData = await response.json();

  return jsonData;
}