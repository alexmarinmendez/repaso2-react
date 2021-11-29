import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>COD.ER $HO.P</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/MbCjgT1qxGT28TQHIDxs' style={{textDecoration: "none", color: "white"}}><MenuItem>Sin Alcohol</MenuItem></Link>
                    <Link to='/category/WuwoOSINFxcXZiKm3R1x' style={{textDecoration: "none", color: "white"}}><MenuItem>Vinos</MenuItem></Link>
                    <Link to='/category/i3pqaIGbQs2vvEuquCw5' style={{textDecoration: "none", color: "white"}}><MenuItem>Licores</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;