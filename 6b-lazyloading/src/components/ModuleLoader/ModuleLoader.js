import React, { Component, lazy, Suspense } from "react";

export default class ModuleLoader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Component: null,
            initialized: false
        };
    }
    
    componentDidMount () {
        const dynamicComponent = React.lazy(this.props.component);

        this.setState({
            Component: dynamicComponent,
            initialized: true
        })
    }

    render () {
        const {Component} = this.state;
    
        return (
                <div
                 style={{
                 position: "relative",
                 display: "flex",
                 width: "100%"
                }}
                >
                    <Suspense fallback={this.props.placeholder}>
                        {Component && 
                            (
                                <Component {...this.props}/>
                            )
                        }
                    </Suspense>
                </div>
        );
    }       
}