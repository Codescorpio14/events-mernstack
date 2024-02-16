import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import EmailSubmission from "../components/EmailSubmission";

const SingleEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function getEvent() {
      const res = await fetch(
        `https://eventsbackend-7ady.onrender.com/events/${eventId}`
      );
      if (!res.ok) throw Error({ message: "Fetching Error" });
      const data = await res.json();
      setEvent(data.eventData);
    }
    getEvent();
  }, []);

  if (event) {
    return (
      <section className="p-8">
        <Link
          to={`/${event.city}`}
          className="px-4 py-2 mb-8 bg-blue-200 font-semibold inline-block shadow-md shadow-gray-200 rounded-md"
        >
          Go Back
        </Link>
        <img
          src={event.image}
          alt={event.title}
          className="max-w-3xl w-full h-full max-h-[500px]  object-cover"
        />
        <div className="my-8">
          <h2 className="text-2xl font-bold uppercase">{event.title}</h2>
          <p className="py-4 ">{event.description}</p>
        </div>
        <EmailSubmission
          eventId={event.id}
          subscribed={event.emails_registered}
        />
      </section>
    );
  } else {
    return <h1 className="text-2xl font-semibold">Loading...</h1>;
  }
};

export default SingleEvent;
