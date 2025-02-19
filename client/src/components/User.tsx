import React from "react";



export type UserRecord = {
    name: string;
    answer: "yes" | "no" | "if-needed";
};

export type DateRecord = {
    records: UserRecord[];
    timestamp: number;

};

export const User: React.FC<UserRecord> = ({name}:UserRecord, {answer}:UserRecord )=>
{
    return(
        <tr>
        <td>{name}</td>
        <td>{answer}</td>
    </tr>
        );

};



