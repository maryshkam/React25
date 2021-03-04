import React, { Component,useEffect } from "react";
import Loader from "react-loader-spinner";
import Pagination from "@material-ui/lab/Pagination";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List =({loader,users})=> {
    return (
      <>
        <ul className="list">
          {loader ? (
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={5000} //3 secs
            />
          ) : (
            users.map((user) => <ListItem key={user.id} {...user} />)
          )}
        </ul>
        {/* {totalItemCount && (
          // <Pagination
          //   count={Math.floor(totalItemCount / per_page)}
          //   page={page}
          //   onChange={this.handleChange}
          //   color="primary"
          // />
        )} */}
      </>
    );
  
}

export default List;
