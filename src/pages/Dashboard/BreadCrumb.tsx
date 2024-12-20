import { Link } from "react-router-dom";

interface props {
  name: string;
  route: string;
  nestedRoute?: {
    name: string;
    route: string;
  };
}

const BreadCrumb = (props: props) => {
  return (
    <div className="p-10 mt-9 bg-[#67C3A2] text-white rounded-lg shadow-lg">
      <div className="text-2xl md:text-3xl font-bold">
        <h1>Track your workouts, monitor nutrition, and achieve your goals—all in one place.</h1>
      </div>
      <div className="mt-2 font-bold">
        <Link to={"/dashboard"} className="hover:text-black transition-all duration-500"><span>Dashboard</span></Link>
        <span>{" / "}</span>
        <Link to={props.route} className="hover:text-black transition-all duration-500">{props.name}</Link>
        {props.nestedRoute && (
          <>
            <span>{" / "}</span>
            <Link to={props.nestedRoute.route} className="hover:text-black transition-all duration-500">
              {props.nestedRoute.name}
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default BreadCrumb