import { Link } from "react-router-dom";

export const PageItems = ({  className, to , label}) => {
  return (
    <>
      <li className=" lg:inline-flex">
        <Link to={`/${to || null}`} className={className} >{label}
        </Link>
      </li>
    </>
  );
};
