import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { afterError, afterSuccess } from "../components/SweetAlert";


const warning_icon = <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>

const EditPerson = () => {
    let {key} = useParams();
    document.title=`Ubah data untuk Key ${key}`;
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`https://flask-api-final-project.herokuapp.com/keys/${key}`)
        .then(result => result.json())
        .then(data=>{
            setValue("firstName", data.firstName)
            setValue("lastName", data.lastName)
              })
    },[])
    const { register, 
        handleSubmit, 
        setValue,
        formState: { errors } 
    } = useForm();
    const onSubmit = data => handleEdit(data);

    const handleEdit = (data) => {
        fetch(`https://flask-api-final-project.herokuapp.com/keys/${key}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(res => res.ok? (afterSuccess('Anda Berhasil Mengubah data dari id '+ key),navigate('/',{replace:true})) :afterError('Data tidak diubah'))
    }
    return (
        <>
        <Header />
        <div className="h-screen mx-10 px-5 border-x drop-shadow">
                <div className="pt-20">
                    <Link className="font-semibold text-l py-5" to="/">&larr; Back Home</Link>
                    <h1 className="font-semibold text-2xl py-5">Edit Data untuk key {key}</h1>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="table w-full">
                        <div className="table-row">
                            <p className="table-cell w-40">First Name</p>
                            <input {...register("firstName", { required: true })} className="table-cell shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" placeholder="FirstName"></input>
                            {errors.firstName?.type === 'required' && <small className="flex text-rose-700 mt-2">{warning_icon} First Name is Required</small>}
                        </div>
                        <div className="table-row">
                            <p className="table-cell w-40">Last Name</p>
                            <input {...register("lastName",{ required: true })} className="table-cell shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" placeholder="LastName"></input>
                            {errors.lastName?.type === 'required' && <small className="flex text-rose-700 mt-2">{warning_icon} Last Name is Required</small>}
                        </div>
                    </div>        
                    <div className="flex justify-end">
                        <button type="submit" className="bg-amber-300 hover:bg-amber-700 text-white font-semibold py-2 px-2 w-32 rounded">Edit</button>
                    </div>
                </form>
        </div>
        </>
    )
}

export default EditPerson;