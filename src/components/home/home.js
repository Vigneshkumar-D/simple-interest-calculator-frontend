import React, { useState } from 'react';
import { Button, Form, Input, Tag, message } from "antd";
import './home.css';

function Home ()  {
    const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [simpleInterest, setSimpleInterest] = useState('');
  const [error, setError] = useState('');

  const onFinish = () => {
    console.log("git")
    if (!principal || isNaN(principal) || parseFloat(principal) <= 0) {
      setError('Please enter a valid principal amount.');
      return;
    }
    if (!rate || isNaN(rate) || parseFloat(rate) <= 0 || parseFloat(rate) > 100) {
      setError('Please enter a valid interest rate.');
      return;
    }
    if (!time || isNaN(time) || parseFloat(time) <= 0) {
      setError('Please enter a valid time period.');
      return;
    }

    const data= {
      "principalAmount": principal,
      "interestRate": rate,
      "timePeriod": time
    }
    const fetchData = async () => {
      const url = `http://localhost:4000/calculator`
      try {
        const response = await fetch(
         url,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) 
          }
        );       
        const jsonData = await response.json();
        if (!response.ok) {
          message.error("Failed to Calculate: Error occurred");
          return;
        }
        setSimpleInterest(jsonData);
      } catch (error) {
        message.error("Failed to Calculate: Error occurred");
      }

  }
  fetchData();
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







