
interface props{
    name:string;
}

const BreadCrumb = (props:props) => {
  return (
    <div className="p-4 bg-[#31C48D] text-white rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold">
          Dashboard {props.name}
        </h1>
        <p className="mt-2 font-bold">
          
        </p>
      </div>
  )
}

export default BreadCrumb