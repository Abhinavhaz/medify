import {
    Box,
    Container,
    Button,
    List,
    ListItem,
    Stack,
    Typography,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import logo from "../assets/logo.png";
  import styles from "./Navbar.module.css";
  import { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import MenuIcon from "@mui/icons-material/Menu";
  
//   import MenuIcon from "../assets/menu.png"
  export default function NavBar() {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header className={styles.header} >
        
  
        <Container  >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            py={1}
          
            
          >
            <Link to="/">
              <img src={logo} alt="Logo" height={27} />
            </Link>
  
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems={{ xs: "flex-start", md: "center" }}
              className={[styles.navlinks, menuOpen && styles.active]}
              pt={{ xs: 12, md: 1 }}
              pb={{ xs: 4, md: 1 }}
            //   px={{ xs: 4, md: 0 }}
            >
              <Link>Find Doctors</Link>
              <Link to="/search">Hospitals</Link>
              <Link>Medicines</Link>
              <Link>Surgeries</Link>
              <Link>Software for Provider</Link>
              <Link>Facilities</Link>
              <Link to="/my-bookings">
                <Button  style={{textTransform: 'none' , backgroundColor: '#2AA8FF', color: '#ffffff' }}   disableElevation>
                  My Bookings
                </Button>
              </Link>
  
              {isMobile && (
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 32,
                    color: "white",
                    // background:"white"
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
  
            {isMobile && (
              <IconButton onClick={() => setMenuOpen(true)}>
                <MenuIcon style={{color: "blue"}}/>
              </IconButton>
            )}
          </Stack>
        </Container>
      </header>
    );
  }
  