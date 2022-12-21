
import React from 'react';


class Exemple extends React.Component {



    render() {

        return (
            <div>
                <h1>llllllol</h1>

            </div>
        );
    }
}
class Exemple2 extends React.Component {

    constructor() {
        super();
    }
    render() {
        // const name = props.name;
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.name}</h1>
                {this.props.children}
            </div>
        );
    }
}

const enhanc = (Component) => {
    return class Enhanc extends React.Component {
        render() {
            return (
                <div>
                    <h1> now this:</h1>
                    <Component
                        name="пропс который пробрасываем"
                    >
                        <h1>ddddddd</h1>

                    </Component>
                </div>

            )
        }
    }
}

const SimpleHOC = enhanc(Exemple2)

export default SimpleHOC;
