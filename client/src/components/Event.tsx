import React from "react";
import { AnswerType, Timestamp, User, UserRecord } from "./User";

type EventProps = {
  location: string;
  id: number;
  title: string;
  dates: DateRecord[];
};

export type DateRecord = {
  records: UserRecord[];
  timestamp: number;
};

type UserName = string;

type UserEntry = {
  name: UserName;
  votes: Map<Timestamp, { timestamp: Timestamp; answer?: AnswerType }>;
};

type UserEntryArray = {
  name: UserName;
  votes: Array<{ timestamp: Timestamp; answer?: AnswerType }>;
};

const getUsersFromDates = (dates: DateRecord[]): { dates: number[]; votes: UserEntryArray[] } => {
  // ocekavejme unikatni jmeno pro zjednoduseni
  const allVotes = new Map<UserName, UserEntry>();
  const allDates: number[] = [];

  dates.forEach((date) => {
    allDates.push(date.timestamp);
    date.records.forEach((userRecord) => {
      const userVotes: UserEntry = allVotes.get(userRecord.name) || { name: userRecord.name, votes: new Map() };
      userVotes.votes.set(date.timestamp, { timestamp: date.timestamp, answer: userRecord.answer });
      allVotes.set(userRecord.name, userVotes);
    });
  });

  // dorovnat data
  const votes = Array.from(allVotes.values());
  votes.forEach((userVote) => {
    if (userVote.votes.size !== allDates.length) {
      allDates.forEach((date) => {
        if (!userVote.votes.has(date)) {
          userVote.votes.set(date, { timestamp: date });
        }
      });
    }
  });

  // nevime jiste poradi dle data, lepe seradit
  return {
    dates: allDates.sort((a, b) => a - b),
    votes: votes.map((v) => {
      const sortedVotes = Array.from(v.votes.values()).sort((a, b) => a.timestamp - b.timestamp);
      return {
        name: v.name,
        votes: sortedVotes
      };
    })
  };
};
export const Event: React.FC<EventProps> = ({ location, title, dates }: EventProps) => {
  const users = getUsersFromDates(dates);

  return (
    <>
      <h3> Místo události: {location} </h3>
      <h3> Popis události: {title} </h3>
      <table>
        <thead>
          <tr>
            <th>Osoba</th>
            {users.dates.map((date) => (<th key={date}>{new Date(date).toLocaleDateString()}</th>))}
          </tr>
        </thead>
        <tbody>
          {users.votes.map((vote) => <User key={vote.name} name={vote.name} votes={vote.votes} />)}
        </tbody>
      </table>
    </>
  );
};
