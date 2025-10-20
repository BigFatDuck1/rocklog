import { useState, useEffect } from 'react'

import { IconChartBarPopular, IconDeviceFloppy } from '@tabler/icons-react'

import './App.css'
//Mantine
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, Button } from '@mantine/core';
//Components
import DatePicker from './components/DatePicker.jsx'
import NumberOf from './components/NumberOf.jsx'


function App() {

  const [date, setDate] = useState(new Date());

  
  const [ climbs, logClimbs ]  = useState(0);

  useEffect(() => {
    window.localStorage.setItem('V4', JSON.stringify(climbs));
    console.log(window.localStorage.getItem("V4"));
  }, [ climbs ]);
  
  return (
    <MantineProvider defaultColorScheme="dark" >

      <div className="header global_header" >
        {/* Clicking title displays global stats */}
        <h1>RockLog</h1>
        <IconChartBarPopular size={"2rem"} stroke={1.5} />
      </div>

      <div className="date_box">
        <DatePicker date={date} setDate={setDate} />
      </div>

      <div className="items">
        <NumberOf label="V4" value={climbs} setValue={logClimbs} />
      </div>

      <div className="logger_box">
        <Button leftSection={<IconDeviceFloppy />} onClick={() => {
          console.log(window.localStorage.getItem('V4'))
          }} >Log</Button>
      </div>

    </MantineProvider>
  )

}

export default App
