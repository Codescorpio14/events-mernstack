import { Link } from "react-router-dom";

const EventCard = ({ data }) => {
  const { title, description, image, id } = data;
  return (
    <div className="max-w-80 shadow-md shadow-gray-200 ">
      <img
        src={image}
        alt={id}
        className="rounded-md w-full object-cover max-h-60"
      />
      <div className="p-4">
        <Link to={id}>
          <h2 className="text-xl font-bold hover:text-blue-500">{title}</h2>
        </Link>
        <p className="my-2">{description.slice(1, 70)}...</p>
      </div>
    </div>
  );
};

export default EventCard;
