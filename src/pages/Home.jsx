import { useEffect } from "react";
import Header from "../components/Header"
import Table from "../components/Table";
import { useDispatch,useSelector } from 'react-redux'
import setPerson from "../store/actions/personAction";

const Home = () => {
    document.title="Home";
    const dispatch = useDispatch();
    const person = useSelector((store)=>store.person);
    useEffect(()=>{
        dispatch(setPerson())
    },[])
    return (
        <>
            <Header />
            <div className="h-screen mx-10 px-5 border-x drop-shadow">
                <h1 className="pt-20 font-semibold text-2xl py-5">Semua Orang</h1>
                <Table users={person}/>
            </div>
        </>
    )
}

export default Home;