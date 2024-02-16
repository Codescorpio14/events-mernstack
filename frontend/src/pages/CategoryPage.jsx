import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EventCard from "../components/EventCard";

const CategoryPage = () => {
  const [events, setEvents] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    async function getEvents() {
      const res = await fetch("http://localhost:8000/events");
      if (!res.ok) throw Error({ message: "Fetching Error" });
      const data = await res.json();
      setEvents(data.eventData);
    }
    getEvents();
  }, []);

  const matchedEvents = events.filter(
    (event) => event.city.toLowerCase() === cat
  );

  const eventCard = matchedEvents.map((event) => (
    <EventCard key={event.id} data={event} />
  ));

  return (
    <div>
      <Link
        to="/"
        className="px-4 py-2 mt-5 bg-blue-200 font-semibold inline-block shadow-md shadow-gray-200 rounded-md"
      >
        Go Back
      </Link>
      <h1 className="my-8 font-semibold text-xl px-4">
        All Events in <span className="uppercase">{cat}</span>
      </h1>
      <div className="flex flex-wrap gap-8 justify-around items-center my-16">
        {eventCard}
      </div>
    </div>
  );
};

export default CategoryPage;
