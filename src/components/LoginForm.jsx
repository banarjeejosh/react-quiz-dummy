import React , { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = ({users}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { login , currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("currentUser") !== null){
      navigate("/quiz");
      }
    }, []);

  async function handleSubmit(e) {
   e.preventDefault();

   try {
    //  const user = users.find((user) => (user.email === email && user.password === password))
    //  if(user === undefined) {
    //   setLoading(false);
    //   setError("Failed to login!");
    //  } else{
    //    setLoading(true);
    //    navigate("/quiz", { user: user })
    //  }
    await login(users,email, password);

   } catch (err) {
     console.log(err);
     setLoading(false);
     setError("Failed to login!");
   }
 }

  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        {/* Don't have an account? <Link to="/signup">Signup</Link> instead. */}
      </div>
    </Form>
  )
}

export default LoginForm