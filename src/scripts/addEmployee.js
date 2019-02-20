const addEmployee = () => {document.getElementById("add-btn").addEventListener("click", () => {

    const firstNameValue = document.getElementById("first-name").value
    const lastNameValue = document.getElementById("last-name").value
    const emailValue = document.getElementById("email").value
    const phoneValue = document.getElementById("phone").value
    const birthdayValue = document.getElementById("birthday").value
    const departmentValue = document.getElementById("department").value
    const supervisorValue = document.getElementById("supervisor").checked
    const genderValue = document.getElementById("gender").value

    const employeeObject = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        birthday: birthdayValue,
        department: departmentValue,
        supervisor: supervisorValue,
        gender: genderValue
}

postEmployee(employeeObject)
printDom(employeeObject)
})}