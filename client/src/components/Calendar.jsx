import React from 'react';
import Calendars from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




function Calendar(){

    const [date, setDate] = React.useState(new Date());

    function handleChange(){
        setDate(function(){
            return new Date();
        });
    }



    return <div>< Calendars onChange={handleChange} value={date} /></div>
}



export default Calendar;