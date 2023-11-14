import React, { useEffect, useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from "@mui/icons-material/Person";
import ExitToApp from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ListAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Backdrop, SpeedDial, SpeedDialAction } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { logoutUser } from "../../redux/actions/user";
const UserOptions = ({ user }) => {
  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.user);
  const actions = [
    { icon: <PersonIcon />, name: "Account", func: Person },
    { icon: <ListAlt />, name: "Orders", func: Orders },
    {
      icon: (
        <ShoppingCartIcon
        // style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      // name: `Cart(${cartItems.length})`,
      func: Cart,
    },
    { icon: <ExitToApp />, name: "Logout", func: Logout },
  ];

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  if (user.role === "admin") {
    actions.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: Dashboard,
    });
  }

  function Dashboard() {
    navigate("/dashboard");
  }
  function Person() {
    navigate("/profile");
  }
  function Orders() {
    navigate("/orders");
  }
  function Cart() {
    navigate("/cart");
  }
 async function Logout() {
    await dispatch(logoutUser());
    navigate("/login");
  }

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, message, error]);
  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} className="mt-[3rem]" />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className="speedDial mt-[3.4rem]"
        icon={
          <img
            className="speedDialIcon"
            src={user && user.image.url ? user.image.url : "/logo.webp"}
            alt="Profile"
          />
        }
        style={{ zIndex: "11" }}
        direction="down"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserOptions;
