import { useGetPuppiesQuery } from "../../store/api";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
import PropTypes from "prop-types";

export default function PuppyList({ setSelectedPuppyId }) {
  PuppyList.propTypes = {
    setSelectedPuppyId: PropTypes.func.isRequired,
  };

  // Fetch data from getPuppies query
  const { data: puppies = [], error, isLoading } = useGetPuppiesQuery();

  if (isLoading) {
    return <li>Loading puppies...</li>;
  }

  if (error) {
    return <li>Error loading puppies: {error.message}</li>;
  }

  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {puppies.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => setSelectedPuppyId(p.id)}>
              See details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
