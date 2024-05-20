import { Button, Divider, Modal } from "antd";

import React, { useState } from "react";
import { useSelector } from "react-redux";

function ShowForm({ setCurrent, current, steps }) {
  const dataForm = useSelector((state) => state.form);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
  console.log(dataForm);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Divider plain>Name</Divider>
        <span>{dataForm.name}</span>
        <Divider plain>Last Name</Divider>

        <span>{dataForm.lastName}</span>
        <Divider plain>User Name</Divider>

        <span>{dataForm.userName}</span>
        <Divider plain>Email</Divider>
        <span>{dataForm.email}</span>
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
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={showModal}>
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

      <Modal
        title="Full Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider plain>Name</Divider>
          <span>{dataForm.name}</span>
          <Divider plain>Last Name</Divider>

          <span>{dataForm.lastName}</span>
          <Divider plain>User Name</Divider>

          <span>{dataForm.userName}</span>
          <Divider plain>Email</Divider>
          <span>{dataForm.email}</span>
        </div>
      </Modal>
    </div>
  );
}

export default ShowForm;
