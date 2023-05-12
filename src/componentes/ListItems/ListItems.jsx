import { NAVITEMS } from "../../constants/nav.const";
import { Items } from "../Items/Items";

export const ListItems = () => {
  return (
    <ul>
      {NAVITEMS.map((item) => (
        <Items
          key={item.propName}
          id={item.id}
          label={item.label}
          to={item.propName}
          className=" item-nav font-medium  hover:text-[#c7bcff] flex lg:mr-7 mb-8 lg:mb-0 relative text-lg tracking-wider"
        />
      ))}
    </ul>
  );
};
