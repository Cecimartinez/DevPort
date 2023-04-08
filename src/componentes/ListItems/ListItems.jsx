import { NAVITEMS } from "../../constants/nav.const";
import { Items } from "../Items/Items";

export const ListItems = () => {
  return (
    <ul>
      {NAVITEMS.map((item) => (
        <Items label={item.label} to={item.propName} className="text-white flex lg:mr-7 mb-8 lg:mb-0" />
      ))}
    </ul>
  );
};
