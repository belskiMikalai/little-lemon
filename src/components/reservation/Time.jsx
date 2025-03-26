
import './Reservation.css';
import Button from '../functional_elem/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
const Time = () => {
    const avaliableTime = [
        {
            id: 0,
            time: "18:00",
        },
        {
            id: 1,
            time: "19:00",
        },
        {
            id: 2,
            time: "20:00",
        }];
    let navigate = useNavigate();
    return (
        <>
            <div className='reservation-header'>
                <Button type="navigation" onClick={() => {navigate(-1)}}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Home
                </Button>
                <h4 className='bold'>Step 1:  Time Arrangment</h4>
            </div>
            <Formik
                initialValues={{
                    time: '18:00',
                    date: '',
                }}
                validationSchema={Yup.object({
                    time: Yup.mixed()
                        .oneOf(avaliableTime.map(({time}) => time), "Invalid time")
                        .required("Required "),
                    date: Yup.date()
                        .min(new Date())
                        .required("Required "),
                })}
                onSubmit={() => {
                    navigate("/reservation/info");
                }}
            >
                <Form>
                    <div className='form-main'>
                        <label className='bold' htmlFor="time">Time</label>
                        <Field className="bold" name="time" as="select">
                            {avaliableTime.map(({id, time}) =>
                                <option key={id} value={time}>{time}</option>
                            )}
                        </Field>
                        <ErrorMessage className='highlight' component="span" name="time" />
                        <label className='bold' htmlFor="date">Date</label>
                        <Field className='bold' name="date" type="date" />
                        <ErrorMessage className='highlight' component="span" name="date" />
                    </div>

                    <button className='primary bold' type='submit'>Next step</button>
                </Form>
            </Formik>
        </>
    );
};

export default Time;