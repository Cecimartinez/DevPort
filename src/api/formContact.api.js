export const formContact = async (email, fullname, telephone,message) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");

  const raw = JSON.stringify({
    "fullname": fullname,
    "email": email,
    "telephone": telephone,
    "message": message
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode: "cors"
  };

  const response = await fetch("http://localhost:8080/api/contactos", requestOptions)
  const jsonData = await response.json();

  return jsonData;
}