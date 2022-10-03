// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
import EventComponent from "./events/EventComponent";
import { Parent } from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
  return (
    <div>
      <EventComponent />
      <UserSearch />
    </div>
  );
};

// 5) Show the component on the screen.
root.render(<App />);
