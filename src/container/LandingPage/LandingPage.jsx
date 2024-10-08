import React from "react";
import "./LandingPage.css";
//import { IoIosCheckmark } from "react-icons/io"; // Importing the checkmark icon, not used in this example
// import { IoIosCheckmark } from "react-icons/io"; // Importing the checkmark icon, not used in this example




const LandingPage = () => {

  //   const googleSheetEndpoint = process.env.REACT_APP_GOOGLE_SHEET_ENDPOINT;
  //   console.log(googleSheetEndpoint);

  //   const [submitted, setSubmitted] = useState(false);
  //   let showmess = false;
  //   const formRef = useRef(null); // Reference to the form

  //   function SubmitForm(e) {
  //       // e.preventDefault(); // Prevent form from refreshing the page

  //   const myForm = formRef.current; // Use the form reference
  //   const formData = new FormData(myForm);
  //   showmess = true

  //   console.log("Submitted");
  //   fetch(
  //       googleSheetEndpoint,
  //     {
  //       redirect: "follow",

  //       method: "POST",
  //       body: formData,

  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setSubmitted(true); // Mark the form as submitted
  //       myForm.reset(); // Reset the form to empty the input
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <div className="club__landingpage box__container section__padding" id="home">
      <div className="club__landingpage-content">
        <h1 className="p__fira-headline-yellow">MEET SHARK GPT 🦈</h1>
        <p className="p__fira landing-description">
        Just ask, and let Shark GPT guide you through all the information you need from the CSULB website. Dive into the CSULB experience like never before!
        </p>
      </div>

      <div className="club__landing-content-btn">
        <p className="p__fira headline">JOIN OUR WAITLIST</p>
        <p className="p__fira descriptions">
        Be the First to Experience Shark GPT!
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeW4ZlmGwORfw_6ABY3oDPDmkZckxBbLdlvPOKZ82_-My30IA/viewform?usp=sf_link" target="blank"><button className="button-waitlist">WAITLIST FORM</button></a>

        {/* <div className="button-wrapper"> */}

          {/* <form className="form" onSubmit={(e) => SubmitForm(e)} ref={formRef}>
            <input placeholder="                   Your Student Email" name="Email" type="text" /> */}

            {/* <button className="SubmitButton" type="submit">
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
            </button> */}
            
          {/* </form> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
