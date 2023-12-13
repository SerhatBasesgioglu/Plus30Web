import lollobby from "./LolLobby.png";

const HomePage = () => {
  return (
    <div>
      <h1>PLUS30 by AyDaKaR</h1>

      <p>
        This project aims to add some quality of life features for custom game
        lobbies.
      </p>

      <h5>Current Features</h5>
      <ul>
        <li>Blacklisting blocked players</li>
        <li>Creating lobby</li>
        <li>Filtering/entering lobbies</li>
        <li>Lobby Presets</li>
      </ul>

      <h5>Will Be Added</h5>
      <ul>
        <li>Auto Invite</li>
        <li>Custom Stats</li>
        <li>Discord Integration</li>
        <li>Custom Ban/Pick System For Champion Selection</li>
      </ul>

      <img src={lollobby} />
      <h3>Technical Details</h3>
      <h4>Backend</h4>
      <p>
        I used Spring Boot to create a REST API, it communicates with the LCU
        API. Currently it is a wrapper for making requests from frontend to LCU
        API. Later on I am planning to provide a connection to a website to
        provide some extra functionalities.
      </p>
      <h4>Frontend</h4>
      <p>
        Frontend uses ReactJs, currently it can be reached through a browser
        tab, later I will make it a complete desktop app using ElectronJs.
      </p>
    </div>
  );
};

export default HomePage;
