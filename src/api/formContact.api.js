export const formContact = async (contact) => {
  const myHeaders = new Headers();
  myHeaders.append("jwt", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk2Njc0MTc2ZmEzMmQyYmFlYzIzYzEiLCJuYW1lIjoiRmVybmFuZG8gSm9zw6kiLCJsYXN0bmFtZSI6IkxvbmdpbiIsImVtYWlsIjoiZmVybG9uZ2luQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkWXk3b0ZpLjQwZlNxUHNPN2N1bU41T1RuZ280VkxkWnlBZFd3RTdXTWZBOTlvb0dBdFhxMVMiLCJfX3YiOjAsImlhdCI6MTY4NzcyMDAzNywiZXhwIjoxNjg3ODA2NDM3fQ.oWyWLLrkerrO-cKhtrRrqc4bzFHg3Pxm6sZ-aMMbeNM");
  myHeaders.append("Content-Type", "application/json");

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
