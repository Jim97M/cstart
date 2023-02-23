import { Outlet } from "react-router-dom"

const LayoutPage = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    )
}

export default LayoutPage;
