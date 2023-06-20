/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom'

import Load from '../../assets/asp-logo.png'

import styles from './styles.module.scss'




const Home = ({
    name,
    teacherName,
    h,
    courseName,
    date,
    endDate,
    directorName,
    handleName,
    handleCurse,
    handleDate,
    handleDirector,
    handleEnd,
    handleH,
    handleTeacher,

}) => {


    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const handleLoading = () => {
            setLoading(false)
            setTimeout(() => {
                setLoading(true)
            }, 1500);
        }

        return handleLoading    

    }, [])

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
                        value={name}
                        onChange={handleName}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Nome do Educador"
                        value={teacherName}
                        onChange={handleTeacher}


                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Quantidade de Horas"
                        helperText="Exemplo: 15"
                        value={h}
                        onChange={handleH}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Nome do Curso"
                        helperText="Exemplo: Pacote Office"
                        value={courseName}
                        onChange={handleCurse}

                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Data Inicial"
                        helperText="Exemplo: 01/01/23"
                        value={date}
                        onChange={handleDate}

                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Data Final"
                        helperText="Exemplo: 04/04/23"
                        value={endDate} rh
                        onChange={handleEnd}

                    />
                </Box>

                <div className={styles.btnContent}>
                    <Link to='/certificate'>
                        <Button variant="contained" color="success" >
                            Gerar
                        </Button>
                    </Link>

                </div>

            </div>

        )
    }


    return (
        <>
            {loading ? content() :
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <div className={styles.loading}>
                    <img src={Load} />
                </div>
            }
        </>
    )

}

export default Home