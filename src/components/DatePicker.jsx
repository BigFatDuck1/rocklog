import { MiniCalendar } from '@mantine/dates';

const DatePicker = ({ date, setDate }) => {

    return <MiniCalendar value={date} onChange={setDate} />;
}

export default DatePicker;
