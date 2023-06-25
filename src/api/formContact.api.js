export const formContact = async (contact) => {
  console.log(contact);
  console.log(contact.fullname);

  const myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");

  const raw = JSON.stringify({
    contact: {
      fullname: contact.fullname,
      email: contact.email,
      telephone: contact.telephone,
      message: contact.message,
    },
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode: "cors",
  };

  const response = await fetch("http://localhost:8080/api/contactos", requestOptions);
  const jsonData = await response.json();
  console.log(jsonData);
  console.log(jsonData.errors);


  return jsonData;
};
