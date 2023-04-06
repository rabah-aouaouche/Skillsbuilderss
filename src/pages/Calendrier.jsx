import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterDiv/Footer";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule/src";

function Calendrier() {
  return (
    <div>
      <Navbar />
      <ScheduleComponent
        currentView="Week"
        selectedDate={new Date(Date.UTC(2023, 3, 6))}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      <Footer />
    </div>
  );
}

export default Calendrier;
