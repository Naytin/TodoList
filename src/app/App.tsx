import React, {useCallback, useEffect} from 'react';
import './App.scss';
import {
    AppBar,
    Button, CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {TodolistsList} from "../features/Todolists/TotolistsList";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {initializeAppTC} from "./appReducer";
import ErrorSnackBar from "../Components/ErrorSnackBar/ErrorSnackBar";
import {HashRouter, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import {Login} from "../features/Login/Login";
import {logoutTC} from "../features/Login/authReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const status = useSelector<AppRootStateType, string>(state => state.app.status)
    const classes = useStyles();
    let history = useHistory();

    const handleLogout = useCallback(() => {
        dispatch(logoutTC())
    }, [])

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    // if (!isInitialized) {
    //     return <div
    //         style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
    //         <CircularProgress/>
    //     </div>
    // }

    return (
        <div className="App">
            <ErrorSnackBar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        My TODO
                    </Typography>
                    {
                        !isLoggedIn ?
                            <Button color="inherit" onClick={() => history.push('/login')}>Login</Button> :
                            <Button color="inherit" onClick={handleLogout}>Log out</Button>
                    }
                </Toolbar>
            </AppBar>
            {status === 'loading' && <LinearProgress color={"primary"}/>}
            <Container fixed>
                <HashRouter>
                    <Switch>
                        <Route exact path={'/'} render={() => <TodolistsList/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                </HashRouter>
            </Container>
        </div>
    );
}

export default App;


