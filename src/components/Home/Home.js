import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Link from 'react-router-dom'


import styles from './styles.module.scss'




const Home = ({ name, teacherName, h, courseName, date, endDate }) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleLoading = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }

    const content = () => {


        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <header>
                        <span>Dados do Educando</span>
                    </header>

                </div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-error"
                        label="Nome do Aluno(a)"
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Nome do Educador"

                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Quantidade de Horas"
                        helperText="Exemplo: 15"
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Nome do Curso"
                        helperText="Exemplo: Curso de Pacote Office"

                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Data Inicial"
                        helperText="Exemplo: 01/01/23"
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Data Final"
                        helperText="Exemplo: 04/04/23"
                    />
                </Box>

                <div className={styles.btnContent}>
                    <Button variant="contained" color="success" onClick={() => handleLoading}>
                        Gerar
                    </Button>

                </div>

            </div>

        )
    }


    return (
        <>
            {!isLoading ? content() : ''}
        </>
    )

}

export default Home