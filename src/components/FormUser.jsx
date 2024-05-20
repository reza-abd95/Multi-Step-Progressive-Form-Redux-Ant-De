import { Button, Input, Typography, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { addUserName } from "../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";

function FormUser({ setCurrent, current, steps }) {
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.form);
  const [uploadImage, setUploadImage] = useState(null);
  const [inputs, setInputs] = useState({ userName: "" });
  const [enable, isEnable] = useState(false);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const changeHandler = (e) => {
    console.log(inputs);

    setInputs({ ...inputs, [e.target.name]: e.target.value });

    if (inputs.userName) {
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
  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",

    headers: {
      authorization: "authorization-text",
    },
    async onChange({ file }) {
      setUploadImage(await getBase64(file.originFileObj));
      if (file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div>
      <div>
        <Typography.Title level={5}>User Name :</Typography.Title>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          style={{ marginBottom: "20px" }}
          size="large"
          value={dataForm.userName}
          name="userName"
          placeholder="Enter Your User Name :"
          onChange={(value) => (
            dispatch(addUserName(value)), changeHandler(value)
          )}
        />
        <Typography.Title level={5}>Upload Your Picture :</Typography.Title>
        <Upload maxCount={1} {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <img
          style={{ width: "80px", borderRadius: "12px" }}
          src={uploadImage}
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

export default FormUser;
