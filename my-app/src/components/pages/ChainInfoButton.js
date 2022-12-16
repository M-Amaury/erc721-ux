import { Link, Outlet } from "react-router-dom"; 

const ConnectionInfoButton = () => {
    return (
    <>
        <nav>
            <ul>
            <li>
                <Link to="/chain-Info">Connection / Chain info</Link>
            </li>
            </ul>
        </nav>
    <Outlet />
    </>

    )
}; 
export default ConnectionInfoButton; 