import React, {useState} from "react";
import UserDetails from "./main";
import AccountCreation from "./regiForm";
import "./dashboard.css"
import users from "./UserTable"


const Dashboard = () =>{
    const [activeTab, setActiveTab] = useState('UserDetails');

    

    return(
        <div>
            <div className="head container">
                <h1>Greenie</h1>

                <span>User Management Dashboard</span>
            </div>
            <div className="tabs">
                <button onClick={()=> setActiveTab('UserDetails')}>User Details</button>
                <button onClick={()=> setActiveTab('AccountCreation')}>Account Creation</button>
                <input type="text" placeholder="Search here"/>
            </div>

            {activeTab === 'UserDetails' ? <UserDetails /> : <AccountCreation />}
        </div>
    );
}

export default Dashboard;