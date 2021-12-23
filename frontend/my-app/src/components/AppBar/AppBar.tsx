import React from "react";
import { AppBar, Button, Link } from "@material-ui/core";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, NOTES_ROUTE, USERLIST_ROUTE } from "../../utils/consts";
import { useContext } from "react";
import { Context } from "../../index";
import { IUser } from "../../models/IUser";
export{}


const Appbar:FC = observer(() =>{

    const { store } = useContext(Context);

    const logOut = () => {
        let user = {} as IUser;
        store.setUser(user)
        store.setAuth(false)
        localStorage.removeItem('token')
        localStorage.removeItem('notes')
        localStorage.removeItem('title')
    }

    return(
            <AppBar color= 'secondary' position="static">
                <Link href={LANDING_ROUTE} color="inherit">
                    Landing
                </Link>
                <Link href={USERLIST_ROUTE} color="inherit">
                    Userlist
                </Link>
                
                <Link href={ADMIN_ROUTE} color="inherit">
                    AdminPage

                </Link>
                <Link href={NOTES_ROUTE} color ="inherit">
                    Notes
                </Link>

                <Button
                onClick={() => logOut()}
                >
                {store.isAuth ? 'Sign Out' 
                : 
                <Link href = {LOGIN_ROUTE} color="inherit">Authorization</Link>}
                </Button>
            </AppBar>
      
    )
})
export default Appbar


