import React from "react";
import "./model.css";

const UserReportModel = ({ user, onClose }) => {
  return (
    <div className="bg-cont container-fluid">
      <div className="model">
        <h2>{user.username}</h2>

        <table>
          <thead></thead>

          <tbody>
            <tr>
              <td>Username: </td>
              <td>{user.username}</td>
            </tr>

            <tr>
              <td>ID: </td>
              <td>{user.id}</td>
            </tr>

            <tr>
              <td>Email: </td>
              <td>{user.email}</td>
            </tr>

            <tr>
              <td>Phone Number: </td>
              <td>{user.phone}</td>
            </tr>

            <tr>
              <td>Date of Creation</td>
              <td>{user.creationDate}</td>
            </tr>

            <tr>
              <td colSpan={2}>
                <button onClick={onClose}>Close</button>
              </td>
            </tr>
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default UserReportModel;
