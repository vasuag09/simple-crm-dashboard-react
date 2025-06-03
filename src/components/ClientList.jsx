import { useContext, useState } from "react";
import { CrmContext } from "../store/crm-context";
import FormData from "./FormData";

export default function ClientList() {
  const { clients, addClient, deleteClient, editClient } =
    useContext(CrmContext);
  const [input, setInput] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  return (
    <div className="crm-dashboard">
      <h2>CRM Dashboard</h2>
      <button className="add-client-btn" onClick={() => setInput(true)}>
        Add New Client
      </button>
      {input && <FormData setInput={setInput} />}{" "}
      {clients.length === 0 ? (
        <p className="no-clients">No clients available</p>
      ) : (
        <ul className="client-list">
          {clients.map((client, index) => (
            <li key={client.id}>
              {client.name} ({client.email}) - {client.status} -{" "}
              {client.lastContactedDate}
              <button onClick={() => editClient({ status: "Inactive" }, index)}>
                Mark Inactive
              </button>
              <button onClick={() => deleteClient(index)}>Delete</button>
              <button onClick={() => setSelectedClient(client)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
      {selectedClient && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedClient.name}</h3>
            <p>Email: {selectedClient.email}</p>
            <p>Status: {selectedClient.status}</p>
            <p>Last Contacted: {selectedClient.lastContactedDate}</p>
            <button onClick={() => setSelectedClient(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
