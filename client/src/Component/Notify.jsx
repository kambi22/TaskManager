import Swal from 'sweetalert2';
export const Notify = (icon, title, text) => {
    Swal.fire({
        icon:icon,
        title:title,
        text:text,
        showConfirmButton:false
    })
}