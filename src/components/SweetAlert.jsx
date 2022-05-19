import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const afterSuccess = (message) =>{
    MySwal.fire({
        icon: 'success',
        title: 'Sukses',
        text: message,
        showConfirmButton: false,
        timer: 2000
    })
}

export const afterError = (message) =>{
    MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        showConfirmButton: false,
        timer: 2000
    })
}

export const promptDelete = () =>{
    return MySwal.fire({
        icon: "warning",
        title: "Are you sure?",
        text: "This action cannot be undone",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes',
        cancelButtonText: "Cancel"
     })
}