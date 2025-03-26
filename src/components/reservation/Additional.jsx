import './Reservation.css';
import Button from '../functional_elem/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

const Additional = () => {
    let navigate = useNavigate();

    return (
        <>
            <div className='reservation-header'>
                <Button type="navigation" onClick={() => {navigate(-1)}}>
                    <FontAwesomeIcon  icon={faArrowLeft} />
                    Back
                </Button>
                <h4 className='bold'>Step 3:  Additional Info</h4>
            </div>
            <Formik
                initialValues={{
                    reminder: '',
                    email: '',
                    additionalInfo: '',
                }}
                validationSchema={Yup.object({
                    reminder: Yup.boolean(),
                    email: Yup.string()
                        .email("Invalid email address"),
                    additionalInfo: Yup.string()
                        .min(25, "Must be at least 25 characters"),
                })}
                onSubmit={() => {
                    navigate("/");
                }}
            >
                <Form>
                    <div className='form-main'>
                        <div className='reminder'>
                            <label className='lead' htmlFor="reminder">I want reminder about reservation</label>
                            <Field className='bold' name="reminder" type="checkbox" />
                        </div>

                        <label className='bold' htmlFor="email">Email</label>
                        <Field className='bold' name="email" type="email" />
                        <ErrorMessage className='highlight' name="email" />
                        <label className='bold' htmlFor="additionalInfo">Additional Info</label>
                        <Field className='bold' name="additionalInfo" as="textarea" />
                        <ErrorMessage className='highlight' name="additionalInfo" />
                    </div>
                    <button className='primary bold' type='submit'>Reserve a table</button>
                </Form>
            </Formik>
        </>
    );
};

export default Additional;