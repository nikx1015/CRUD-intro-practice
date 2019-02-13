const editEmployee = (id, employeeObject) => {
    return fetch(`http://localhost:8088/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(employeeObject)
    })
  }