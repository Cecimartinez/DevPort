import { PAGEITEMS } from "../../constants/pagination.const";
import { PageItems } from "../PageItems/PageItems";

export const Nav = () => {
  return (
    <div className="text-sm font-medium justify-center text-center text-gray-500 border-b border-gray-200 ">
      <ul className="flex flex-wrap -mb-px">
        {PAGEITEMS.map((item) => (
          <PageItems
            key={item.propName}
            id={item.id}
            label={item.label}
            to={item.propName}
            className="inline-block font-medium p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
          />
        ))}
      </ul>
    </div>
  );
};
