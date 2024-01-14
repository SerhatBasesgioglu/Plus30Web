import image from "images/LolLobby.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <h1>PLUS30 by AyDaKaR</h1>

      <p>This project aims to add some quality of life features for custom game lobbies.</p>

      <p className="font-bold pt-5">Current Features</p>
      <ul className="list-disc pl-5 pb-5">
        <li>Blacklisting blocked players</li>
        <li>Creating lobby</li>
        <li>Filtering/entering lobbies</li>
        <li>Lobby Presets</li>
      </ul>

      <p className="font-bold">Will Be Added</p>
      <ul className="list-disc pl-5 pb-5">
        <li>Auto Invite</li>
        <li>Custom Stats</li>
        <li>Discord Integration</li>
        <li>Custom Ban/Pick System For Champion Selection</li>
      </ul>

      <img src={image} alt="Lobby builder screenshot" />
      <p className="font-bold text-xl">Technical Details</p>
      <p className="font-semibold pt-3">Backend</p>
      <p>
        I used Spring Boot to create a REST API, it communicates with the LCU API. Currently it is a wrapper for making
        requests from frontend to LCU API. Later on I am planning to provide a connection to a website to provide some
        extra functionalities.
      </p>
      <p className="font-semibold pt-3">Frontend</p>
      <p>
        Frontend uses ReactJs, currently it can be reached through a browser tab, later I will make it a complete
        desktop app using ElectronJs.
      </p>
    </div>
  );
};

export default Hero;
