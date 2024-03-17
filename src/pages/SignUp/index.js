import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  Row,
  Form,
  Alert,
} from "react-bootstrap";
import { supabase } from "../../utils/supabase";
import { useNavigate, useNavigation } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: dataUser, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      console.log(dataUser);
      if (dataUser.user) {
        navigate("/login");
      }
      if (error) {
        console.log(error);
        setError("Invalid login credentials");
      }
    } catch (error) {
      // console.log(error)
    }
  };
  const clearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          {error}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="mb-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div style={{ width: "100%" }}>
          <Button variant="primary" type="submit" style={{ margin: "5px" }}>
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
