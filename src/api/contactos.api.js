const getContacts = async (token,setContacts) => {

    var myHeaders = new Headers();
    myHeaders.append("jwt",token);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode:'cors'
    };

    let response = await fetch("http://localhost:8080/api/contactos", requestOptions);
    let jsonData = await response.json();
    setContacts(jsonData);
    console.log(jsonData)
}

export default getContacts;