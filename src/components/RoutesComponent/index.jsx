import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Recipes from "../../pages/Recipes";
import Contact from "../../pages/Contact";
import Services from "../../pages/Services";
import CoachingPackages from "../../pages/CoachingPackages";
import WellnessPrograms from "../../pages/WellnessPrograms";
import Photography from "../../pages/Photography";
import Blogs from "../../pages/Blogs";
import FAQ from "../../pages/FAQ";
import Nutrition from "../../pages/Nutrition";
import Breakfast from "../../pages/Breakfast";
import MainCourse from "../../pages/MainCourse";
import AppetizersSnacks from "../../pages/AppetizersSnacks";
import SmoothiesDrinks from "../../pages/Smoothies&Drinks";
import Desserts from "../../pages/Desserts";
import RecipePage from "../../pages/RecipePage";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/coaching-packages" element={<CoachingPackages />} />
      <Route path="/wellness-programs" element={<WellnessPrograms />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/breakfast" element={<Breakfast />} />
      <Route path="/main-course" element={<MainCourse />} />
      <Route path="/appetizers-snacks" element={<AppetizersSnacks />} />
      <Route path="/smoothies-drinks" element={<SmoothiesDrinks />} />
      <Route path="/desserts" element={<Desserts />} />
      <Route path="/recipes/:url" element={<RecipePage />} />
    </Routes>
  );
}
