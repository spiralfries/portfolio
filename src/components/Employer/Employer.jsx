const Employer = (props) => {
    return (
        <section>
            <h3>{props.name} {props.role}</h3>
            <p>{props.from} {props.to}</p>
            <p><a href={props.url}>{props.name}</a></p>
        </section>
    )
};
export default Employer;