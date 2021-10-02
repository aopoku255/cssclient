import React from 'react';
import knust from "../assets/knust.png"

const KnustBadge = () => {
  return (
    <div className="bg-dark text-center d-flex justify-content-center align-items-center text-light">
      <a href="/" title="home"><img src={knust} alt="knust logo" width="70px"/></a>
    <div className="mx-2 myfont">
    <h6>Kwame Nkrumah University Of Science and Technology</h6>
    </div>
    <a href="/" title="home"><img src={knust} alt="knust logo" width="70px"/></a>
    </div>
  );
}

export default KnustBadge;
