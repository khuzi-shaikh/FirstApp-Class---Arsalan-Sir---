import React from "react";
function Form() {
  return (
    <div className="Form">
      <br />
      <br />
      <h1>Ragistration Form</h1>
      <br />
      <form action="">
        <label htmlFor="">First Name: </label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Last Name: </label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Mobile No: </label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Date Of Birth: </label>
        <input type="date" />
        <br />
        <br />
        <label htmlFor="">Upload Picture: </label>
        <input type="file" />
        <br />
        <br />
        <label htmlFor="">Email-ID: </label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Address: </label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Pincode: </label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">City: </label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">State: </label>
        <input type="text" />
        <br />
        <br />
      </form>
      <button id="Button">Submit</button>
    </div>
  );
}
export default Form;
