import './Reservation.css';
import Button from '../functional_elem/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
const Info = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className='reservation-header'>
                <Button type="navigation" onClick={() => {navigate(-1)}}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back
                </Button>
                <h4 className='bold'>Step 2: Reservation Info</h4>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    numberOfpeople: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, "Must be a 15 characters or less")
                        .required("Required"),
                    numberOfpeople: Yup.number()
                        .moreThan(0, "Must be more than 0")
                        .lessThan(4, "Max number of people is 4")
                        .required("Required "),
                })}
                onSubmit={() => {
                    navigate("/reservation/additional");
                }}
            >
                <Form>
                    <div className='form-main'>
                        <label className='bold' htmlFor="date">Name</label>
                        <Field className='bold' name="name" type="text" />
                        <ErrorMessage className='highlight' component="span" name="name" />
                        <label className='bold' htmlFor="numberOfpeople">Number of people</label>
                        <Field className='bold' name="numberOfpeople" type="number" />
                        <ErrorMessage className='highlight' component="span" name="numberOfpeople" />
                    </div>
                    <button className='primary bold' type='submit'>Next step</button>
                </Form>
            </Formik>
        </>
    );
};

export default Info;