import React from "react";
import {UserRecord} from "./User";



export type DateRecord = {
    records: UserRecord[];
    timestamp: number;

};

// @ts-ignore
export const Date: React.FC<DateRecord> = ({records}:DateRecord) =>
{
 return({records});
};



