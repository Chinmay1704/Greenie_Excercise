import React from "react";
import "./regiForm.css";
// import UserTable from "./UserTable";

const AccountCreation = () => {
  const handleFormSubmission = (event) => {
    // event.preventDefault();
    const data = [
      {
        name: event.target[0].value,
        email: event.target[2].value,
        phone: event.target[3].value,
      },
    ];
    console.log(data[0]);
  };
  return (
    <div className="main container-fluid">
      <div className="form-cont container">
        <h1>User Addition Form</h1>

        <div className="container">
          <form onSubmit={handleFormSubmission}>
            <table>
              <tr>
                <td>
                  <label htmlFor="name">Username: </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Username"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="password">Password: </label>
                </td>
                <td>
                  <input
                    type="password"
                    name="pasword"
                    id=""
                    placeholder="Enter your password"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="Email">Email: </label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="phoneNumber">Phone Number: </label>
                </td>
                <td>
                  <input
                    type="number"
                    name="phone_no"
                    id=""
                    placeholder="Enter your phone no"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <button type="submit">Add User</button>
                </td>

                <td>
                  <button type="reset">Cancel</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountCreation;
