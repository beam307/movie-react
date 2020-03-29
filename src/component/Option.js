import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../store';

class Option extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diff: '1'
        };

    }

    onChangeDiff(e) {
        if (isNaN(e.target.value))
            return;

        this.setState({ diff: e.target.value });

        if (e.target.value == '') {
            this.setState({ diff: '0' });
        }

        this.props.onUpdateDiff(parseInt(e.target.value));

    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.diff} onChange={(e) => this.onChangeDiff(e)}></input>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
}

Option = connect(null, mapDispatchToProps)(Option);

export default Option;
