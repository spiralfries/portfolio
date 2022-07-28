import { Fragment } from 'react';
import Project from './Project/Project';
const ProjectList = (props) => {
    return (
        <Fragment>
            <h2>Project List Component</h2>
            {props.projectData.map(project => {
                return (
                    <ul key={project.id}>
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            productId={project.id}
                        />
                    </ul>
                )
            })}
        </Fragment>
    )
};
export default ProjectList;