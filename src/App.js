import { Layout, Form, Input, Button, Checkbox, notification } from 'antd';

import './App.css';


const { Header, Footer, Content } = Layout;

const App = () => {

  const onFinish = ({ username, password }) => {
    if (username === 'andrey_koktash' && (password === 'kGnsOr23' || password?.length > 12)) {
      notification.success({
        key: 'success',
        message: 'Успіх'
      });
    } else {
      notification.error({
        message: 'Помилка',
        description: 'Логін чи пароль не вірні'
      });
    }
  };

  const onFinishFailed = () => {
    notification.error({
      key: 'failed',
      message: 'Помилка',
      description: 'Перевірте заповненість полів'
    });
  };

  return (
    <Layout>
      <Header style={{ background: 'inherit' }}></Header>
      <Content style={{
        background: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Form
          name="basic"
          labelAlign={"left"}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          style={{
            width: 360,
            background: 'white',
            padding: 20
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Користувач"
            name="username"
            rules={[
              {
                required: true,
                message: 'Поле обов\'язкове!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Поле обов\'язкове!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              span: 24
            }}
          >
            <Checkbox>Запам'ятати користувача</Checkbox>
          </Form.Item>

          <Form.Item
            className="submit_block"
            wrapperCol={{
              span: 24
            }}
          >
            <Button 
              type="primary" 
              htmlType="submit"
              className="submit_button"
            >
              Увійти
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer style={{ background: 'inherit' }}></Footer>
    </Layout>
  );
}

export default App;
