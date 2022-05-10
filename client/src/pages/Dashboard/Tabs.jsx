import React from 'react';
import dashStore from './dashStore.js';
import { Button } from '@mantine/core';

function Tabs() {

  const active = dashStore((state) => state.active);
  const given = dashStore((state) => state.given);
  const received = dashStore((state) => state.received);
  const setAct = dashStore((state) => state.setAct);
  const setGiv = dashStore((state) => state.setGiv);
  const setRec = dashStore((state) => state.setRec);

  const handleActiveClick = () => {
    console.log('a')
    setAct(true)
    setGiv(false)
    setRec(false)
  }

  const handleGivenClick = () => {
    console.log('g')
    setAct(false)
    setGiv(true)
    setRec(false)
  }

  const handleReceivedClick = () => {
    console.log('r')
    setAct(false)
    setGiv(false)
    setRec(true)
  }

  return (
    <>
      <Button color="blue" radius="md" size="sx" onClick={handleActiveClick}>Active</Button>
      <Button color="blue" radius="md" size="sx" onClick={handleGivenClick}>Given</Button>
      <Button color="blue" radius="md" size="sx" onClick={handleReceivedClick}>Received</Button>
    </>
  )
}

export default Tabs;