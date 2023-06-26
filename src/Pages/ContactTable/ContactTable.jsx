import React, { useState, useEffect } from "react";
import getContacts from "../../api/contactos.api";
import handleDeleteContact from "../../api/eliminarContacto.api";

export const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  console.log("Me traigo el token una vez que estoy logeado")
  const accessToken = sessionStorage.getItem("access-token");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        await getContacts(accessToken, setContacts);
      } catch (error) {
        console.log(error);
      }
    };

    if (accessToken) {
      fetchContacts();
    }
  }, [setContacts, accessToken]);

  return (
    <div
      id="profesionales"
      className="flex flex-col px-5 md:px-20 py-10 items-center h-screen w-screen text-white"
    >
      <div className="container max-w-3xl px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left uppercase bg-[#212224] border-b border-gray-200"
                    >
                      Contact
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left uppercase bg-[#212224] border-b border-gray-200"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left uppercase bg-[#212224] border-b border-gray-200"
                    >
                      Telephone
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left uppercase bg-[#212224] border-b border-gray-200"
                    >
                      Message
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left uppercase bg-[#212224] border-b border-gray-200"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td className="px-4 py-4 md:px-5 md:py-5 text-sm md:text-base bg-[#212224] border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block">
                              <span className="material-symbols-outlined">
                                account_circle
                              </span>
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold">
                              {contact.fullname}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-sm md:text-base bg-[#212224] border-b border-gray-200">
                        <p className="whitespace-no-wrap">{contact.email}</p>
                      </td>
                      <td className="px-4 py-5 text-sm md:text-base bg-[#212224] border-b border-gray-200">
                        <p className="whitespace-no-wrap">{contact.telephone}</p>
                      </td>
                      <td className="px-4 py-5 text-sm md:text-base bg-[#212224] border-b border-gray-200">
                        <p className="whitespace-no-wrap">{contact.message}</p>
                      </td>
                      <td className="px-4 py-5 text-sm md:text-base bg-[#212224] border-b border-gray-200">
                        <div className="flex-shrink-0">
                          <a href="#" className="relative block">
                            <span
                              className="material-symbols-outlined"
                              onClick={() => handleDeleteContact(accessToken, contact._id)}>
                              delete
                            </span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};