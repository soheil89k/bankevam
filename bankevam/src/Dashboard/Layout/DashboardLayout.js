import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

class DashboardLayout extends React.Component{

    render(){
        return (
            <div>
                <DashboardHeader/>
                <DashboardSidebar/>
            </div>
        )
    }
}
export default DashboardLayout