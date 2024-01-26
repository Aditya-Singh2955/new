"use client";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const page = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!selectedDate || !selectedTime) {
      setError("Please select both date and time.");
    } else {
      console.log("Selected Date:", selectedDate);
      console.log("Selected Time:", selectedTime);
      setError("");
      // If both date and time are selected, navigate to "/abou"
      window.location.href = "/abou";
    }
  };

  return (
    <div className="date">
      <div className="head">Lets Select The Date and Time</div>

      <div className="calender">
        <div className="sec-4">
          <div className="text-head">Select Date</div>
          <div className="div-fix">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Pick a Date"
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>

        <div className="sec-5">
          <div className="text-head">Select Time</div>
          <div className="div-fix">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker
                  label="Pick a Time"
                  value={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div className="submit">
        <Stack direction="row" spacing={8}>
          <Button
            style={{ height: "3rem", width: "6rem" }}
            variant="contained"
            color="success"
            onClick={handleSave}
          >
            Save
          </Button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </Stack>
      </div>
    </div>
  );
};

export default page;
