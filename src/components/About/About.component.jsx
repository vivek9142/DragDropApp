import './About.styles.css';

const About = () => {
    return (
        <>
            <section className="about__section--container">
                <div className="about__section--heading-container">
                    <h3 className="about__sction--heading">
                        About App
                    </h3>
                </div>
                <div className="about__section--body">
                    <ul className="about__section--body-list">
                        <li className="about__section--body-list-item">
                            Drag Drop App comes up with project initiation process. 
                        </li>
                        <li className="about__section--body-list-item">
                            You can create project with name and description about the project. 
                        </li>
                        <li className="about__section--body-list-item">
                            You can also import/drap-drop related image/images for project from your System.
                        </li>
                        <li className="about__section--body-list-item">
                            By This app, you can add meta data i.e, Label to each image/images imported in previous step.
                        </li>
                        <li className="about__section--body-list-item">
                            You can also exported the complete data along with images in JSON format. 
                        </li>
                    </ul>
                    <div className="about__section--body--caption">
                        <h4>So What are you waiting for? Go Have a look!</h4>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;