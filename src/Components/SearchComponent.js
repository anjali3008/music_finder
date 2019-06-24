import React, { Component } from 'react';
import '../App.css';
import getMusicLIst from '../Actions/fetchMusicAction';
import { connect } from 'react-redux';
import DisplayMusicList from './DisplayMusicList';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemToSearch: ""
        };
    }

    updateItemToSearch = (e) => {
        this.setState({
            itemToSearch: e.target.value
        })
    }

    searchForItem = () => {
        this.props.dispatch(getMusicLIst(this.state.itemToSearch));
    }

    render() {
        return (
            <div className="parent-div">
                <div className="container">
                    <input className="input-style" type="text" placeholder="Search" value={this.state.itemToSearch} onChange={this.updateItemToSearch} />
                    <button className="btn-search" onClick={this.searchForItem}>Search</button>
                    {this.props.musicList !== null && this.props.musicList !== undefined ?
                        this.props.musicList.map(item => <DisplayMusicList props={item} />)
                        : null}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ results }) {
    return {
        musicList: results
    };
}

export default connect(mapStateToProps)(SearchComponent);