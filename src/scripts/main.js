document.getElementById("add-btn").addEventListener("click", () => {

    const firstNameValue = document.getElementById("first-name").value
    const lastNameValue = document.getElementById("last-name").value
    const emailValue = document.getElementById("email").value
    const phoneValue = document.getElementById("phone").value
    const birthdayValue = document.getElementById("birthday").value
    const departmentValue = document.getElementById("department").value

    const objectToAdd = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        birthday: birthdayValue,
        department: departmentValue
    }

    fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectToAdd)
    }).then((response) => {
        fetch("http://localhost:8088/employees")
            .then(employees => employees.json())
            .then(allEmployeeInfo => {
                allEmployeeInfo.forEach(employeeInfo => {
                    document.getElementById("employee").innerHTML += `<div>
                <p>First Name: ${employeeInfo.firstName}</p>
                <p>Last Name: ${employeeInfo.lastName}</p>
                <p>Email: ${employeeInfo.email}</p>
                <p>Phone: ${employeeInfo.phone}</p>
                <p>Birthday: ${employeeInfo.birthday}</p>
                <p>Department: ${employeeInfo.department}</p>
                </div>
                `
                })
            })
    })
})