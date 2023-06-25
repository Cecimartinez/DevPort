import { useEffect, useState } from 'react';
import { Container, Card } from '@mui/material';
import getContacts from '../api/contactos.api';

export default function Contactos() {

    const [contacts, setContacts] = useState([]);
    console.log("Me traigo el token una vez que estoy logeado")
    const accessToken = sessionStorage.getItem('access-token')
       
    useEffect(() => {
        console.log("Pido la lista de contactos con mi token de sesion")
        getContacts(accessToken,setContacts);
    }, [setContacts,accessToken]);

    return (
        <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
            {contacts.map((contact,index) => {
                return (
                    <Card>
                        <p>{contact.descripcion}</p>
                    </Card>
                )
            })}
        </Container>
    )
}