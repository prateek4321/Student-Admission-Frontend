import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./LoginStyles.css";
import { Preference } from "../../Classes/Preference";

{
  /* <option value={""}>Choose...</option>
              <option key={1} value={"CSE"}>
                Computer Science Engineering (CSE){" "}
              </option>
              <option key={2} value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option key={3} value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option key={4} value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option key={5} value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option key={6} value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option> */
}

const ChoosePreferences = () => {
  const [selectedPref, setSelectedPref] = useState([]);
  const [isError, setIsError] = useState(false);
  const [[progress, setProgress], [formData, setFormData]] = useOutletContext();
  let [chosenPref, setChosenPref] = useState([]);
  const navigate = useNavigate();

  const error = "All the Preferences must be filled in order!";
  const nextPage = "/applicant/first_login/success";

  // let listArray = [
  //   <option key={1} value={"CSE"}>
  //     Computer Science Engineering (CSE){" "}
  //   </option>,
  //   <option key={2} value={"CCE"}>
  //     Computer and Communication Engineering (CCE){" "}
  //   </option>,
  //   <option key={3} value={"ECE"}>
  //     Electrical and Communication Engineering (ECE){" "}
  //   </option>,
  //   <option key={4} value={"MME"}>
  //     Mechanical and Mechatronics Engineering (MME){" "}
  //   </option>,
  //   <option key={5} value={"DCS"}>
  //     Dual Degree Computer Science Engineering (DCS){" "}
  //   </option>,
  //   <option key={6} value={"DEC"}>
  //     Dual Degree Electrical and Communication Engineering (DEC)
  //   </option>,
  // ];

  let flag = false;

  const p = new Preference();

  const handleChange = (e) => {
    setSelectedPref((arr) => [...arr, e.target.value]);
    setChosenPref([...chosenPref, e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(progress + 20);

    p.dsp = chosenPref;
    p.waiting = 10000;

    console.log(p);
    setFormData({ ...formData, p });
    // console.log(formData);

    navigate(nextPage);
  };

  return (
    <div>
      <Form method="post" className="details-form" onSubmit={handleSubmit}>
        <h1>Enter Your Academic Details</h1>
        <br />
        <Row className="mb-3">
          <div className="error">{isError ? error : ""}</div>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 1</Form.Label>
            <Form.Select
              required
              size="lg"
              defaultValue="Choose..."
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Choose...</option>
              <option key={1} value={"CSE"}>
                Computer Science Engineering (CSE){" "}
              </option>
              <option key={2} value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option key={3} value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option key={4} value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option key={5} value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option key={6} value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 2</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Choose...</option>
              <option key={1} value={"CSE"}>
                Computer Science Engineering (CSE){" "}
              </option>
              <option key={2} value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option key={3} value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option key={4} value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option key={5} value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option key={6} value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 3</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={handleChange}
            >
              <option value={""}>Choose...</option>
              <option key={1} value={"CSE"}>
                Computer Science Engineering (CSE){" "}
              </option>
              <option key={2} value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option key={3} value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option key={4} value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option key={5} value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option key={6} value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 4</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={handleChange}
            >
              <option value={""}>Choose...</option>
              <option key={1} value={"CSE"}>
                Computer Science Engineering (CSE){" "}
              </option>
              <option key={2} value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option key={3} value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option key={4} value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option key={5} value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option key={6} value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 5</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={handleChange}
            >
              <option value={""}>Choose...</option>
              <option key={1} value={"CSE"}>
                Computer Science Engineering (CSE){" "}
              </option>
              <option key={2} value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option key={3} value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option key={4} value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option key={5} value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option key={6} value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 6</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={handleChange}
            >
              <option value={""}>Choose...</option>
              <option key={1} value={"CSE"}>
                Computer Science Engineering (CSE){" "}
              </option>
              <option key={2} value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option key={3} value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option key={4} value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option key={5} value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option key={6} value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button size="lg" variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ChoosePreferences;
