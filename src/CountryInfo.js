const CountryInfo = ({ data, detailed }) => {
  const Name = data.name.common;
  const Area = data.area;
  const Capital = data.capital;
  const Region = data.region;

  let ratio = Area / 17098242;
  let widthBar = ratio * 98 + "%";

  return (
    <div className="div">
      <span className="name">{Name}</span> {Area} km<sup>2</sup>
      <div className="bar" style={{ width: widthBar }}></div>
      {detailed && (
        <div>
          Capital: {Capital} <br></br> Region: {Region}
        </div>
      )}{" "}
    </div>
  );
};

export default CountryInfo;
