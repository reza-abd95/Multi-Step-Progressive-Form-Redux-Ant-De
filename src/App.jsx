import { Layout, Steps, theme, Button, message, Spin } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import FormName from "./components/FormName";
import FormUser from "./components/FormUser";
import FormEmail from "./components/FormEmail";
import ShowForm from "./components/ShowForm";

const steps = [
  {
    title: "Personal Info",
    content: "First-content",
  },
  {
    title: "UserName Info",
    content: "Second-content",
  },
  {
    title: "Email",
    content: "Third-content",
  },
  {
    title: "Confirmation",
    content: "Last-content",
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), 500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
          }}
        >
          <span style={{ color: "white", fontSize: "2rem" }}>
            Multi Step Progressive Form
          </span>
        </Header>

        <Content
          style={{
            padding: "20px 48px",
            minHeight: "calc(100vh - 200px)",
            margin: "20px  auto",
            width: "60%",
          }}
        >
          <Steps current={current} items={items} />

          <div
            style={{
              margin: "50px  auto",
              width: "60%",
              minHeight: "250px",
            }}
          >
            {!show ? (
              <Spin
                size="large"
                style={{
                  width: "100%",
                  margin: "50px 0",
                  textAlign: "center",
                }}
              />
            ) : (
              (() => {
                switch (current) {
                  case 0:
                    return (
                      <FormName
                        current={current}
                        setCurrent={setCurrent}
                        steps={steps}
                      />
                    );
                  case 1:
                    return (
                      <FormUser
                        current={current}
                        setCurrent={setCurrent}
                        steps={steps}
                      />
                    );
                  case 2:
                    return (
                      <FormEmail
                        current={current}
                        setCurrent={setCurrent}
                        steps={steps}
                      />
                    );
                  case 3:
                    return (
                      <ShowForm
                        current={current}
                        setCurrent={setCurrent}
                        steps={steps}
                      />
                    );
                  default:
                    return null;
                }
              })()
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center", height: "50px" }}>
          ©{new Date().getFullYear()} Created by Reza Abedi
        </Footer>
      </Layout>
    </>
  );
}

export default App;
