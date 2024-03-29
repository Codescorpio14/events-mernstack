import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await fetch(
        "https://eventsbackend-7ady.onrender.com/event-categories"
      );
      if (!res.ok) throw Error({ message: "Fetching Error" });
      const data = await res.json();
      setCategories(data.categoryData);
    }
    getCategories();
  }, []);

  const categoryCards = categories.map((cat) => (
    <EventCard key={cat.id} data={cat} />
  ));

  return (
    <section>
      <article className="bg-blue-500 py-40">
        <h1 className="text-4xl text-white font-bold text-center">
          All Events in Your Area
        </h1>
      </article>
      <article className="p-4 my-16 flex flex-wrap justify-around items-center gap-8">
        {categories.length > 0 ? (
          categoryCards
        ) : (
          <h1 className="text-2xl font-semibold">Loading...</h1>
        )}
      </article>
    </section>
  );
};

export default Home;
