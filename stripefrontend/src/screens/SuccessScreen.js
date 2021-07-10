import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SuccessScreen = ({ history }) => {
  const info = useSelector((state) => state.userInfo);
  const success = info.userInfo.success;

  useEffect(() => {
    if (!success) {
      history.push("/");
    }
  }, [history, success]);

  return <div>Suceess</div>;
};

export default SuccessScreen;
