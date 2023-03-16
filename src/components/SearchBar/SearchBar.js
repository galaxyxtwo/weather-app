import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {
        city: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state.city) {
            this.setState({ city: this.state.city })
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.city === '') {
            alert('City can not be empty')
        } else {
            this.props.searchCity(this.state.city)
        }

        this.setState({ city: '' })
    }

    onChange = e => this.setStage({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBarChilds">
                    <h5 className="text-white">Search weather on your city</h5>

                    <form onSubmit={this.onsubmit} className="formSearchcity">
                        <input type="text" name="city" id="inputSearchCity" onChange={this.onChange} placeholder="Search City..." />
                        <button type="submit" className="btn btn-outline-info text-white">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;
