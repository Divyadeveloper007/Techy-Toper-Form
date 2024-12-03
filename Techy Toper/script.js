document.getElementById('form').addEventListener('submit',function (e) {
  e.preventDefault();

  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const roll = document.getElementById('roll').value;
  const age = document.getElementById('age').value;
  const dep = document.getElementById('dep').value;
  const collageName = document.getElementById('cname').value;
  const address = document.getElementById('add').value;

  if(!fname || !lname || !roll || !age || !dep || !collageName || !address ){
    alert('Please filled in all field')
    return
  }

  const student = {fname, lname, roll, age, dep, collageName, address};

  saveStudent(student);

  displayStudent();

  document.getElementById('form').reset();
  
})



function saveStudent(student){
  let students = JSON.parse(localStorage.getItem('students')) || [];

  students.push(student);

  localStorage.setItem('students', JSON.stringify(students));

  
}


// display in list

// function displayStudent(){
//   let students = JSON.parse(localStorage.getItem('students')) || [];
//   let studentList = document.querySelector('#studentData ul');
//   studentList.innerHTML = '';
  
//   students.forEach((student, index)=>{
//     let li = document.createElement("li");
//     li.innerHTML = `
//               ${student.fname}  ${student.lname}  ${student.roll}  ${student.age}
//                ${student.dep}  ${student.collageName}  ${student.address}
//                <button onclick="editStudent(${index})">Edit</button>
//                 <button onclick="deleteStudent(${index})">Delete</button>
//                 `;
//               studentList.appendChild(li)
//   })

// }



// display in table

function displayStudent(){
  let students = JSON.parse(localStorage.getItem('students')) || [];
  let studentList = document.querySelector('#studentData table tbody');
  studentList.innerHTML = '';
  
  students.forEach((student, index)=>{
    let row = document.createElement("tr");
    row.innerHTML = `
                <td>  ${student.fname} </td>
                <td>  ${student.lname} </td>
                <td>  ${student.roll} </td>
                <td>  ${student.age} </td>
                <td>  ${student.dep} </td>
                <td>  ${student.collageName} </td>
                <td>  ${student.address} </td>
            
                <td>
                   <button onclick="editStudent(${index})">Edit</button>
                  <button onclick="deleteStudent(${index})">Delete</button>
                </td>
              
                `;
              studentList.appendChild(row)
  })

}



function deleteStudent(index){
  let students = JSON.parse(localStorage.getItem('students')) || [];
  students.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(students));

  displayStudent();
}


function editStudent(index){
  let students = JSON.parse(localStorage.getItem('students'));
  student = students[index];

  document.getElementById('fname').value = student.fname;
  document.getElementById('lname').value = student.lname;
  document.getElementById('roll').value = student.roll;
  document.getElementById('age').value = student.age;
  document.getElementById('dep').value = student.dep;
  document.getElementById('cname').value = student.collageName;
  document.getElementById('add').value = student.address;

  deleteStudent(index);
}

displayStudent();