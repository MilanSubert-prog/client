import React from "react";
import { Event, DateRecord } from "./components/Event";

type TestData = { id: number; title: string; location: string; dates: DateRecord[] };

const testData: TestData = {
  id: 1,
  title: "Demo event",
  location: "Praha",
  dates: [
    {
      timestamp: new Date("2025-2-26").getTime(),
      records: [
        { name: "Lada", answer: "yes" },
        { name: "Riha", answer: "no" },
      ],
    },
    {
      timestamp: new Date("2025-2-28").getTime(),
      records: [
        { name: "Tomas", answer: "if-needed" },
      ],
    },
    {
      timestamp: new Date("2025-2-27").getTime(),
      records: [
        { name: "Lada 2", answer: "yes" },
        { name: "Riha", answer: "yes" },
      ],
    },

  ],
};

const App: React.FC = () => {
  return (
    <div>
      <Event location={testData.location} id={testData.id} title={testData.title} dates={testData.dates} />
    </div>
  );
};

export default App;
