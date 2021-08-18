import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const user = useSelector((state) => state.gitdata.user);
  const isLoading = useSelector((state) => state.gitdata.isLoading);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : user.login ? (
        <p>{user.login}</p>
      ) : (
        <p>not defined</p>
      )}
      {}
    </div>
  );
};

export default About;
