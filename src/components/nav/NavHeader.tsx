import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavOptions } from "./NavOptions";

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar position="static" className="bg-blue-600 w-full">
        <Toolbar className="flex justify-between sm:justify-start  gap-4">
          <Typography variant="h6" className="text-white">
            Brand Title
          </Typography>
          <NavOptions flexClasss="flex-row !hidden sm:!flex" />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            className="sm:!hidden"
          >
            <MenuIcon className="" />
          </IconButton>
        </Toolbar>
        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <NavOptions flexClasss="flex-col" />
        </Collapse>
      </AppBar>
    </>
  );
}
