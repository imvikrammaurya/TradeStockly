import { Link } from "react-router-dom";

const Menu = () => {
  const handleProfileClick = () => { };
  const activeMenuClass = "text-[0.8rem] font-normal text-gray-700 hover:text-orange-500 hover:cursor-pointer no-underline";

  return (
    <div className="basis-[68%] h-full py-2.5 px-5 flex items-center justify-between">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="flex items-center justify-evenly">
        <ul className="list-none flex items-center">
          <li className="mr-[30px]">
            <Link to="/" className={activeMenuClass}>Dashboard</Link>
          </li>
          <li className="mr-[30px]">
            <Link to="/orders" className={activeMenuClass}>Orders</Link>
          </li>
          <li className="mr-[30px]">
            <Link to="/holdings" className={activeMenuClass}>Holdings</Link>
          </li>
          <li className="mr-[30px]">
            <Link to="/positions" className={activeMenuClass}>Positions</Link>
          </li>
          <li className="mr-[30px]">
            <Link to="/funds" className={activeMenuClass}>Funds</Link>
          </li>
          <li className="mr-[30px]">
            <Link to="/apps" className={activeMenuClass}>Apps</Link>
          </li>
        </ul>
        <hr className="border-l border-gray-100 h-[30px] w-0" />
        <div className="flex items-center justify-evenly ml-5 hover:cursor-pointer group" onClick={handleProfileClick}>
          <div className="w-[30px] h-[30px] text-center relative text-[0.7rem] font-normal text-purple-400 flex items-center justify-center rounded-full bg-purple-100 mr-2">ZU</div>
          <p className="text-[0.8rem] font-light group-hover:text-orange-500">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
