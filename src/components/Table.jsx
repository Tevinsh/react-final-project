import { useDispatch } from "react-redux";
import setPerson from "../store/actions/personAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { afterError, afterSuccess, promptDelete } from "./SweetAlert";

const Table = () => {
    const person = useSelector((state)=>state.person)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dummyKota = ['Jakarta','Bandung','Surabaya','Medan','Aceh','Palembang']

    const handleDelete = (event) => {
         promptDelete().then((action)=>{
             if(action.isConfirmed){
                fetch(`https://flask-api-final-project.herokuapp.com/keys/${event.target.value}`, {
                    method: "DELETE"
                    }).then(response => response.ok ? (afterSuccess(`berhasil menghapus data key ${event.target.value}`),dispatch(setPerson())):afterError("error while deleting"));
             }
         })
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-10">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Asal Kota
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        person.map((user)=>{
                                return (
                                    <tr key={user.key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {user.key}
                                        </th>
                                        <td className="px-6 py-4">
                                            {user.firstName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.lastName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {Math.floor(Math.random() * (60 - 20 + 1) + 20)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dummyKota[Math.floor(Math.random() * dummyKota.length)]}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                        <div className="flex">
                                            <button onClick={()=>navigate("/edit/"+user.key)} className="bg-amber-300 hover:bg-amber-700 text-white font-semibold py-2 px-1 w-32 rounded ml-2">Edit</button>
                                            <button onClick={handleDelete} className="bg-amber-300 hover:bg-amber-700 text-white font-semibold py-2 px-1 w-32 rounded ml-2" value={user.key}>Delete</button>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                </tbody>

            </table>
        </div>
    )
}

export default Table;