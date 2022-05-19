import { NavLink } from "react-router-dom";

const linkActive = "bg-slate-400 rounded px-2 py-2 mr-2"
const linkNotActive = "bg-amber-400 rounded px-2 py-2 mr-2"

const Header = () => {
    return (
        <div className="text-neutral-200 flex justify-between w-screen bg-slate-700 py-2 px-5 drop-shadow-lg absolute z-50">
        <h1 className="py-2">API test</h1>
        <ul className="flex">
            <li className="py-2"><NavLink to="/" className={({ isActive }) =>isActive ? linkActive : linkNotActive }>Semua Orang</NavLink></li>
            <li className="py-2"><NavLink to="/tambah" className={({ isActive }) =>isActive ? linkActive : linkNotActive }>Tambah Data</NavLink></li>
        </ul>
        </div>
    )
}

export default Header;