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
    <div className="p-4 ml-5 bg-[#31C48D] text-white rounded-lg shadow-lg">
      <div className="text-2xl md:text-3xl font-bold">
        <Link to={"/dashboard"}><span className="text-2xl md:text-3xl font-bold">Dashboard</span></Link>
        <span>{" —>"}</span>
        <Link to={props.route}>{props.name}</Link>
        {props.nestedRoute && (            
            <Link to={props.nestedRoute.route}>
              <span>{" —>"}</span>
              {props.nestedRoute.name}
            </Link>
        )}

      </div>
    </div>
  )
}

export default BreadCrumb