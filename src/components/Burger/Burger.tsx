import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen, ...props }: {
  open: boolean,
  setOpen: (open: boolean) => void,
}) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      // open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span className="first-child" />
      <span className="second-child" />
      <span className="third-child" />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
