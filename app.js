var employee = {
name : "Ramesh",
age : 50,
salary : "50000",
address : {city: "Bangalore", state: "Karnataka", pincode: "560041"}, //address is an object within the object employee i.e, nested object
};
document.getElementById("details").innerHTML= "Name: "+employee.name+"<br>Age: "+employee.age+"<br>Salary: "+employee.salary+"<br>Address: "+employee.address.city+", "+employee.address.state+", "+employee.address.pincode;