import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const SuccessScreen = ({ history }) => {
  const info = useSelector((state) => state.userInfo);
  const success = info.userInfo.success;

  useEffect(() => {
    if (!success) {
      history.push("/");
    }
  }, [history, success]);

  axios
    .post(`http://localhost:8282/email`, {
      to: info.userInfo.email,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return <div>Suceess</div>;
};

export default SuccessScreen;
