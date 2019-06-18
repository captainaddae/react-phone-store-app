import React, { Component } from 'react';

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto py-3 text-title text-capitalize text-center">
                        <h1 className="display-3">
                            <strong>404</strong>
                        </h1>
                        <span>Page not found!</span>
                        <h5>The requested page</h5>
                        <h5 className="text-danger">{this.props.location.pathname} </h5>
                        you are looking for was not found!
                    </div>
                </div>
            </div>
        )
    }
}