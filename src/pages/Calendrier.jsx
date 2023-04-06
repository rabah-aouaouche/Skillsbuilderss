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
      <div className="max-w-[800px] mt-[-20px] w-full h-[200px] mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          CALENDRIER
        </h1>
      </div>

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
