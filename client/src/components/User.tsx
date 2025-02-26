import React from "react";

export type Timestamp = number;
export type AnswerType = "yes" | "no" | "if-needed";
export type VotesType = Array<{ timestamp: Timestamp; answer?: AnswerType }>;
export type UserRecord = {
  name: string;
  answer: "yes" | "no" | "if-needed";
};

export type UserProps = {
  name: string;
  votes: VotesType;
};

export const User: React.FC<UserProps> = ({ name, votes }) => {
  return (
    <tr>
      <td>{name}</td>
      {votes.map((v) => <td key={v.timestamp}>{v.answer || "-"}</td>)}
    </tr>
  );
};
