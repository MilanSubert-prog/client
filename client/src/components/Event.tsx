import React from "react";
import { DateRecord } from "./Date";

type EventProps = {
  location: "Hradec Králové";
  id: 1;
  title: "Fotbalový zápas";
  dates: DateRecord[];
};


export const Event: React.FC<EventProps> = ({ location }: EventProps, { title }: EventProps, { dates }: EventProps) => {
  return (
    <>
      <h3> Místo události: {location} </h3>
      <h3> Popis události: {title} </h3>
      <table>
        <thead>
          <th>Osoba</th>
          // @ts-ignore
          <th></th>

        </thead>
        <tbody>

          ???????????????????????????????

        </tbody>
      </table>
    </>
  );
};
