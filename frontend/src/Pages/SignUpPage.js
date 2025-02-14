import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./styles.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Signup } from "../Classes/Signup";

//import SignUpComponent from "../Components/Raghav/SignUpComponent";

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  let applicationId = "LNMABCD001";

  //Use Ref Hooks

  const applicant_emailId = useRef(null);
  const applicant_phoneNo = useRef(null);
  const applicant_password = useRef(null);
  const applicant_rePassword = useRef(null);

  const signupObject = new Signup();

  const fetchData = async (obj) => {
    fetch(`/signUpData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: obj }),
    })
      .then((res) => {
        console.log(res);
      })
      .then((data) => {
        applicationId = data.id;
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(signedUp);
    // if (applicant_password === applicant_rePassword) {
    signupObject.email_id = applicant_emailId.current.value;
    signupObject.phone_no = applicant_phoneNo.current.value;
    signupObject.password = applicant_password.current.value;
    // }

    await fetchData(signupObject);

    setSignedUp(true);
  };
  return (
    <div>
      <div className="signup-container">
        <div className="signup-title">Welcome to the Sign-Up Page</div>
        <div className="signup-form">
          <Alert show={signedUp} variant="danger">
            <Alert.Heading>Thanks for becoming an Applicant</Alert.Heading>
            <p>
              You have successfully signed up! Your Application Id is -{" "}
              {applicationId}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Link to={"/login"}>
                <Button size="lg" variant="dark">
                  Login
                </Button>
              </Link>
            </div>
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                ref={applicant_emailId}
                size="lg"
                type="email"
                placeholder="Enter Your Email Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                ref={applicant_phoneNo}
                size="lg"
                type="numeric"
                placeholder="Enter Your 10-Digit Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={applicant_password}
                size="lg"
                type="password"
                placeholder="Type a Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                ref={applicant_rePassword}
                size="lg"
                type="password"
                placeholder="Re-type the Password"
              />
            </Form.Group>
            <Button className="mb-3" size="lg" variant="danger" type="submit">
              Sign-Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
