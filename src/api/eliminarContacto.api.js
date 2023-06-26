const handleDeleteContact = async (token,contactId) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("jwt",token);
    
    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

   const response = await fetch(`http://localhost:8080/api/contactos/${contactId}`, requestOptions);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default handleDeleteContact;
