import React from "react";
import "./assets/ForLogin.scss";
import { Login, Register } from "./index";

class ForLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true
        };
    }

    componentDidMount() {
        //Add .right by default
        this.rightSide.classList.add("right");
    }

    changeState() {
        const { isLogginActive } = this.state;

        if (isLogginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }

    render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "login" : "register";
        return (
            <div className="Appo">
                <div className="logino">
                    <div className="containero" ref={ref => (this.container = ref)}>
                        {isLogginActive && (
                            <Login containerRef={ref => (this.current = ref)} />
                        )}
                        {!isLogginActive && (
                            <Register containerRef={ref => (this.current = ref)} />
                        )}
                    </div>
                    <RightSide
                        current={current}
                        currentActive={currentActive}
                        containerRef={ref => (this.rightSide = ref)}
                        onClick={this.changeState.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

const RightSide = props => {
    return (
        <div
            className="right-sideo"
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className="inner-containero">
                <div className="texto">{props.current}</div>
            </div>
        </div>
    );
};

export default ForLogin;
