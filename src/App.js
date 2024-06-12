import { useState } from "react";

const message = [
  "learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const step = 3;
  function handlePrevious() {
    if (step > 1) setStep((prevValue) => prevValue - 1);
  }
  function handleNext() {
    if (step < 3) setStep((prevValue) => prevValue + 1);
  }
  function handleToggle() {
    setIsOpen((prevValue) => !prevValue);
  }
  return (
    <>
      <button style={{ backgroundColor: "#7950f2", color: "#fff", border: 'none' }} onClick={handleToggle}>
        {isOpen ? 'x' : '+'}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {message[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
