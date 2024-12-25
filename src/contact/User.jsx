import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import "./user.css";

const User = () => {
  const { users, deleteUser, updateUser } = useContext(UserContext);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: "", age: "", email: "" });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(users[index]);
  };

  const handleSave = () => {
    updateUser(editIndex, editData);
    setEditIndex(null);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {users.map((user, index) => (
        <div className="card" key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="age"
                value={editData.age}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
              />
              <button className="edit" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <img src="/path/to/profile-pic.png" alt="Profile" />
              <h3>{user.name}</h3>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <button className="delete" onClick={() => deleteUser(index)}>
                Delete
              </button>
              <button className="edit" onClick={() => handleEdit(index)}>
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default User;
