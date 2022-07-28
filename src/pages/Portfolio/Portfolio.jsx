import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Portfolio.module.css'
import PORTFOLIO_DATA from '../../data/portfolio_data';
import Employer from '../../components/Employer/Employer';
import ProjectList from '../../components/ProjectList/ProjectList';

const Portfolio = () => {

    const log = console.log;

    // 1. STEP 1. Function extracts employer and project data via employer name. This pulls out employer and child projects

    const getDataByEmployer = (data, employerName) => {
        return data.employers.filter(employer => {
            return employer.name.toLowerCase().includes(employerName);
        });
    };

    // 2. STEP 2. Create data objects for each employer

    const GET_FORBES_DATA = getDataByEmployer(PORTFOLIO_DATA, "forbes");
    const GET_TOWERGATE_DATA = getDataByEmployer(PORTFOLIO_DATA, "towergate");

    // 3. STEP 3. Function to extract employer data
    
    const getEmployerDetails = (employerData) => {
        const [{ name, role, from, to, summary }] = employerData;
        const employer = {
            name:name,
            role:role,
            from:from,
            to:to,
            summary:summary
        };
        return employer;
    };

    // 4. STEP 4. Create data objects of each employer

    const FORBES_EMPLOYER = getEmployerDetails(GET_FORBES_DATA);
    const TOWERGATE_EMPLOYER = getEmployerDetails(GET_TOWERGATE_DATA);

    // 5. STEP 5. Get the projects. I don't quite understand why this works, but it does

    const [ { projects:FORBES_PROJECTS } ] = GET_FORBES_DATA;
    const [ { projects:TOWERGATE_PROJECTS } ] = GET_TOWERGATE_DATA;

    // 6. STEP 6. Set up the States

   const [ forbesEmployer, setForbesEmployer ] = useState(FORBES_EMPLOYER);
    const [ towergateEmployer, setTowergateEmployer ] = useState(TOWERGATE_EMPLOYER);

    const [ forbesProjects, setForbesProjects ] = useState(FORBES_PROJECTS);
    const [ towergateProjects, setTowergateProjects ] = useState(TOWERGATE_PROJECTS);

    // 7. STEP 7. Output Employer function. Doesn't require a map so will do this first

    const OutPutEmployer = (outPutEmployerData) => {
        return (
            <Employer
            name={outPutEmployerData.name}
            role={outPutEmployerData.role}
            from={outPutEmployerData.from}
            to={outPutEmployerData.to}
            summary={outPutEmployerData.summary}
        />
        )
    };

    const ForbesEmployer = OutPutEmployer(forbesEmployer);
    const TowergateEmployer = OutPutEmployer(towergateEmployer);

    // 8. STEP 8. Output the Projects using map

    log("forbesProjects!!!!!");
    log(forbesProjects);

    const OutPutProjects = (projectData) => {
        return (
            <ProjectList projectData={projectData} />
        )
    };

    const ForbesProjects = OutPutProjects(forbesProjects);
    const TowergateProjects = OutPutProjects(towergateProjects);


    return (
        <main>
            <h2>Portfolio Page Component</h2>
            {ForbesEmployer}
            {ForbesEmployer && ForbesProjects}
            {TowergateEmployer}
            {TowergateEmployer && TowergateProjects}
        </main>
    )
};
export default Portfolio;