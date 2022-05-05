import React from "react";

import Banner from "../../components/Banner";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Services() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
    </div>
  );
}

export default Services;
