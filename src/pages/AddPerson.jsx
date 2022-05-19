import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const warning_icon = <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>

const AddPerson = () => {
    document.title="Tambah Orang";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => handlePost(data);

    const MySwalSuccess = (message)=>{
        MySwal.fire({
            icon: 'success',
            title: 'Sukses',
            text: message,
            showConfirmButton: false,
            timer: 2000
        })
    }

    const MySwalError = (message) => {
        MySwal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
            showConfirmButton: false,
            timer: 2000
        })
    }

    const handlePost = (data) => {
        fetch('https://flask-api-final-project.herokuapp.com/keys', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(response => { 
                    if(response.ok){
                        MySwalSuccess(`Sukses menambahkan data ${data.key}`);
                        reset({firstName:'',lastName:'',key:''});
                    }
                    if (response.status === 400) {  
                        MySwalError(`Key ${data.key} Sudah didaftarkan`);
                    }
                })
    }

    return (
        <>
        <Header />
        <div className="h-screen mx-10 px-5 border-x drop-shadow">        
            <div className="pt-20">
                <Link className="font-semibold text-l py-5" to="/">&larr; Back Home</Link>
                <h1 className="font-semibold text-2xl py-5 ml-2">Tambah Data Baru</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="table w-full">
                    <div className="table-row mb-2">
                        <p className="table-cell w-40">Key</p>
                        <input type="number" {...register("key", { required: true })} className="table-cell shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="key" ></input>
                        {errors.key?.type === 'required' && <small className="flex text-rose-700 mt-2">{warning_icon} Key is Required</small>}
                        <div className="mb-2"></div>
                    </div>
                    <div className="table-row mb-2">
                        <p className="table-cell w-10">First Name</p>
                        <input {...register("firstName", { required: true })} className="table-cell shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="FirstName" ></input>
                        {errors.key?.type === 'required' && <small className="flex text-rose-700 mt-2">{warning_icon} First Name is Required</small>}
                        <div className="mb-2"></div>
                    </div>
                    <div className="table-row pb-2">
                        <p className="table-cell w-10">Last Name</p>
                        <input {...register("lastName", { required: true })} className="table-cell shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="LastName" ></input>
                        {errors.key?.type === 'required' && <small className="flex text-rose-700 mt-2">{warning_icon} Last Name is Required</small>}
                        <div className="mb-2"></div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-amber-300 hover:bg-amber-700 text-white font-semibold py-1 px-2 w-32 rounded">Tambah</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddPerson;