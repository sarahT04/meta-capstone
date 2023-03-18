import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";

import AdditionalInformation from './AdditionalInformation';
import '../styles/BookingForm.css';
import PeopleComponent from './PeopleComponent';
import { BackButton, SmallLogo } from '../lib/svg/FormSVG';
import ConfirmationDialogue from './ConfirmationDialogue';

interface BookingTypes {
    availableTimes: string[],
    setDates: React.Dispatch<any>,
    submitFormData: (datas: any) => void;
}

function changeDate(date: Date) {
    const options = { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' } as const;
    return date.toLocaleDateString("en-GB", options);
}

interface DatePickerTypes {
    setProvidedDate: (date: Date) => void;
    setDate: React.Dispatch<React.SetStateAction<Date>>
}

function DatePicker({ setProvidedDate, setDate }: DatePickerTypes) {
    const now = new Date();
    return (
        <input type="date"
            className="date paragraph"
            data-date={changeDate(now)}
            onChange={(e) => {
                setDate(new Date(e.target.value))
                const currDate = new Date(e.target.value);
                setProvidedDate(currDate)
                const newValue = changeDate(currDate);
                e.target.setAttribute('data-date', newValue);
            }}
            min={now.toISOString().split("T")[0]}
            max={new Date(now.setDate(now.getDate() + 14)).toISOString().split("T")[0]}
        />
    )
}


export default function BookingForm({ submitFormData, availableTimes, setDates }: BookingTypes): JSX.Element {
    const [peopleAmount, setPeopleAmount] = useState(0);
    const [occasion, setOccasion] = useState(0);
    const [checkmark, setCheckmark] = useState([1])
    const [confirmation, setConfirmation] = useState(false);
    const [time, setTime] = useState(availableTimes[0]);
    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();
    const setProvidedDate = (date: Date) => {
        setDates({ type: "GET DATE", data: date })
    }

    return (
        <Formik
            initialValues={{ email: '', name: '' }}
            validate={(values) => {
                const errors: { name?: string; email?: string; } = {};
                if (values.name.length === 0) {
                    errors.name = "Required Field."
                }
                if (values.email.length === 0) {
                    errors.email = 'Required Field.';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    const allValues = { ...values, time, date, checkmark, occasion, peopleAmount }
                    alert(JSON.stringify(allValues, null, 2));
                    submitFormData(true)
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isValid, submitForm }) => (
                <Form className="form-container" style={confirmation ? { overflowY: 'hidden', height: '100vh' } : {}}>
                    <nav className="reserve-nav">
                        <div onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                            <BackButton />
                        </div>
                        <h1 className='section-title'>Reserve a Table</h1>
                        <SmallLogo />
                    </nav>
                    {/* Name and email */}
                    <div className="container">
                        <h1 className="lead-text mb-12">Contact Information</h1>
                        <label htmlFor='name'>
                            <h3 className="paragraph">Name</h3>
                        </label>
                        <Field type="text" name="name" placeholder="John Doe" className="form-input paragraph" />
                        <ErrorMessage name="name" component="div" className='error-text' />
                        <label htmlFor='email'>
                            <h3 className="paragraph mt-12">Email</h3>
                        </label>
                        <Field type="email" name="email" placeholder="foo@bar.com" className="form-input paragraph" />
                        <ErrorMessage name="email" component="div" className='error-text' />
                        {/* Date and time */}
                        <h1 className="lead-text mt-24 mb-9">Reservation Date and Time</h1>
                        <DatePicker setProvidedDate={setProvidedDate} setDate={setDate} />
                        <select className="time paragraph" onChange={(e) => setTime(e.target.value)}>
                            {
                                availableTimes.map((time, idx) => (
                                    <option key={idx} value={time}>{time}</option>
                                ))
                            }
                        </select>
                        {/* Amount of people */}
                        <h1 className="lead-text mt-24">Number of people</h1>
                        <PeopleComponent peopleAmount={peopleAmount} setPeopleAmount={setPeopleAmount} />
                        <AdditionalInformation
                            checkmark={checkmark}
                            setCheckmark={setCheckmark}
                            occasion={occasion}
                            setOccasion={setOccasion}
                        />
                        <h1 className="lead-text mt-24">Please notice that...</h1>
                        <ul className="paragraph">
                            <li>Your reservation confirmation will be sent into your e-mail so please make sure your contact information is correct.</li>
                            <li>If you don't arrive by 30 minutes we will give your table to someone else.</li>
                            <li>There is an extra service charge of 50 cents by using our online reservation.</li>
                        </ul>
                    </div>
                    <div className="reserve-container">
                        <button aria-label="reserve button" title="Reserve" type="button" className="yellow-rounded lead-text" onClick={() => setConfirmation(true)}>
                            Reserve
                        </button>
                    </div>
                    <ConfirmationDialogue isValid={isValid} submitData={submitForm} confirmation={confirmation} setConfirmation={setConfirmation} />
                </Form>
            )}
        </Formik>
    )
}