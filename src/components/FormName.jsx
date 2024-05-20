import { Input, Typography, Button } from "antd";
import { addFirstName, addLastName } from "../redux/formSlice";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FormName({ setCurrent, current, steps }) {
  const dataForm = useSelector((state) => state.form);

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    firstName: dataForm.name,
    lastName: dataForm.lastName,
  });
  const [enable, isEnable] = useState(dataForm.name && dataForm.lastName);

  // useEffect(() => {
  //   isEnable(dataForm.name && dataForm.lastName);
  // }, []);

  const changeHandler = (e) => {
    setInputs((oldInputs) => {
      const data = { ...oldInputs, [e.target.name]: e.target.value };
      console.log(data);

      isEnable(data.firstName && data.lastName);

      return data;
    });
  };

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const info = () => {
    console.log("تایید شد");
  };

  return (
    <div>
      <div>
        {" "}
        <Typography.Title level={5}>First Name :</Typography.Title>
        <Input
          name="firstName"
          style={{ marginBottom: "20px" }}
          size="large"
          value={dataForm.name}
          placeholder="Enter Your First Name"
          onChange={(value) => (
            dispatch(addFirstName(value)), changeHandler(value)
          )}
        />
        <Typography.Title level={5}>Last Name :</Typography.Title>
        <Input
          name="lastName"
          size="large"
          value={dataForm.lastName}
          placeholder="Enter Your Last Name"
          onChange={(value) => {
            dispatch(addLastName(value));
            changeHandler(value);
          }}
        />
      </div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {current < steps.length - 1 && (
          <Button disabled={!enable} type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => info()}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

export default FormName;
