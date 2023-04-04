import React from 'react'
import Medal from '../assets/medal.png'
import Asp from '../assets/asp-logo.png'
import styles from './styles.module.scss'



const Certificate = ({ name, teacherName, h, courseName, date, endDate }) => {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <span>
          <h1>Certificado de Conclusão</h1>
        </span>

        <div className={styles.subTitle}>
          <span>Ação Social do Planalto concede a</span>
        </div>
        <div className={styles.name}>
          <h1>{name}</h1>
        </div>
        <div className={styles.infos}>
          <span>
            O certificado de conclusão do curso de {courseName},
            ministrado pelo profissional {teacherName},
            entre o período de {date} e {endDate}
          </span>
        </div>
      </div>
      <div className={styles.signatureContainer}>
        <div className={styles.signature}>
          <span>________________________________________</span>          </div>
        <div className={styles.superiorSignature}>
          <span>Assinatura do coordenador(a)</span>
        </div>

        <div className={styles.signature}>
          <span>________________________________________</span>
        </div>
        <div className={styles.studentSignature}>
          <span>Assinatura do aluno(a)</span>
        </div>
        <div className={styles.logo}>
          <img src={Medal} />
          <img src={Asp} />
        </div>

      </div>
    </div>
  )
}

export default Certificate