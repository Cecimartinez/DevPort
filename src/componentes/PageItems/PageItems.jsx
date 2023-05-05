import { Link, Outlet, useParams } from "react-router-dom";

export const PageItems = ({ className, to, label }) => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <li className=" lg:inline-flex">
        <Link to={`${to}`} className={className}>
          {label}
        </Link>
      </li>
    </>
  );
};
