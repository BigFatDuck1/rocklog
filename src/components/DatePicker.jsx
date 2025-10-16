import { MiniCalendar } from '@mantine/dates';
import { useState } from 'react';


const DatePicker = ({ date, setDate }) => {

    return <MiniCalendar value={date} onChange={setDate} />;
}

export default DatePicker;
