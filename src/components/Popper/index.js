import { useState, useRef } from "react";
import classes from "./Popper.module.css";
import { BsThreeDots } from "react-icons/bs";
import useClickOutside from "../../pages/CustomHooks/useClickOutside";

const Popper = ({ list, onActionselected, Icon, className }) => {
  const menuRef = useRef(null);
  const [openPopperMenu, setOpenPopperMenu] = useState(false);

  const closeMenu = () => {
    setOpenPopperMenu(false);
  };

  useClickOutside(menuRef, closeMenu);

  const handleMenuItemClick = (event) => {
    // Perform any action you want when a menu item is clicked.
    // For example, you can navigate to a new page or perform some action.
    // Then close the menu.
    event.stopPropagation();
    closeMenu();
  };
  return (
    <div ref={menuRef} className={classes["main-wrapper"]}>
      <span
        className={classes["action-view"]}
        onClick={() =>
          setOpenPopperMenu((current) => {
            console.log("clicked !!");
            return !current;
          })
        }
      >
        {Icon ? Icon : <BsThreeDots size={20} />}
      </span>
      {openPopperMenu && (
        <ul className={[classes["popper"], className].join(" ")}>
          {list?.map((list) => (
            <li
            className={classes["list-item"]}
              onClick={() => {
                onActionselected(list);
                handleMenuItemClick();
              }}
            >
              {list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Popper;
