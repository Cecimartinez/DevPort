export const formContact = async (token,contact) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("jwt",token);

  const raw = JSON.stringify({
    "contact": {
      "fullname": contact.fullname,
      "email": contact.email,
      "telephone": contact.telephone,
      "message": contact.message
    }
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch("http://localhost:8080/api/contactos", requestOptions);
  const jsonData = await response.text();

  return {
    status: response.status,
    data: jsonData
  };
};
