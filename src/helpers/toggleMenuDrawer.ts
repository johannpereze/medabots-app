import { KeyboardEvent, MouseEvent } from "react";
import { AppDispatch } from "../app/store";
import { toggleDrawerState } from "../components/header/headerSlice";

interface ToggleDrawerProps {
  event: KeyboardEvent | MouseEvent;
  dispatch: AppDispatch;
}

const toggleMenuDrawer = ({ event, dispatch }: ToggleDrawerProps) => {
  if (
    event &&
    event.type === "keydown" &&
    ((event as KeyboardEvent).key === "Tab" ||
      (event as KeyboardEvent).key === "Shift")
  ) {
    return;
  }
  dispatch(toggleDrawerState());
};

export default toggleMenuDrawer;
