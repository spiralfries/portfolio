import { Link } from 'react-router-dom';
import classes from './Project.module.css';
const Project = (props) => {

    return (
        <section className={classes.Project}>
            <h3>Project Component</h3>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>TABS!</p>
            <p>Length: {props.tabs}</p>
            <Link to={`/portfolio/${props.productId}`} className={classes.Action}>Select</Link>
        </section>
    );
};
export default Project;