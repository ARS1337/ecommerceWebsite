import { useState } from "react";
import { Eye, EyeOff } from "react-feather";

const Email = (props) => {
  const { email, setEmail } = props;

  return (
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      required={props.required || true}
      placeholder="E-mail"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
      }}
      style={{ borderRadius: "50px" }}
    />
  );
};

const Password = (props) => {
  const { password, setPassword } = props;
  const { showPassword, setShowPassword } = props;

  return (
    <>
      <div style={{position:"relative"}}>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required={props.required || true}
          value={showPassword ? password : password.replace(/./g, "*")}
          onChange={(e) => {
            setPassword(e.target.value);
            // console.log(e.target.value)
          }}
          style={{ borderRadius: "50px" }}
        />
        <a
          href="#"
          onClick={() => {
            setShowPassword(!showPassword);
            console.log(showPassword)
            console.log(showPassword ? password : password.replace(/./g, "*"));
            console.log("ffffffffffffffffffffffffffffffffffffffffffffff")
          }}
        >
          {showPassword ? (
            <Eye
              style={{
                position: "absolute",
                right: "2em",
                top: "0.5em",
              }}
            />
          ) : (
            <EyeOff
              style={{ position: "absolute", right: "2em", top: "1em" }}
            />
          )}
        </a>
      </div>
    </>
  );
};
const Number = (props) => {
  const { number, setNumber } = props;
  console.log(props);
  return (
    <>
      <input
        type={props.type}
        required={props.required || true}
        class="form-control"
        placeholder={props.placeholder || "1-(555)-555-5555"}
        value={number}
        id="example-tel-input"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        style={{ borderRadius: "50px" }}
      />
    </>
  );
};

const SubmitButton = (props) => {
  return (
    <input
      type="submit"
      value={props.value || "Submit"}
      style={{
        backgroundColor: "#FBB03B",
        border: "0px",
        width: "100%",
        padding: "1em",
        borderRadius: "50px",
      }}
      onClick={(e) => {
        e.preventDefault()
        props.onClick();
      }}
    />
  );
};

export { Email, Password, Number, SubmitButton };
