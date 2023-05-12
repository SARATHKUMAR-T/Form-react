// import React, { useState } from "react";
import Base from "../base/base";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export const filedValidationSchema = yup.object({
  name: yup.string().required("* Please fill the Name"),
  batch: yup
    .string()
    .required("* please fill in Batch")
    .min(5, "* please enter a valid batch"),
  qualification: yup.string().required("* please enter qualification"),
  gender: yup.string().required("* please enter the Gender"),
});

function AddStudents({ students, setStudents }) {
  // formik
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { name: "", batch: "", qualification: "", gender: "" },

      validationSchema: filedValidationSchema,

      onSubmit: newStudentData => {
        console.log("submited", newStudentData);
        createStudent(newStudentData);
      },
    });

  const history = useHistory();
  // const [name, setName] = useState("");
  // const [batch, setBatch] = useState("");
  // const [gender, setGender] = useState("");
  // const [qualification, setQualification] = useState("");

  const createStudent = async newStudents => {
    // creating object from input states
    // const newStudents = {
    //   name: name,
    //   batch: batch,
    //   qualification: qualification,
    //   gender: gender,
    // };

    const response = await fetch(
      "https://644b33c017e2663b9deab94b.mockapi.io/students",
      {
        method: "POST",
        body: JSON.stringify(newStudents),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setStudents([...students, data]);
    history.push("/students");
  };

  return (
    <Base
      title={"Add New Student"}
      description={"We can able to add new students data here"}
    >
      <div className="edit p-4 flex items-center justify-center pr-8  ">
        <form onSubmit={handleSubmit}>
          <div className="bg-gray-200 flex items-end flex-col rounded-lg shadow-xl p-8 px-16 gap-8 w-94">
            <div className="relative flex gap-2">
              <label for="name" className="pt-2">
                Name:
              </label>
              <input
                className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
                placeholder="Enter Name"
                type="name"
                onBlur={handleBlur}
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
              />
              <div className="-bottom-7 right-8 absolute text-red-600 font-light">
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
                onBlur={handleBlur}
                id="batch"
                value={values.batch}
                onChange={handleChange}
              />
              <div className="-bottom-7 right-14 absolute text-red-600 font-light">
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
                onBlur={handleBlur}
                name="gender"
                id="gender"
                value={values.gender}
                onChange={handleChange}
              />
              <div className="-bottom-7 right-4 absolute text-red-600 font-light">
                {" "}
                {touched && errors ? errors.gender : ""}
              </div>
            </div>
            <div className="relative flex gap-2">
              <label for=" qualification" className="pt-2">
                Qualification:
              </label>

              <input
                className=" rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
                placeholder="Enter Qualifiaction"
                type="qualification"
                onBlur={handleBlur}
                name="qualification"
                id="qualification"
                value={values.qualification}
                onChange={handleChange}
              />
              <div className="-bottom-7 right-4 absolute text-red-600 font-light">
                {" "}
                {touched && errors ? errors.qualification : ""}
              </div>
            </div>

            <button
              className="mx-auto mt-4 p-2 rounded-md shadow-xl w-1/2 bg-green-600 duration-300 transition-all mb-2 hover:scale-105 hover:text-white"
              type="submit"
            >
              Create Student
            </button>
          </div>
        </form>
      </div>
    </Base>
  );
}

export default AddStudents;
