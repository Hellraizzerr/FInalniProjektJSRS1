import MainPg from "./Main.js";

export default function Cars() {
  let MazdaRX7fd = {
    carName: "Mazda RX7 FD",
    engine: "Twin-chamber rotary, twin-turbo",
    year: "1995",
    baseHP: "237bhp",
    maxTorque: "218lb-ft",
    weight: "1284kg"
  };

  let SupraMK4 = {
    name: "Toyota Supra A80",
    engine: "Inline 6 2JZ-GTE",
    year: "1998",
    baseHP: "321bhp",
    maxTorque: "315lb-ft",
    weight: "1361kg"
  };

  let R34Skyline = {
    name: "Nissan R34 Skyline",
    engine: "twin-turbocharged RB26DETT I6",
    year: "1998",
    baseHP: "276bhp",
    maxTorque: "260lb-ft",
    weight: "1560kg"
  };

  return (
    <div>
      <MainPg infoOne={MazdaRX7fd} infoTwo={SupraMK4} infoThree={R34Skyline} />
    </div>
  );
}
