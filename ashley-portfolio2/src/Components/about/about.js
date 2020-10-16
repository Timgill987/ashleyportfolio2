import React from "react";

import "../../Less/App.less";

function AboutPage(props) {
const { push } = props.history
    return (
        <div className="about">
            <header>
                <div>
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
