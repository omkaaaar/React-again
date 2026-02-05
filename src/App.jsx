import Counter from "./Components/Counter";
import ShowHide from "./Components/ShowHide";
import "./App.css";
import Profile from "./Components/Profile";

const App = () => {
  const users = [
    { name: "Omkar", age: 25, address: "Goa" },
    { name: "Shravani", age: 24, address: "Pune" },
    { name: "Rohini", age: 23, address: "Bangalore" },
    { name: "Anshuk", age: 23, address: "Belgaum" },
    { name: "Steven", age: 24, address: "Pune" },
    { name: "Sadiya", age: 23, address: "Bangalore" },
    { name: "Rishab", age: 23, address: "Belgaum" },
  ];
  return (
    <div className="app">
      <section className="pane pane-counter">
        <Counter />
      </section>
      <section className="pane pane-showhide">
        <ShowHide />
      </section>
      <section className="pane pane-profile">
        <Profile  users={users}/>
      </section>
    </div>
  );
};

export default App;
