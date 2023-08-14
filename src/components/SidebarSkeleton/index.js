import { useEffect, useRef, useState } from "react";
// import { LiaBarsSolid } from "react-icfieldOptionsons/lia";
import { AiFillSetting, AiOutlineRight } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../Input";
import classes from "./SidebarSkeleton.module.css";


const MenuItem = ({ text, icon, path, listOfOptions = [],notificationCount =0 }) => {
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <li>
      <div
        className={[
          classes["menuItem"],
          classes["overflow-x-hidden"],
          location === path && classes.activeMenu,
        ].join(" ")}
        onClick={() => {
          listOfOptions?.length <= 0 && navigate(path);
          listOfOptions?.length > 0 && setMenuOpen((current) => !current);
        }}
      >
        {/* <div
          className={[
            classes["menuContent"],
            classes["overflow-x-hidden"],
          ].join(" ")}
        >
          {icon && <div className={classes["menuIcon-wrapper"]}>{icon}</div>}
          <p className={classes["menu-name"]}>{text}</p>
        </div> */}


<div
          className={[
            classes["menuContent"],
            classes["overflow-x-hidden"],
          ].join(" ")}
        >
          {icon && <div className={classes["menuIcon-wrapper"]}>{icon}</div>}
          <p className={classes["menu-name"]}>{text}</p>
          {notificationCount > 0 && (
            <span className={classes["notificationCount"]}>
              {notificationCount}
            </span>
          )}
        </div>

        {listOfOptions?.length > 0 && (
          <span className={classes["menuIndicator"]}>
            <AiOutlineRight />
          </span>
        )}
      </div>

      <div
        className={[
          classes["dropdown-list"],
          classes["overflow-x-hidden"],
          menuOpen && classes["height-0"],
        ].join(" ")}
      >
        {listOfOptions?.length > 0 && (
          <div className={classes["list-wrapper"]}>
            <ul>
              {listOfOptions?.map((option) => (
                <li>{option}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

const SidebarSkeleton = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarClose, setIsSidebarClose] = useState(false);
  const [search, setSearch] = useState("");
  const handleResize = () => {
    if (window.innerWidth <= 992) {
      setIsSidebarClose(true);
    } else if (window.innerWidth > 992) {
      setIsSidebarClose(false);
    }
  };
  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  // const fieldOptions = [
  //   {
  //     id: "1",
  //     title: "Sales",
  //     navigate: () => {
  //       navigate("/sales");
  //     },
  //   },
  //   {
  //     id: "2",
  //     title: "Sales",
  //     navigate: () => {
  //       navigate("/sales");
  //     },
  //   },
  //   {
  //     id: "3",
  //     title: "Sales",
  //     navigate: () => {
  //       navigate("/sales");
  //     },
  //   },
  //   {
  //     id: "4",
  //     title: "Sales",
  //     navigate: () => {
  //       navigate("/sales");
  //     },
  //   },
  // ];
  return (
    <div className={classes["sidebar__wrapper"]}>
      <aside
        className={[
          classes["sidebar-sdide-transition"],
          classes["sidebar__sideContent"],
          isSidebarClose && classes["width-0"],
        ].join(" ")}
      >
        <div
          className={[
            classes["sidebar__mainMenu"],
            classes["overflow-x-hidden"],
          ].join(" ")}
        >
          <span
            className={[
              classes["sidebar__openerToggle"],
              isSidebarClose && classes["show__openerToggle"],
            ].join(" ")}
            onClick={() => {
              setIsSidebarClose(false);
            }}
          >
            <FaBars color={`var(--main-color)`} size={17} />
          </span>
          <div
            className={[
              classes["sidebar__header"],
              classes["sidebarList"],
              classes["overflow-x-hidden"],
            ].join(" ")}
          >
            <p>MAIN CONTENT</p>
            <span
              className={classes["crossIconContainer"]}
              onClick={() => {
                setIsSidebarClose(true);
              }}
            >
              <RxCross1
                color="#bdbdbd"
                size={20}
                style={{ strokeWidth: "1" }}
              />
            </span>
          </div>
          {/* <div className={classes["inputSearch"]}>
            <Input
              isSearch={true}
              value={search}
              setter={setSearch}
              placeholder={`Search`}
              inputCustomStyle={{ padding: "0px", border: "0px", gap: "0" }}
              className={classes["searchbar-styling"]}
              rightIconStyle={{
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div> */}

          <ul className={classes["sidebarList"]}>
            <li className={classes["common-links"]}>
              <span>Generals</span>
            </li>
            <MenuItem
              path={"/"}
              text={"Notification"}
              icon={<MdSpaceDashboard size={23} color="var(--neutral-main)" />}
              notificationCount={3}
              // fieldOptions={fieldOptions}
            />

          
           
            {/* <MenuItem
              text={`Setup`}
              icon={<AiFillSetting size={23} color="var(--neutral-main)" />}
              listOfOptions={[
                "Change Password",
                "Create Role",
                "Create Department",
                "User Setup",
              ]}
            /> */}
          </ul>
        </div>
      </aside>
      <div
        className={[
          classes["sidebar__mainContent"],
          isSidebarClose && classes["margin-left-0"],
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};

export default SidebarSkeleton;
