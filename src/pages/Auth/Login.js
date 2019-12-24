import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { AuthContext } from "contexts/AuthContext";

const Login = () => {
  const { handleSignIn } = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: ""
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={({ name, email, password }) => handleSignIn({ name, email, password })}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Loading" : "Login"}
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Login;
