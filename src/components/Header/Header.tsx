import React from 'react';
import Box from '@material-ui/core/Box';
import logoCompleto from "../../assets/images/iconCV2.png"
import { makeStyles, createStyles } from '@material-ui/core/styles';

/*menu*/
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import LanguageIcon from '@material-ui/icons/Language';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';

interface HeaderProps {
    page: number;
}

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #F2F7FA',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    /*
    root: {
        '&:focus': {
            backgroundColor: '#172A3A',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: '#F2F7FA',
            },
        },
    },
    */
}))(MenuItem);

const useStyles = makeStyles(() =>
    createStyles({

        internal: {
            '& > *': {
                margin: 0,
                padding: 0,
            },
            width: '65%',
            display: 'flex',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
        },
        external: {
            background: "#172A3A",
        },
        menuButton: {
            fontSize: '85%',
            color: '#172A3A',
            background: '#F2F7FA',
            borderRadius: '30px',
        },
        menu: {
            textDecoration: 'none',
            color: '#172A3A',
        },
    }),
);

const Header: React.FC<HeaderProps> = ({ page }, HeaderProps) => {

    /*
    pages:
    1 = home
    2 = interno
    3 = lgpd
    4 = sap
    5 = web
    */
    var iconHome = <HomeIcon style={{ color: "#172A3A" }}/>
    var iconINTERNO = <SendIcon style={{ color: "#172A3A" }}/>
    var iconLGPD = <SystemUpdateAltIcon style={{ color: "#172A3A" }}/>
    var iconSAP = <InboxIcon style={{ color: "#172A3A" }}/>
    var iconWEB = <LanguageIcon style={{ color: "#172A3A" }}/>

    var buttonSelect = iconHome;

    if(page === 2){
        buttonSelect = iconINTERNO;
    }
    else if(page === 3){
        buttonSelect = iconLGPD;
    }
    else if(page === 4){
        buttonSelect = iconSAP;
    }
    else if(page === 5){
        buttonSelect = iconWEB;
    }

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.external}>
            <div className={classes.internal}>
                <Box
                    color="white"
                    fontFamily="Montserrat"
                    display="flex"
                    fontSize="78%"
                    alignItems="center"
                    justifyContent="space-between"
                    flexGrow={1}
                    p={1}
                    m={1}
                    bgcolor="#172A3A"
                    sx={{ height: 60 }}
                >
                    <Box p={1} order={1} >
                        <Link to="/home">
                            <img src={logoCompleto} width="100%" height="100%" alt="Logo" />
                        </Link>
                    </Box>
                    <Box p={1} order={2} >

                        <div>
                            <Button
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="default"
                                startIcon={buttonSelect}
                                onClick={handleClick}
                                className={classes.menuButton}
                            >
                                Menu
                            </Button>

                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >

                                <Link to="/home" className={classes.menu}>
                                    <StyledMenuItem selected={page === 1}>
                                        <ListItemIcon> {iconHome} </ListItemIcon>
                                        <ListItemText primary="Home" />
                                    </StyledMenuItem>
                                </Link>

                                <Link to="/interno" className={classes.menu}>
                                    <StyledMenuItem selected={page === 2}>
                                        <ListItemIcon> {iconINTERNO} </ListItemIcon>
                                        <ListItemText primary="Sistema Interno" />
                                    </StyledMenuItem>
                                </Link>

                                <Link to="/lgpd" className={classes.menu}>
                                    <StyledMenuItem selected={page === 3}>
                                        <ListItemIcon> {iconLGPD} </ListItemIcon>
                                        <ListItemText primary="Consultoria LGPD" />
                                    </StyledMenuItem>
                                </Link>

                                <Link to="/sap" className={classes.menu}>
                                    <StyledMenuItem selected={page === 4}>
                                        <ListItemIcon> {iconSAP} </ListItemIcon>
                                        <ListItemText primary="Consultoria SAP" />
                                    </StyledMenuItem>
                                </Link>

                                <Link to="/web" className={classes.menu}>
                                    <StyledMenuItem selected={page === 5}>
                                        <ListItemIcon> {iconWEB} </ListItemIcon>
                                        <ListItemText primary="Web Designer" />
                                    </StyledMenuItem>
                                </Link>

                            </StyledMenu>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default Header;