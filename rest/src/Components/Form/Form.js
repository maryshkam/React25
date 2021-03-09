import React, { useState } from "react";
import {useHistory,useLocation,useParams,useRouteMatch} from "react-router-dom";
import { withCreadentials, request } from "../../helpers/request";


import "./Form.css";

const Form =({toogleLoader,toogleError,getSearch,getSearchWord,type,per_page})=> {
  const [search,setSearch]= useState('');

  const history = useHistory();
  const location = useLocation();

  const handleInput = ({ target }) => {
    const { value } = target;
    setSearch(
      value)
  };

  const submitHeandler = async (e) => {
    e.preventDefault();

    const url = withCreadentials(
      `https://api.github.com/search/${type}?q=${search}&per_page=${per_page}&page=1&`
    );

    try {
      toogleLoader();
      const result = await request("get", url);
      getSearchWord(search);
      await getSearch(result);
      console.log(result);
      history.push({...location,search: `?userName=${search}`,
    })

    } catch (error) {
      toogleError();
    } finally {
      toogleLoader();
      setSearch('');
    }
  };

    return (
      <form onSubmit={submitHeandler} className="search-form">
        <input
          onChange={handleInput}
          name="search"
          type="text"
          value={search}
        />
        {/* <select onChange={selectHandler} name="type">
          <option value="repositories">repositories</option>
          <option value="users">users</option>
        </select> */}
        <button type="submit">Search</button>
      </form>
    );
  }


export default Form;
