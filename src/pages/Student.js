import React from "react";
import axios from "axios";
import { Table, Button, Input } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaEdit,
  FaTrashAlt,
  FaWindowClose,
} from "react-icons/fa";
export default function Student() {
  let intialData = {
    name: "",
    email: "",
    phoneno: "",
    course: "",
    teacher: "",
  };

  let sadata = [
    {
      rollno: 1,
      name: "anan",
      email: "anan@gnn.com",
      phoneno: "468465",
      course: "sdcs",
      teacher: "fvklm",
    }
  ];

  const [id, setId] = useState(0);
  const [students, setStudents] = useState(sadata); //for getting whole data from api
  const [isEdit, setIsEdit] = useState(false); //for edit
  const [isAdd, setIsAdd] = useState(false); //for adding new data
  const [studentData, setStudentData] = useState({}); //sending the edited or added data
  const [refresh, setRefresh] = useState(true);
  const [dropdownValues, setDropdownValues] = useState([]);//teacher option

  const getAllStudents= ()=>{
    fetch("https://62c5beaca361f725128d5b27.mockapi.io/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
      console.log("students from fetch",students);
  }
  const SendNewStudent=(studentData)=>{
    fetch("https://62c5beaca361f725128d5b27.mockapi.io/students",{method:"POST", headers:{'Content-Type': 'application/json'},body:JSON.stringify(studentData)})
  }

  const EditStudent =()=>{

  }

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
    console.log("edit", e.target.value, e.target.name);
  };

  const handleAdd = () => {
    setIsEdit(false)
    console.log("fds", studentData);
    setIsAdd(false);
    setStudentData([...students, studentData]);
    SendNewStudent(studentData)
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  useEffect(() => {
    getAllStudents();
    console.log("students",students);
    console.log("studentData",studentData);
  },[isAdd])

  return (
    <div style={{ width: "100%" }}>
      <Table responsive  hover bordered>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Course</th>
            <th>Teacher</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          
              <td></td>
             {isAdd ? (
              <td>
                <input
                  onChange={handleChange}
                  type="number"
                  name="rollno"
                  placeholder="rollno   c     "
                />
              </td>
            ) : (
              <td></td>
            )}
            {isAdd ? (
              <td>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="name"
                />
              </td>
            ) : (
              <td></td>
            )}
            {isAdd ? (
              <td>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="email"
                />
              </td>
            ) : (
              <td></td>
            )}
            {isAdd ? (
              <td>
                <input
                  onChange={handleChange}
                  type="number"
                  name="phoneno"
                  placeholder="Phone No"
                />
              </td>
            ) : (
              <td></td>
            )}
            {isAdd ? (
              <td>
                <input
                  onChange={handleChange}
                  type="option"
                  name="course"
                  placeholder="course"
                />
              </td>
            ) : (
              <td></td>
            )}
            {isAdd ? (
              <td>
                <input
                  onChange={handleChange}
                  type="option"
                  name="teacher"
                  placeholder="teacher"
                />
              </td>
            ) : (
              <td></td>
            )}

            {isAdd ? (
              <td>
                <Button onClick={handleAdd} size="sm">
                  done
                </Button>
              </td>
            ) : (
              <td>
                <Button
                  onClick={() => {
                    setIsAdd(true);
                  }}
                  size="sm"
                >
                  Add
                </Button>
              </td>
            )}
          </tr>
          {students.map((ele, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                {isEdit &&(ele.rollno==id)?<td><input onChange={handleChange} type="text" name="rollno" placeholder={ele.rollno}/></td>:<td>{ele.rollno}</td>}
                {isEdit &&(ele.rollno==id)?<td><input onChange={handleChange} type="text" name="name"   placeholder={ele.name}/></td>:<td>{ele.name}</td>}
                {isEdit &&(ele.rollno==id)?<td><input onChange={handleChange} type="email"name="email"  placeholder={ele.email}/></td>:<td>{ele.rollno}</td>}
                {isEdit &&(ele.rollno==id)?<td><input onChange={handleChange} type="number" name="phoneno" placeholder={ele.phoneno}/></td>:<td>{ele.phoneno}</td>}
                {isEdit &&(ele.rollno==id)?<td><input onChange={handleChange} type="text" name="course" placeholder={ele.course}/></td>:<td>{ele.course}</td>}
                {isEdit &&(ele.rollno==id)?<td><input onChange={handleChange} type="text" name="mentor" placeholder={ele.mentor}/></td>:<td>{ele.teacher}</td>}
                <td>
                  <FaEdit onClick={()=>handleEdit} />| <FaTrashAlt onClick={()=>handleDelete} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
