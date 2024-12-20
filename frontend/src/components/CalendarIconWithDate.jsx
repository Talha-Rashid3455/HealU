import React from "react";

function CalendarIconWithDate(props) {
  const date = props.date; // Specify the date you want to display

  return (
    <div className="flex flex-col -ml-2 items-center justify-center w-16 h-14 mt-2 border-2 border-custompurple rounded-lg bg-blue-100 relative">
      {/* Top bar (representing the calendar header) */}
      <div className="absolute top-0 w-full bg-custompurple h-3 rounded-t-lg"></div>
      
      {/* Date */}
      <span className="text-2xl font-bold text-custompurple">{date}</span>
    </div>
  );
}

export default CalendarIconWithDate;
