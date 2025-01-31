import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import PuppyList from "./features/puppies/PuppyList";
import { PuppyDetails } from "./features/puppies/PuppyDetails";
import PuppyForm from "./features/puppies/PuppyForm";

import "./App.scss";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState(null);

  return (
    <Provider store={store}>
      <h1>Puppy Bowl</h1>
      <PuppyForm />
      <main>
        <PuppyList setSelectedPuppyId={setSelectedPuppyId} />
      </main>
      <PuppyDetails
        selectedPuppyId={selectedPuppyId}
        setSelectedPuppyId={setSelectedPuppyId}
      />
    </Provider>
  );
}
