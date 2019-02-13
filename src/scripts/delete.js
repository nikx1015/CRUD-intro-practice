const deleteEmployee = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`, {
        method: "DELETE",
}
    )}

    document.querySelector("#employee-list").addEventListener("click", () => {
        if(event.target.classList.contains("delete")){
        const id = event.target.id.split("-")[1]
        deleteEmployee(id)
        .then(() => {
            printDom()
        })
    }
    })
