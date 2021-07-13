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
    .post(`/email`, {
      to: info.userInfo.email,
      name: info.userInfo.name,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      <h2>Success, confirmation mail sent to {info.userInfo.email}</h2>
    </div>
  );
};

export default SuccessScreen;
