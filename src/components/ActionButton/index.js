import classes from "./ActionButton.module.css";
import { useState, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import useClickOutside from "../../pages/CustomHooks/useClickOutside";
const ActionButton = ({ list, onActionselected }) => {
  const menuRef = useRef(null);
  const [actionlistOpen, setActionListOpen] = useState(false);
  const closeMenu = () => {
    setActionListOpen(false);
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
    <div ref={menuRef}>
      <div className={classes["actionButton-wrapper"]}>
        <button className={classes["action-button"]}>Edit</button>
        <span
          onClick={() => {
            setActionListOpen((current) => !current);
          }}
        >
          <AiFillCaretDown size={10} color="#fff" />
        </span>
      </div>

      {actionlistOpen && (
        <ul className={classes["popper"]}>
          {list?.map((list) => (
            <li
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

export default ActionButton;
