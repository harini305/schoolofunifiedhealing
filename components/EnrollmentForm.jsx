"use client";

import { useState } from "react";
import { SITE } from "@/lib/content";

const HEAR_OPTIONS = ["Instagram", "Facebook", "Google search", "A friend or family member", "A teacher or student", "Walking past the school", "Other"];
const LIVE_OPTIONS = ["I currently live in Bali", "I am visiting Bali", "I am moving to Bali soon"];
const PRACTICE_OPTIONS = ["Daily", "A few times a week", "A few times a month", "Rarely", "This is new to me"];

export default function EnrollmentForm() {
  const [values, setValues] = useState({
    firstName: "", lastName: "", email: "", updates: true, age: "", gender: "",
    hear: "", living: "", country: "", experience: "", frequency: "", liability: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!values.firstName.trim()) e.firstName = "Please enter your first name.";
    if (!values.lastName.trim()) e.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Please enter a valid email address.";
    if (!values.gender) e.gender = "Please select an option.";
    if (!values.hear) e.hear = "Please select an option.";
    if (!values.living) e.living = "Please select an option.";
    if (!values.frequency) e.frequency = "Please select an option.";
    if (!values.liability) e.liability = "Please confirm you accept the participation terms.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const lines = [
      "STUDENT ENROLLMENT FORM — School Of Unified Healing",
      "",
      `Name: ${values.firstName} ${values.lastName}`,
      `Email: ${values.email}`,
      `Sign up for news and updates: ${values.updates ? "Yes" : "No"}`,
      `Age: ${values.age || "—"}`,
      `Gender: ${values.gender}`,
      `How did you hear about us?: ${values.hear}`,
      `Do you currently live in Bali, or are you visiting?: ${values.living}`,
      `Which country are you from?: ${values.country || "—"}`,
      `Your healing practice experience: ${values.experience || "—"}`,
      `How often do you engage in holistic practices?: ${values.frequency}`,
      "Liability confirmation: Accepted — aware of the nature of healing experiences, accepts the risks of participation, understands the School services are not a substitute for medical treatment, and accepts full responsibility for their spiritual and personal well being.",
    ];
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Student Enrollment — ${values.firstName} ${values.lastName}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSubmitted(true);
    window.location.href = href;
  };

  return (
    <form className="enroll-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="firstName">First Name <span className="req">*</span></label>
          <input id="firstName" type="text" autoComplete="given-name" value={values.firstName}
            onChange={(e) => set("firstName", e.target.value)} aria-invalid={!!errors.firstName} />
          <span className="error">{errors.firstName}</span>
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name <span className="req">*</span></label>
          <input id="lastName" type="text" autoComplete="family-name" value={values.lastName}
            onChange={(e) => set("lastName", e.target.value)} aria-invalid={!!errors.lastName} />
          <span className="error">{errors.lastName}</span>
        </div>
        <div className="field full">
          <label htmlFor="email">Email Address <span className="req">*</span></label>
          <input id="email" type="email" autoComplete="email" value={values.email}
            onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} />
          <span className="error">{errors.email}</span>
        </div>
        <div className="field full">
          <div className="check-row">
            <label>
              <input type="checkbox" checked={values.updates} onChange={(e) => set("updates", e.target.checked)} />
              Sign up for news and updates
            </label>
          </div>
        </div>
        <div className="field">
          <label htmlFor="age">Age</label>
          <input id="age" type="number" min="1" max="120" inputMode="numeric" value={values.age}
            onChange={(e) => set("age", e.target.value)} />
        </div>
        <fieldset className="field">
          <legend className="sr-legend">Gender <span className="req">*</span></legend>
          <div className="radio-row" role="radiogroup" aria-label="Gender">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g}>
                <input type="radio" name="gender" checked={values.gender === g} onChange={() => set("gender", g)} />
                {g}
              </label>
            ))}
          </div>
          <span className="error">{errors.gender}</span>
        </fieldset>
        <div className="field">
          <label htmlFor="hear">How Did You Hear About Us? <span className="req">*</span></label>
          <select id="hear" value={values.hear} onChange={(e) => set("hear", e.target.value)} aria-invalid={!!errors.hear}>
            <option value="" disabled>Select an option</option>
            {HEAR_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
          <span className="error">{errors.hear}</span>
        </div>
        <div className="field">
          <label htmlFor="living">Do You Currently Live in Bali, or Are You Visiting? <span className="req">*</span></label>
          <select id="living" value={values.living} onChange={(e) => set("living", e.target.value)} aria-invalid={!!errors.living}>
            <option value="" disabled>Select an option</option>
            {LIVE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
          <span className="error">{errors.living}</span>
        </div>
        <div className="field">
          <label htmlFor="country">Which Country Are You From?</label>
          <input id="country" type="text" autoComplete="country-name" value={values.country}
            onChange={(e) => set("country", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="frequency">How Often Do You Engage in Holistic Practices? <span className="req">*</span></label>
          <select id="frequency" value={values.frequency} onChange={(e) => set("frequency", e.target.value)} aria-invalid={!!errors.frequency}>
            <option value="" disabled>Select an option</option>
            {PRACTICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
          <span className="error">{errors.frequency}</span>
        </div>
        <div className="field full">
          <label htmlFor="experience">Your Healing Practice Experience</label>
          <textarea id="experience" rows="3" value={values.experience}
            onChange={(e) => set("experience", e.target.value)} />
        </div>
        <div className="field full">
          <div className="check-row">
            <label>
              <input type="checkbox" checked={values.liability} onChange={(e) => set("liability", e.target.checked)} />
              <span>
                I confirm that I am fully aware that the nature of healing involves experiences that can be
                unsettling, involve risks and at times strong release. By participation in the services of the
                School Of Unified Healing I accept all the risks of participating, especially if there are
                pre-existing health conditions. I understand the School services are not a substitute for medical
                treatment of deeper health issues. I confirm by enrolling I accept full responsibility for my
                spiritual and personal well being. <span className="req">*</span>
              </span>
            </label>
          </div>
          <span className="error">{errors.liability}</span>
        </div>
      </div>
      <button className="btn btn-dark" type="submit">Submit enrollment</button>
      {submitted ? (
        <p className="form-status" role="status">
          Your email app has opened with your enrollment details addressed to {SITE.email}.
          Please press send in your email app to complete your enrollment. Nothing has been sent yet by this website.
        </p>
      ) : (
        <p className="form-note">
          Submitting opens your email app with the completed form addressed to {SITE.email}.
          Online submission is being configured; no information is stored on this website.
        </p>
      )}
    </form>
  );
}
