import style from './NewProject.module.css';

import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={style.newproject_Container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject