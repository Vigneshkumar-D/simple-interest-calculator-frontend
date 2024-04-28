import React, { useState } from 'react';
import { Button, Form, Input, Tag } from "antd";
import './home.css';

function Home ()  {
    const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [simpleInterest, setSimpleInterest] = useState('');
  const [error, setError] = useState('');

  const onFinish = () => {
  };

  return (
    <div className="home-main-container">
      <div className='home-sub-container'>
        <h1 className='title'>Simple Interest Calculator</h1>
      </div>
      <div className='home-sub-container1'>
        <Form className='form' onFinish={onFinish}>
          <div className="input-container">
            <Tag className='tag'>Principal Amount:</Tag>
            <Input className='input' type="text" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
          </div>
          <div className="input-container">
            <Tag className='tag'>Interest Rate (%):</Tag>
            <Input className='input' type="text" value={rate} onChange={(e) => setRate(e.target.value)} />
          </div>
          <div className="input-container">
            <Tag className='tag'>Time Period (years):</Tag>
            <Input className='input' type="text" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <Button type='primary' className='button' htmlType='submit'>Calculate Interest</Button>
        </Form>
      </div>
      {error && <div className="error">{error}</div>}
      {simpleInterest && <div className="result">Simple Interest: {simpleInterest}</div>}
    </div>
  );

}
export default Home







