import Certificate from "./components/Certificate";

import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";


function App() {
  const [name, setName] = useState('Camila Freire Melo')
  const [teacherName, setTeacherName] = useState('Igor Medeiros Freitas')
  const [h, setH] = useState(20)
  const [courseName, setCourseName] = useState('Pacote Office')
  const [date, setDate] = useState('16/10/2022')
  const [endDate, setEndDate] = useState('20/10/2022')
  const [directorName, setDirectorName] = useState('Nome do diretor(a)')

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
