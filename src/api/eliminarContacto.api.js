//const eliminarContacto => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("jwt", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk2Njc0MTc2ZmEzMmQyYmFlYzIzYzEiLCJuYW1lIjoiRmVybmFuZG8gSm9zw6kiLCJsYXN0bmFtZSI6IkxvbmdpbiIsImVtYWlsIjoiZmVybG9uZ2luQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkWXk3b0ZpLjQwZlNxUHNPN2N1bU41T1RuZ280VkxkWnlBZFd3RTdXTWZBOTlvb0dBdFhxMVMiLCJfX3YiOjAsImlhdCI6MTY4NzYzMzMyNSwiZXhwIjoxNjg3NzE5NzI1fQ.P4jGgO6KAE1U17_UIKxy7ZETTHy2PbmtXUMYIyDHm7I");


    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/contactos/649745b4203b1d46d46e44f1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    } catch (error) {
      throw new Error("Failed to fetch contacts");
    }
//}
// export default eliminarContacto;