const getContacts = async (token,setContacts) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("jwt",token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      mode: "cors",
    };

    const response = await fetch(
      "http://localhost:8080/api/contactos",
      requestOptions
    );
    const jsonData = await response.json();
    setContacts(jsonData);
    console.log(jsonData);
  } catch (error) {
    throw new Error("Failed to fetch contacts");
  }
};

export default getContacts;
