import React from "react";

function AboutPage(props) {
const { push } = props.history
    return (
        <div className="about">
            <header>
                <div className="homeBtn-div">
                <button onClick={() => push("/")}>Back to Home</button>
                </div>
            </header>
            <div>
                <p>AboutPage</p>
            </div>
        </div>
    );
}

export default AboutPage;
