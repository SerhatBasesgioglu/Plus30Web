import image from "images/Plus30ScreenShot.png";
import image2 from "images/Plus30ScreenShot2.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <h1>PLUS30 by AyDaKaR</h1>

      <p>This project aims to add some quality of life features for custom game lobbies.</p>

      <p className="mt-4">
        For more info{" "}
        <a
          className="mb-4 font-bold text-blue-700"
          href="https://github.com/SerhatBasesgioglu/Plus30/blob/main/README.tr.md"
        >
          Github repository
        </a>
      </p>
      <p className="mb-4 font-bold text-blue-700"></p>

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

      <div className="flex flex-col justify-center items-center">
        <img className="m-2" src={image} alt="Lobby builder screenshot" />
        <img src={image2} alt="Lobby builder screenshot2" />
      </div>

      <p className="font-bold text-xl">Technical Details</p>
      <p className="font-semibold pt-3">Backend</p>
      <p>
        I used Spring Boot to create a REST API, it communicates with the LCU API. Currently it is a wrapper for making
        requests from frontend to LCU API. Later on I am planning to provide a connection to a website to provide some
        extra functionalities.
      </p>
      <p className="font-semibold pt-3">Frontend</p>
      <p>Frontend uses ReactJs, it is wrapped with an electron instance.</p>
    </div>
  );
};

export default Hero;
