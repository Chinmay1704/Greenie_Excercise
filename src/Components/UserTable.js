import React from "react";
import "./UserTable.css";

var users = [
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
    id: 5,
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
  let result = [];
  let data = document.querySelector('#search').value;
  function printValues() {
    users.forEach((ele) => {
      if (
        ele.username.toLowerCase() ===
        data.toLowerCase()
      ) {
        result.push(ele);
      }
      data = ""
    });
    return result;
  }

  console.log(printValues());

  return (
    <div className="main container-fluid">
      <div className="block container">
        <div className="header">
          <h1>User Details</h1>

          <div className="left container">
            <input 
            value={"."}
              id="search"
              type="text"
              placeholder="Search UserName here."
            />
            <button onClick={printValues}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.7em"
                viewBox="0 0 512 500"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>
        </div>
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
              {result.length > 1
                ? result.map((user) => (
                    <tr key={user.id} onClick={() => onUserClick(user)}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.creationDate}</td>
                    </tr>
                  ))
                : users.map((user) => (
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
