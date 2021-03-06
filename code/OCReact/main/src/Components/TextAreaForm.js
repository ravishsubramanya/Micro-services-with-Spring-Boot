/**
 * Created by lenna on 2017-05-04.
 * Component using the TextArea element
 */

import React, {Component} from 'react';
class TextAreaForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write some lines here'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted:\n' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea placeholder="Placeholder html text is also possible" rows={20} cols={80} value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TextAreaForm;