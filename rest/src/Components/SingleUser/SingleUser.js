import React, { useState, useEffect } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { request, createSingleUserUrl } from "../../helpers/request";

const SingleUser = () => {
  const [user, setUser] = useState({});
  console.log(user);

  const history = useHistory();
  console.log(history);
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  console.log(location);
  console.log(params);
  console.log(match);

  useEffect(() => {
    const url = createSingleUserUrl(params.login);
    console.log(url);
    request("get", url)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>{user.login}</h1>
      <h3>{user.name}</h3>
      <img src={user.avatar_url} alt="" />
      <p>Location: {user.location}</p>
    </div>
  );
};

export default SingleUser;
