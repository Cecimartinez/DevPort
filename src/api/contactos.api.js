const getContacts = async (setContacts) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "jwt",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk2Njc0MTc2ZmEzMmQyYmFlYzIzYzEiLCJuYW1lIjoiRmVybmFuZG8gSm9zw6kiLCJsYXN0bmFtZSI6IkxvbmdpbiIsImVtYWlsIjoiZmVybG9uZ2luQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkWXk3b0ZpLjQwZlNxUHNPN2N1bU41T1RuZ280VkxkWnlBZFd3RTdXTWZBOTlvb0dBdFhxMVMiLCJfX3YiOjAsImlhdCI6MTY4NzYzMzMyNSwiZXhwIjoxNjg3NzE5NzI1fQ.P4jGgO6KAE1U17_UIKxy7ZETTHy2PbmtXUMYIyDHm7I"
    );
    myHeaders.append("Content-Type", "application/json");

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
