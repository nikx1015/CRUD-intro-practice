
        const printDom = () => {
            document.querySelector("#employee-list").innerHTML = "";

            fetch("http://localhost:8088/employees", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
        .then(employees => employees.json())
        .then(allEmployeeInfo => {
            allEmployeeInfo.forEach(employeeInfo => {
                document.querySelector("#employee-list").innerHTML += `<div>
            <p>First Name: ${employeeInfo.firstName}</p>
            <p>Last Name: ${employeeInfo.lastName}</p>
            <p>Email: ${employeeInfo.email}</p>
            <p>Phone: ${employeeInfo.phone}</p>
            <p>Birthday: ${employeeInfo.birthday}</p>
            <p>Department: ${employeeInfo.department}</p>
            <p>Supervisor: ${employeeInfo.supervisor}</p>
            <p>Gender: ${employeeInfo.gender}</p>
            <button class="delete" id="delete-${employeeInfo.id}">Delete Employee</button>
            <button class="edit" id="edit-${employeeInfo.id}">Edit Employee</button>
            </div>
            `
            })
        })}

        printDom();
