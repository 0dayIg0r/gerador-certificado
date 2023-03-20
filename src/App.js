import Certificate from "./components/Certificate";

import { useState } from "react";


function App() {
  const [name, setName] = useState('Maisa Silva Sousa')
  const [teacherName, setTeacherName] = useState('Igor Medeiros Freitas')
  const [h, setH] = useState(20)
  const [courseName, setCourseName] = useState('Pacote Office')
  const [date, setDate] = useState('16/10/2022')
  const [endDate, setEndDate] = useState('20/10/2022')
  const [directorName, setDirectorName] = useState('Nome do diretor(a)')

  return (
    <div>
      <Certificate
        name={name}
        teacherName={teacherName}
        h={h}
        courseName={courseName}
        date={date}
        endDate={endDate}

      />
    </div>
  );
}

export default App;
