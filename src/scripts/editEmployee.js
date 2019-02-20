const editEmployee = (id, employeeObject) => {
    return fetch(`http://localhost:8088/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(employeeObject)
    })
  }

  document.querySelector("#employee-list").addEventListener("click", () => {
    if(event.target.classList.contains("edit")){
    const id = event.target.id.split("-")[1]


      const buildEditForm = employeeInfo =>
 `<div>
 <label for="hrInfo">First Name</label>
      <input type="text" name="firstName" id="first-name" value=${employeeInfo.firstName}>
      <label for="hrInfo">Last Name</label>
      <input type="text" name="lastName" id="last-name" value=${employeeInfo.lastName}>
      <label for="hrInfo">Email</label>
      <input type="text" name="email" id="email" value=${employeeInfo.email}>
      <label for="hrInfo">Phone</label>
      <input type="text" name="phone" id="phone" value=${employeeInfo.phone}>
      <label for="hrInfo">Birthday</label>
      <input type="date" name="dob" id="birthday" value=${employeeInfo.birthday}>
      <label for="hrInfo">Department</label>
      <input type="text" name="dept" id="department" value=${employeeInfo.department}>
      <label for="hrInfo">Supervisor</label>
      <input type="checkbox" name="supervisor" id="supervisor" value=${employeeInfo.supervisor}>
      <label for="hrInfo">Gender</label>
      <select name="gender" id="gender" value=${employeeInfo.gender}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      </select>

  <button class="save-edit-btn" id="save-edit-${employeeInfo.id}">Save</button>`

    saveEmployee(id)
    .then(() => {
        printDom()
    })
}})
