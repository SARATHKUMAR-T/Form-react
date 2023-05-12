import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Base from "../base/base";
import { useHistory } from "react-router-dom";
import { filedValidationSchema} from "./AddStudents";
import { useFormik } from "formik";

function UpdateStudents({ students, setStudents }) {
  const { id } = useParams();
  const editStudent = students[id];
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const history = useHistory();

  useEffect(() => {
    setName(editStudent.name);
    setBatch(editStudent.batch);
    setGender(editStudent.gender);
    setQualification(editStudent.qualification);
  }, [editStudent]);

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
  useFormik({
    initialValues: { name: "", batch: "", qualification: "", gender: "" },

    validationSchema: filedValidationSchema,

    onSubmit: newStudentData => {
      console.log("submited", newStudentData);
      updateStudent(newStudentData);
    },
  });

  async function updateStudent(updatedObject) {
    // const updatedObject = {
    //   name: name,
    //   batch: batch,
    //   gender: gender,
    //   qualification: qualification,
    // };
    const response = await fetch(
      `https://644b33c017e2663b9deab94b.mockapi.io/${editStudent.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (data) {
      console.log(updatedObject);
      students[id] = updatedObject;
      setStudents([...students]);
      history.push("/students");
    }
  }

  return (
    <Base title={"Edit a Student"} description={"Edit Stuudents data here"}>
      <div className="edit p-4 flex items-center justify-center pr-8  ">
        <form onSubmit={handleSubmit} >
        <div className="bg-gray-200 flex items-end flex-col rounded-lg shadow-xl p-8 px-16 gap-8 w-94">
          <div className="relative flex gap-2">
            <label for="name" className="pt-2">
              Name:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Name"
              type="name"
              name="name"
              id="name"
              onBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
            />
             <div className="-bottom-7 right-4 absolute text-red-600 font-light">
                {" "}
                {touched && errors ? errors.name : ""}
              </div>
          </div>
          <div className="relative flex gap-2">
            <label for="batch" className="pt-2">
              Batch:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Batch"
              type="batch"
              name="batch"
              id="batch"
              onBlur={handleBlur}
              value={values.batch}
              onChange={handleChange}
            />
             <div className="-bottom-7 right-4 absolute text-red-600 font-light">
                {" "}
                {touched && errors ? errors.batch : ""}
              </div>
          </div>
          <div className="relative flex gap-2">
            <label for="gender" className="pt-2">
              Gender:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Gender"
              type="gender"
              id="gender"
              name="gender"
              onBlur={handleBlur}
              value={values.gender}
              onChange={handleChange}
            />
             <div className="-bottom-7 right-4 absolute text-red-600 font-light">
                {" "}
                {touched && errors ? errors.gender : ""}
              </div>
          </div>
          <div className="relative flex gap-2">
            <label for="qualification" className="pt-2">
              Qualification:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter qualification"
              type="qualification"
              name="qualification"
              id="qualification"
              onBlur={handleBlur}
              value={qualification}
              onChange={handleChange}
            />
             <div className="-bottom-7 right-4 absolute text-red-600 font-light">
                {" "}
                {touched && errors ? errors.qualification : ""}
              </div>
          </div>

          <button
            className="mx-auto mt-4 p-2 rounded-md shadow-xl w-1/2 bg-green-600 duration-300 transition-all mb-2 hover:scale-105 hover:text-white"
            onClick={updateStudent}
          >
            Update Student
          </button>
        </div>
        </form>
      </div>
    </Base>
  );
}

export default UpdateStudents;
