import { useState } from 'react'

import { IconChartBarPopular } from '@tabler/icons-react'

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

  
  const [ climbs, logClimbs ]  = useState({
    V4: 10,
  });
  console.log(climbs); //! Delete later, debug only
  
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
        <NumberOf label="V4" value={climbs.V4} setValue={() => {
          logClimbs({ ...climbs, V4: climbs.V4 + 1 })
        }} />
      </div>

      <div className="logger_box">
        <Button  >Log</Button>
      </div>

    </MantineProvider>
  )

}

export default App
