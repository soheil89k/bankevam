import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import FilterBar from "./sections/filter-bar";
import SearchListItem from "../../components/search-list-item/search-list-item";

class SearchList extends React.Component {
    constructor(props) {

        super(props);
        debugger
        //props.match.params.lng;
    }

    render() {

        return (
            <>
                <Header/>
                <FilterBar/>

                <div style={{
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "over-flu": "hidden",
                    "width": "100%"
                }}>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                    <SearchListItem/>
                </div>

                <Footer/>
            </>
        )
    }
}


export default SearchList;