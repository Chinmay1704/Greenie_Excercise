import React, {useState} from "react";
import UserTable from "./UserTable";
import UserReportModel from "./model";


const UserDetails = () =>{
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user)
    };

    return (
        <div>
          <UserTable onUserClick={handleUserClick} />
          {selectedUser && <UserReportModel user={selectedUser} onClose={() => setSelectedUser(null)} />}
        </div>
      );
}

export default UserDetails;