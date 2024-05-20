import { MailOutlined } from "@ant-design/icons";
import { Input, Typography } from "antd";
import { Button } from "antd";

import React, { useState } from "react";
import { addEmail } from "../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";

function FormEmail({ setCurrent, current, steps }) {
  const dataForm = useSelector((state) => state.form);

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ email: "" });
  const [enable, isEnable] = useState(false);

  const changeHandler = (e) => {
    console.log(inputs);

    setInputs({ ...inputs, [e.target.name]: e.target.value });

    if (inputs.email) {
      isEnable(true);
      console.log(enable);
    } else {
      isEnable(false);
    }
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
        <Typography.Title level={5}>Email:</Typography.Title>
        <Input
          style={{ marginBottom: "20px" }}
          size="large"
          name="email"
          value={dataForm.email}
          placeholder="Enter Your Email :"
          prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          onChange={(value) => (
            dispatch(addEmail(value)), changeHandler(value)
          )}
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

export default FormEmail;
