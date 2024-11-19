import { useState } from "react";
import { useAddPuppyMutation } from "../../store/api";

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */
export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [addPuppy, { isLoading, error }] = useAddPuppyMutation();

  const postPuppy = async (event) => {
    event.preventDefault();

    // Placeholder image w/ random photos of dogs
    const imageUrl = "https://loremflickr.com/200/300/dog";

    try {
      await addPuppy({ name, breed, imageUrl }).unwrap();
      setName("");
      setBreed("");
    } catch (err) {
      console.error("Failed to add the puppy: ", err);
    }
  };

  return (
    <>
      <h2>Add a Puppy</h2>
      <form onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={isLoading}>
          Add to Roster
        </button>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>Error: {error.message}</output>}
      </form>
    </>
  );
}
