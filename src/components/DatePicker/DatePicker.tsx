import React, { useState } from "react";

import type { Dayjs } from "dayjs";
import { DatePickerCalendar } from "./DatePickerCalendar/DatePickerCalendar";
import { DatePickerSelector } from "./DatePickerSelector/DatePickerSelector";

import "./DatePicker.css";

export interface IDatePickerProps {
  selectedDate: Dayjs;
  selectorDateFormat?: string;

  onChange: (newDate: Dayjs) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  selectedDate,
  onChange,
}) => {
  const [shownDate, setShownDate] = useState(selectedDate.clone());

  return (
    <div className={"DatePicker"}>
      <DatePickerSelector shownDate={shownDate} setShownDate={setShownDate} />

      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
      />
    </div>
  );
};
