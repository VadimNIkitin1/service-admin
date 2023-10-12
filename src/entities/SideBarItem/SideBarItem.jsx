import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./SideBarItem.module.scss";
import { toggleTabs } from "../../store/activeSlice";
import clsx from "clsx";

const SideBarItem = ({ item }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab.active);
  const theme = useSelector((state) => state.activeTab.theme);
  const company_id = useSelector((state) => state.auth.company_id);

  const { name, link, icon } = item;

  return (
    <Link
      className={clsx(
        activeTab === `/${company_id}${link}`
          ? style.sidebarItemActive
          : style.sidebarItem,
        theme && style.light
      )}
      to={`/${company_id}${link}`}
      onClick={() => dispatch(toggleTabs(`/${company_id}${link}`))}
    >
      {icon}
      <p>{name}</p>
    </Link>
  );
};

export default SideBarItem;
