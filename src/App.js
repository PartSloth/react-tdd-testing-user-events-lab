import { useState } from "react";

function App() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    name: ""
  });

  function handleContactInfo(e) {
    const input = e.target.id;
    const updateContact = {
      ...contactInfo,
      [input]: e.target.value
    }
    setContactInfo(updateContact)
  };

  const [cookingIsToggled, setCookingIsToggled] = useState(false);
  const [codingIsToggled, setCodingIsToggled] = useState(false);
  const [artIsToggled, setArtIsToggled] = useState(false);
  const toggleCooking = (e) => {setCookingIsToggled(cookingIsToggled => !cookingIsToggled)}
  const toggleCoding = (e) => {setCodingIsToggled(codingIsToggled => !codingIsToggled)}
  const toggleArt = (e) => {setArtIsToggled(artIsToggled => !artIsToggled)}

  const [subscription, setSubscription] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscription(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Join Our Newsletter!</h1>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input 
            type="text"
            id="email"
            value={contactInfo.email}
            placeholder="email address"
            onChange={handleContactInfo}
          />
          <br />
          <label htmlFor="name">Name: </label>
          <input 
            type="text"
            id="name"
            value={contactInfo.name}
            placeholder="name"
            onChange={handleContactInfo}
          />
        </div>
        <div>
          <h3>Interests</h3>
          <input 
          type="checkbox"
          id="cooking"
          checked={cookingIsToggled}
          aria-checked={cookingIsToggled}
          onChange={toggleCooking}
          />
          <label htmlFor="cooking">Cooking</label>
          <input 
          type="checkbox"
          id="coding"
          checked={codingIsToggled}
          aria-checked={codingIsToggled}
          onChange={toggleCoding}
          />
          <label htmlFor="coding">Coding</label>
          <input 
          type="checkbox"
          id="art"
          checked={artIsToggled}
          aria-checked={artIsToggled}
          onChange={toggleArt}
          />
          <label htmlFor="art">Art</label>
        </div>
        <button type="submit">Subscribe</button>
      </form>
      {subscription ? <h2>Thanks for subscribing!</h2> : null}
    </main>
  );
}

export default App;
