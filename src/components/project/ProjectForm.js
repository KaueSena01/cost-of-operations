import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css';

function ProjectForm({btnText, handleSubmit, projectData}) {

    const [project, setProject] = useState(projectData || {})

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json())
        .then((data) => { setCategories(data)})
          .catch((error) => console.log(error))
    }, [])

    const submit = (e) =>{
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
    }

    function handlechange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ ...project,  category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }

    return (
        <>
        <form onSubmit={submit} className={styles.form}> 
            
            <Input
                type="text"
                text="Nome do projeto"
                name="name" 
                placeholder="Insira o nome do projeto" 
                handleOnchange={handlechange}
                value={project.name ? project.name : ''}/>
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget" 
                placeholder="Insira o orçamento total"
                handleOnchange={handlechange}
                value={project.budget ? project.budget : ''}/>
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                options={categories}
                handleOnchange={handleCategory}
                value={project.category ? project.category.id : ''}/>
            <SubmitButton text={btnText}/>
        </form>
        </>
    )
}

export default ProjectForm