export default function About() {
    return (
        <div className="about-us my-5">
            <div className="row about-us-mission  m-0">
                <div className="col-sm"><img className="img-fluid about-us-mission-img" src="/assets/images/ab-1.png" /></div>
                <div className="col-sm about-us-mission-text">
                    <h2>Mission</h2>
                    <p>Remove the stigma from the health struggle and enhance  everyone's wellness.</p>
                </div>
            </div>
            <div className="row about-us-vision m-0">
                <div className="col-sm about-us-vision-img"><img className="img-fluid" src="/assets/images/ab-3.png" /></div>
                <div className="col-sm about-us-vision-text">
                    <h2>Vision</h2>
                    <p>Healthy thought patterns, physical movements and open conversation.</p>
                </div>

            </div>
            <div className="row about-us-philosophy m-0">
                <div className="col-sm"><img className="img-fluid about-us-philosophy-img" src="/assets/images/ab-2.png" /></div>
                <div className="col-sm about-us-philosophy-text">
                    <h2>Philosophy</h2>
                    <p>When times get dark, find the light by Navigating Towards Wellness.</p>
                </div>
            </div>
        </div>
    )
}