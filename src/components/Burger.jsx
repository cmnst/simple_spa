import { StyledBurger} from "../pages/styles";

const Burger = ({open, setOpen}) => {

    return(
       <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
       </StyledBurger> 
    )
}

export default Burger;