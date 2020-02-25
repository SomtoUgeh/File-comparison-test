import React, { useContext } from "react";
import { Formik } from "formik";
import { AuthContext } from "contexts/AuthContext";
import { LoginSchema } from "utils/validationSchema";
import { Button, Form as SemanticForm, Grid, Header, Segment } from "semantic-ui-react";
import Example from "components/Modal/Example";

const Login = () => {
  const { handleSignIn } = useContext(AuthContext);

  const initialValues = {
    name: "",
    email: "",
    password: ""
  };

  return (
    <>
      <Grid style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450, margin: "0 auto" }}>
          <Header as="h2" color="teal" textAlign="center">
            Welcome to Document-Compare
            <Header.Subheader style={{ marginTop: 10, marginBottom: 40 }}>
              Log-in to compare your documents!
            </Header.Subheader>
          </Header>

          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={({ name, email, password }) => handleSignIn({ name, email, password })}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting
            }) => (
              <>
                <SemanticForm size="large" textAlign="left" onSubmit={handleSubmit}>
                  <Segment stacked>
                    <SemanticForm.Input
                      fluid
                      name="name"
                      type="name"
                      icon="user"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                      iconPosition="left"
                      placeholder="Name"
                      error={
                        errors.name &&
                        touched.name && {
                          content: "Please enter a valid name",
                          pointing: "below"
                        }
                      }
                    />

                    <SemanticForm.Input
                      fluid
                      name="email"
                      type="email"
                      icon="globe"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      iconPosition="left"
                      placeholder="E-mail address"
                      error={
                        errors.email &&
                        touched.email && {
                          content: "Please enter a valid email address",
                          pointing: "below"
                        }
                      }
                    />

                    <SemanticForm.Input
                      fluid
                      icon="lock"
                      name="password"
                      type="password"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      iconPosition="left"
                      placeholder="Password"
                      error={
                        errors.password &&
                        touched.password && {
                          content: "Please enter a password",
                          pointing: "below"
                        }
                      }
                    />

                    <Button type="submit" color="teal" fluid size="large" disabled={isSubmitting}>
                      {isSubmitting ? "Loading" : "Login"}
                    </Button>
                  </Segment>
                </SemanticForm>
              </>
            )}
          </Formik>

          <>
            <Example />
          </>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Login;
