import Certificate from "./components/Certificate";

import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";


function App() {
  const [name, setName] = useState('')
  const [teacherName, setTeacherName] = useState('')
  const [h, setH] = useState()
  const [courseName, setCourseName] = useState('')
  const [date, setDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [directorName, setDirectorName] = useState('')
  

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleTeacher = (e) => {
    setTeacherName(e.target.value)
  }
  const handleH = (e) => {
    setH(e.target.value)
  }
  const handleCurse = (e) => {
    setCourseName(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handleEnd = (e) => {
    setEndDate(e.target.value)
  }
  const handleDirector = (e) => {
    setDirectorName(e.target.value)
  }



  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home
          name={name}
          teacherName={teacherName}
          h={h}
          courseName={courseName}
          date={date}
          endDate={endDate}
          directorName={directorName}

          // functions
          handleName={handleName}
          handleCurse={handleCurse}
          handleDate={handleDate}
          handleDirector={handleDirector}
          handleEnd={handleEnd}
          handleH={handleH}
          handleTeacher={handleTeacher}
      
        />} />


        <Route path='/certificate' element={<Certificate
          name={name}
          teacherName={teacherName}
          h={h}
          courseName={courseName}
          date={date}
          endDate={endDate}
        />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
