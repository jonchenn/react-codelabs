import React from 'react';
import "intersection-observer";

export default class DomObserver extends React.Component {
    ref = React.createRef();
    state = {isVisible: false};

    componentDidMount() {
        // Observe the location where this component mounted in the DOM
        this.observer = new IntersectionObserver(this.loadComponent, );
        this.observer.observe(this.ref.current); 
    }

    componentWillUnmount() {
        this.observer.unobserve(this.ref.current);
    }

    loadComponent = (entries) => {
        // Watch for the div that is the Intersection Observer in our DOM
        if (!this.props.continueWatching && !this.state.isVisible) {
            var targetDiv = null;

            // Find the corresponding entry object
            entries.forEach(entry => {
                if (entry.target === this.ref.current) {
                    targetDiv = entry;
                }
            });

            // if found, set visible to true and begin loading through ModuleLoader component. Unobserve to disable the trigger
            if (targetDiv && targetDiv.isIntersecting) {
                this.setState({isVisible: true});
                this.props.onIntersection && this.props.onIntersection(entries);
                this.observer.unobserve(this.ref.current);
            }
        }
    }

    render () {
        const {children = null, continueWatching } = this.props;
        return (
                <div ref={this.ref}>
                    {continueWatching ? children : this.state.isVisible && children}
               </div>
        );
    }       
}