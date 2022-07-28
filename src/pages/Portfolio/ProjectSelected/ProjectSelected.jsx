import PORTFOLIO_DATA from '../../../data/portfolio_data';
import classes from './ProjectSelected.module.css';
import { useParams, Link } from 'react-router-dom';
const SelectedPortfolio = () => {

    const params = useParams();

    const log = console.log;
   
    return (
        <div className={classes.ProjectSelected}>
            <p>Selected Portfolio Component</p>
            <p>{params.projectId}</p>
            <Link to="/portfolio/">Close</Link>
        </div>
    )
};
export default SelectedPortfolio;