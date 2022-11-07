import React from "react";
import Banner from "../../components/Banner";
import List from "../../components/List";
import Text from "../../components/Text";
import { organizationData } from "./organizationData";

const bannerPath = `${window.location.origin}/assets/images/vegfood.jpg`;

const Organizations = () => {
  return (
    <>
      <Banner picturePath={bannerPath} />
      <section className="inner-container">
        <p>
          I am dedicated to helping you achieve your optimal health, let’s work
          together to see how we can help conquer your health-related
          challenges! Initial consultation plus 1 follow-up session:
          <br />
          <List data={organizationData}/>
          <br />
          **Sessions to be within a 3- month timeframe from time of initial
          consultation Initial consultation plus 6 follow-up sessions:  7 total
          sessions, initial of 75-90 minutes and follow-ups of 45 minutes 
          Support via your preferred communication method in between sessions 
          Personalized resources to help you achieve your goals  Initial:
          Review of medical history, health-related goals and challenges to
          achieving such, and dietary patterns, and creation of a customized
          plan with small goals set to help achieve your larger goal(s). 
          Follow-up: We will discuss your progress, brainstorm ways to address
          challenge areas, celebrate your successes, and adjust or set new
          health-related goals. **Sessions to be within a 6-month timeframe from
          time of initial consultation Plant-Powered Weight Loss and Wellness
          Programs Nature’s Wellness Path’s Plant-Powered Programs are right for
          you if you are: ● Sick of dieting, counting calories, &amp; cutting
          portion sizes to try to lose weight? ● Fed up with feeling like a
          failure for falling off track with your diet or health-related goals?
          ● Dreaming of the day when you will have more energy and less joint
          pain to do the activities you enjoy? ● Wanting to improve your blood
          pressure, cholesterol, and blood sugar without medications? ● Looking
          to improve your skin, gut, and brain health? ● Curious about trying
          out a plant-based diet but not sure how to get started? ● Ready to
          take greater control of your health? You deserve to experience
          abundant energy &amp; optimal health! I am happy and humbled to help
          guide you on your journey to achieve such! **Options for 4-, 8-, and
          12-week programs Book a free discovery call with me today so we can
          discuss your health-related challenges, goals, and how we can work
          together to get you on the path to optimal health!
        </p>
        {/* <Text data={organizationData} /> */}
      </section>
    </>
  );
};

export default Organizations;
