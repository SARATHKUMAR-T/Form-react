// import React, { useState } from 'react'
import Base from "../base/base";
// import data from '../Data/data'
// import AddStudents from './AddStudents';
// import UpdateStudents from './UpdateStudents';
import { useHistory } from "react-router-dom";

function Students({ students, setStudents }) {
  const history = useHistory();
  // delete functionality
  const deleteStudent = async studId => {
    const response = await fetch(
      `https://644b33c017e2663b9deab94b.mockapi.io/students/${studId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    if (data) {
      const remainingStudents = students.filter(
        (stud, idx) => stud.id !== studId
      );

      setStudents(remainingStudents);
    }
  };

  return (
    <Base
      title={"Students Dashboard"}
      description={"The page contains all students data"}
    >
      <div className="card-container  sm:grid-cols-1  grid md:grid-cols-3 gap-12 py-6">
        {students.map((stud, idx) => (
          <div
            className="card  rounded-lg bg-gray-200 shadow-xl p-6 duration-300 hover:scale-105"
            key={idx}
          >
            <div className="content flex flex-col uppercase gap-4 mb-12">
              <h3>
                <span className="text-gray-500"> Name :</span>
                {stud.name}
              </h3>
              <p>
                <span className="text-gray-500">BATCH :</span> {stud.batch}
              </p>
              <p>
                <span className="text-gray-500">GENDER :</span> {stud.gender}
              </p>
              <p>
                <span className="text-gray-500">QUALIFICATION :</span>{" "}
                {stud.qualification}
              </p>
            </div>

            <div className="control flex flex-col items-center gap-4 ">
              <button
                className=" bg-gradient-to-r from-green-900 via-green-400 to-green-900 rounded-md w-3/4 p-2 transition-all duration-300 hover:scale-105 hover:opacity-80 hover:text-white"
                onClick={() => history.push(`/edit/${stud.id-1}`)}
              >
                EDIT
              </button>

              <button
                className="bg-gradient-to-r from-red-600 via-rose-600 to-blue-600 rounded-md p-2 w-3/4 transition-all duration-300 hover:scale-105 hover:opacity-80 hover:text-white"
                onClick={() => deleteStudent(stud.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}

export default Students;
