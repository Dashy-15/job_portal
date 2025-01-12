import classes from "./Sidebar.module.css"
import Button from "../UI/Button";
import logo from "../../Assets/logo/Vasitum Logo (1) 1.svg";
import { useState } from "react";
import { ReactComponent as DashboardIcon } from "../../Assets/mainmenu/ic_dashboard.svg";
import { ReactComponent as RecruitmentIcon } from "../../Assets/mainmenu/ic_recruitment.svg";
import { ReactComponent as ScheduleIcon } from "../../Assets/mainmenu/ic_calendar.svg";
import { ReactComponent as EmployeeIcon } from "../../Assets/mainmenu/ic_employee.svg";
import { ReactComponent as DepartmentIcon } from "../../Assets/mainmenu/ic_department.svg";
import { ReactComponent as SettingsIcon } from "../../Assets/other/ic_settings.svg";
import { ReactComponent as SupportIcon } from "../../Assets/other/ic_support.svg";

const Sidebar = (props) => {
    const [activeTab, setActiveTab] = useState("Dashboard");

    const dashboardHandler = () => {
        setActiveTab("Dashboard");
    }

    return (
        <div className={classes.sidebar}>
            <header className={classes['main-logo']}>
                <img src={logo} alt="Vasitum Logo" />
            </header>
            <nav className={classes.menu}>
                <div className={classes['menu-section']}>
                    <h2>MAIN MENU</h2>
                    <ul>
                        <li>
                            <Button onClick={dashboardHandler} isActive={activeTab === "Dashboard"} label="Dashboard" icon={DashboardIcon} />
                        </li>
                        <li>
                            <Button onClick={() => setActiveTab('Recruitment')} isActive={activeTab === 'Recruitment'} label='Recruitment' icon={RecruitmentIcon} />
                        </li>
                        <li>
                            <Button onClick={() => setActiveTab('Schedule')} isActive={activeTab === "Schedule"} label="Schedule" icon={ScheduleIcon} />
                        </li>
                        <li>
                            <Button onClick={() => setActiveTab('Employee')} isActive={activeTab === "Employee"} label="Employee" icon={EmployeeIcon} />
                        </li>
                        <li>
                            <Button onClick={() => setActiveTab('Department')} isActive={activeTab === "Department"} label="Department" icon={DepartmentIcon} />
                        </li>
                    </ul>
                </div>

                <div className={classes['menu-section']}>
                    <h2>OTHER</h2>
                    <div className={classes.other}>
                        <Button onClick={() => setActiveTab('Support')} isActive={activeTab === "Support"} label="Support" icon={SupportIcon} />
                        <Button onClick={() => setActiveTab('Settings')} isActive={activeTab === "Settings"} label="Settings" icon={SettingsIcon} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;