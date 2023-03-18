import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import BookingForm from './components/BookingForm';
import { fetchAPI, submitAPI } from './utils/utils';

export function initializeTimes(): string[] {
    return fetchAPI(new Date());
};

export function getDates(date: Date): string[] {
    return fetchAPI(date);
}

export function updateTimes(state: any, action: any) {
    switch (action.type) {
        case "INITIALIZE":
            return initializeTimes();
        case "GET DATE":
            return fetchAPI(action.data);
        default:
            return state;
    }
};


export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitFormData = (datas: any): void => {
        if (submitAPI(datas)) {
            navigate("/success");
        }
    }

    return (
        <BookingForm submitFormData={submitFormData} availableTimes={availableTimes} setDates={dispatch} />
    )
}