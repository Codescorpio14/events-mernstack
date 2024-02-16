import { useEffect, useState } from "react";

const EmailSubmission = ({ eventId, subscribed }) => {
  const [emailInput, setEmailInput] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function addEmail() {
      try {
        const res = await fetch(`http://localhost:8000/events/${eventId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        alert(data.message);

        if (!res.ok) {
          setError("Failed to subscribe. Please try again later.");
          throw new Error("Failed to subscribe. Please try again later.");
        }

        setEmail("");
        setError("");
        setEmailInput("");
      } catch (error) {
        setError(error.message);
      }
    }

    if (email.trim() !== "") {
      addEmail();
    }
  }, [email]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.trim())) {
      setError("Invalid email format");
      return;
    }
    setError("");
    setEmail(emailInput);
  }
  return (
    <div>
      <form className="max-w-2xl" onSubmit={handleSubmit}>
        <label className="block font-semibold py-2">
          Subscribe for Reminder {subscribed ? subscribed.length : "0"} people
          already did
        </label>
        <input
          type="email"
          className=" w-80 p-2 rounded-l-md bg-blue-100"
          name="email"
          value={emailInput}
          onChange={(e) => setEmailInput((p) => (p = e.target.value))}
          required
        />
        <button className="rounded-r-md bg-green-400 px-5 font-semibold py-2 hover:bg-green-600 hover:text-white">
          Subscribe
        </button>
        {error && (
          <label className="block text-red-600 text-sm pt-1">{error}</label>
        )}
      </form>
    </div>
  );
};

export default EmailSubmission;
