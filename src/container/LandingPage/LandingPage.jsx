import React, { useState, useRef } from "react";
import "./LandingPage.css";
// import { IoIosCheckmark } from "react-icons/io"; // Importing the checkmark icon, not used in this example




const LandingPage = () => {

    const googleSheetEndpoint = process.env.REACT_APP_GOOGLE_SHEET_ENDPOINT;


    const [submitted, setSubmitted] = useState(false);
    let showmess = false;
    const formRef = useRef(null); // Reference to the form

    function SubmitForm(e) {
        // e.preventDefault(); // Prevent form from refreshing the page

    const myForm = formRef.current; // Use the form reference
    const formData = new FormData(myForm);
    showmess = true

    console.log("Submitted");
    fetch(
        googleSheetEndpoint,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmitted(true); // Mark the form as submitted
        myForm.reset(); // Reset the form to empty the input
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="club__landingpage box__container section__padding" id="home">
      <div className="club__landingpage-content">
        <h1 className="p__fira-headline-yellow">SHARK GPT</h1>
        <p className="p__fira landing-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="club__landing-content-btn">
        <p className="p__fira headline">JOIN OUR WAITLIST</p>
        <p className="p__fira descriptions">
          Join our waitlist and receive regular updates delivered straight to your inbox.
        </p>

        <div className="button-wrapper">
          <form className="form" onSubmit={(e) => SubmitForm(e)} ref={formRef}>
            <input placeholder="Your Email" name="Email" type="text" />

            <button className="SubmitButton" type="submit">
              {submitted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l14 0"></path>
                  <path d="M13 18l6 -6"></path>
                  <path d="M13 6l6 6"></path>
                </svg>
              )}
            </button>
            
          </form>
        </div>
        {showmess && <p className="thank-you-message p__fira">Thank you for subscribing with us!</p>}
      </div>
    </div>
  );
};

export default LandingPage;
