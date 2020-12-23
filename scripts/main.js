
document.addEventListener("DOMContentLoaded", () =>{

    const deleteBtns = document.querySelectorAll('.delete-btn')

    deleteBtns.forEach(btn =>{
        btn.addEventListener('click',e =>{
            e.currentTarget.parentElement.parentElement.remove()
        })
    })
}) 
