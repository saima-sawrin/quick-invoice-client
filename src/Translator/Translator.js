import React from "react";
import {
  multilanguage,
  changeLanguage,
  loadLanguages
} from "redux-multilanguage";
import { connect } from "react-redux";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";

class Translator extends React.Component {
  componentDidMount() {
    this.loadLanguages();
  }
  loadLanguages() {
    this.props.dispatch(
      loadLanguages({
        languages: {
          bn: require("../Language/bn.json"),
          en: require("../Language/en.json")
        }
      })
    );
  }
  changeLanguage = e => {
    const languageCode = e.target.value;
    this.props.dispatch(changeLanguage(languageCode));
  };
  render() {
    const { strings, currentLanguageCode } = this.props;
    return (
      <div className="bg-none">
        <h1><Link to='/suggestion'>{strings["Suggestion"]}</Link></h1>
       {" "}
        <select className="bg-none" value={currentLanguageCode} onChange={this.changeLanguage}>
          <option value="en">en</option>
          <option value="bn">bn</option>
        </select>
        
      </div>
    );
  }
}
export default connect()(multilanguage( Translator));