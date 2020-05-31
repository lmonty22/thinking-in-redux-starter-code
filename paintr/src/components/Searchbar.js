import React from "react";
import {connect} from 'react-redux';
import {search} from '../redux/action'


const Searchbar = props => {
  return (<div className="ui container">
    <div className="ui very large fluid input">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>)
};

// lets give SearchBar a prop called 'value' thats mapped to SearchText in the store
// On search lets change the state of SearchText with a dispatch 
const mapStateToProps = (state) => {
  return {value: state.searchText}
}

// const mapDispatchToProps = (dispatch) => {
//   return {onChange: (searchText) => dispatch(search(searchText))
//     }
// }

export default connect(mapStateToProps, {onChange: search})(Searchbar);
