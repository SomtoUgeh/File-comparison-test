import React, { useRef, useState } from "react";
import { Formik } from "formik";
import doAlert from "utils/doAlert";
import { CompareSchema } from "utils/validationSchema";
import { Grid, Header, Input, Button, Form, Icon } from "semantic-ui-react";
import Preview from "./Preview";

const Compare = () => {
  const firstStudentFile = useRef();
  const secondStudentFile = useRef();

  const [firstFile, setFirstFile] = useState({ name: "", content: "" });
  const [secondFile, setSecondFile] = useState({ name: "", content: "" });

  const [view, setView] = useState("initial");
  const [details, setDetails] = useState([]);

  const handleFileUpload = async (e, type) => {
    let results;
    const selectedFile = e.target.files[0];

    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const reader = new FileReader();

      reader.onload = event => {
        results = {
          ...results,
          content: event.target.result
        };

        if (type === "first") {
          results.name = selectedFile.name;
          setFirstFile(results);
        } else {
          results.name = selectedFile.name;
          setSecondFile(results);
        }
      };

      reader.readAsText(selectedFile);
    } else {
      doAlert("Your browser is too old to support HTML5 File API", "error");
    }
  };

  const handleFormSubmit = ({ firstStudent, secondStudent }, setSubmitting) => {
    if (setSubmitting !== undefined) {
      setSubmitting(true);

      let validArr;
      let checked = [];
      let details = [
        { ...firstFile, student: firstStudent },
        { ...secondFile, student: secondStudent }
      ];

      details.map(file => {
        if (file.content.length === 0) {
          file = {
            ...file,
            error: true
          };
        }

        checked.push(file);
      });

      validArr = checked.filter(file => file.error);

      if (validArr.length !== 0) {
        doAlert("Please submit file for student!", "error");
        setSubmitting(false);
      } else {
        setDetails(details);
        setView("preview");
      }
    }
  };

  const initialValues = {
    firstStudent: "",
    secondStudent: ""
  };

  return (
    <div>
      <Header as="h1">Compare documents</Header>
      <p>Please enter the names of the students and upload their documents</p>

      {view === "preview" ? (
        <Preview details={details} />
      ) : (
        <Grid.Column style={{ marginTop: "3rem" }}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Formik
                  initialValues={initialValues}
                  validationSchema={CompareSchema}
                  onSubmit={(values, { setSubmitting }) => handleFormSubmit(values, setSubmitting)}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column mobile={16} tablet={12} computer={12}>
                            <Form.Field
                              id="form-input-control-firstStudent"
                              control={Input}
                              name="firstStudent"
                              onBlur={handleBlur}
                              label="First Student"
                              onChange={handleChange}
                              value={values.firstStudent}
                              placeholder="First Student"
                              error={
                                errors.firstStudent &&
                                touched.firstStudent && {
                                  content: errors.firstStudent,
                                  pointing: "below"
                                }
                              }
                            />
                          </Grid.Column>

                          <Grid.Column
                            mobile={16}
                            tablet={4}
                            computer={4}
                            style={{ marginTop: 25 }}
                          >
                            <input
                              type="file"
                              accept=".txt"
                              name="fileUpload"
                              ref={firstStudentFile}
                              style={{ display: "none" }}
                              onChange={e => handleFileUpload(e, "first")}
                            />

                            {firstFile && firstFile.name ? (
                              <div className="file-name">
                                {firstFile.name}

                                <div
                                  className="cancel"
                                  onClick={() => setFirstFile({ name: "", content: "" })}
                                >
                                  x
                                </div>
                              </div>
                            ) : (
                              <Button
                                icon
                                type="button"
                                labelPosition="left"
                                onClick={() => firstStudentFile.current.click()}
                              >
                                <Icon name="arrow up" />
                                Upload file
                              </Button>
                            )}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>

                      <Grid>
                        <Grid.Row>
                          <Grid.Column mobile={16} tablet={12} computer={12}>
                            <Form.Field
                              id="form-input-control-secondStudent"
                              control={Input}
                              name="secondStudent"
                              onBlur={handleBlur}
                              label="Second Student"
                              onChange={handleChange}
                              value={values.secondStudent}
                              placeholder="Second Student"
                              error={
                                errors.secondStudent &&
                                touched.secondStudent && {
                                  content: errors.secondStudent,
                                  pointing: "below"
                                }
                              }
                            />
                          </Grid.Column>

                          <Grid.Column
                            mobile={16}
                            tablet={4}
                            computer={4}
                            style={{ marginTop: 25 }}
                          >
                            <input
                              type="file"
                              accept=".txt"
                              name="fileUpload"
                              ref={secondStudentFile}
                              style={{ display: "none" }}
                              onChange={e => handleFileUpload(e, "second")}
                            />

                            {secondFile && secondFile.name ? (
                              <div className="file-name">
                                {secondFile.name}

                                <div
                                  className="cancel"
                                  onClick={() => setSecondFile({ name: "", content: "" })}
                                >
                                  x
                                </div>
                              </div>
                            ) : (
                              <Button
                                icon
                                type="button"
                                labelPosition="left"
                                onClick={() => secondStudentFile.current.click()}
                              >
                                <Icon name="arrow up" />
                                Upload file
                              </Button>
                            )}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>

                      <Button color="teal" fluid type="submit" style={{ marginTop: "5rem" }}>
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      )}
    </div>
  );
};

export default Compare;
