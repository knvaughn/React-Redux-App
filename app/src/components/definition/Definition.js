import React from 'react';
import {connect} from 'react-redux';
import './Definition.css';

const Definition = (props) => {
    return (
        <div className="Definition">
            <div>
                <h2>{props.word}</h2>
                <hr />
                {
                    props.definitions.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3>{item.type}</h3>
                                <ul>
                                    <li>{item.definition}</li>
                                    {
                                        item.example &&
                                        <li><em>Ex: {item.example}</em></li>
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    definitions: state.definitions,
    pronunciation: state.pronunciation,
    word: state.word,
    isFetching: state.isFetching,
    error: state.error
});

export default connect(mapStateToProps, {})(Definition);