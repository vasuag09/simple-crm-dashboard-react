// FormData.js (updated)
import { useContext, useState } from "react";
import { CrmContext } from "../store/crm-context";

export default function FormData({ setInput }) {
  const { addClient } = useContext(CrmContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Active",
    lastContactedDate: new Date().toISOString().split("T")[0],
  });

  function handleChange(e) {
    setFormData((prevFormValue) => ({
      ...prevFormValue,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newClient = {
      id: String(Date.now()),
      ...formData,
    };
    addClient(newClient);
    setFormData({
      name: "",
      email: "",
      status: "Active",
      lastContactedDate: new Date().toISOString().split("T")[0],
    });
    setInput(false); // Close the form
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>Add New Client</h3>
      <div className="form-group">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Status: </label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="form-group">
        <label>Last Contacted: </label>
        <input
          type="date"
          name="lastContactedDate"
          value={formData.lastContactedDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-buttons">
        <button type="submit">Add Client</button>
        <button type="button" onClick={() => setInput(false)}>Cancel</button>
      </div>
    </form>
  );
}