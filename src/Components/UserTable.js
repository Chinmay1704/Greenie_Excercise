import React from "react";
import "./UserTable.css";

export var users = [
  {
    id: 1,
    username: "JohnDoe",
    email: "john@example.com",
    phone: "123-456-7890",
    creationDate: "2023-01-01",
  },
  {
    id: 2,
    username: "ABC",
    email: "john@example.com",
    phone: "123-456-7890",
    creationDate: "2023-01-02",
  },
  {
    id: 3,
    username: "CDE",
    email: "john@example.com",
    phone: "123-456-7890",
    creationDate: "2023-01-03",
  },
  {
    id: 4,
    username: "FGH",
    email: "john@example.com",
    phone: "123-456-7890",
    creationDate: "2023-01-05",
  },
];

const UserTable = ({ onUserClick }) => {
  return (
    <div className="main container-fluid">
      <div className="block container">
        <h1>User Details</h1>
        <div className="blk">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Creation Date</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} onClick={() => onUserClick(user)}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.creationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
