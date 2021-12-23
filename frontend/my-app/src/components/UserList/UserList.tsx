import React from "react";
import { Button, Container} from "@material-ui/core";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import UserService from "../../services/UserService";
import { useState } from "react";
// import { Context } from '../index'
import {IUser } from '../../models/IUser'



export{}


const UserList:FC = observer(() =>{
    // const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);


    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
             console.log(e);
        }
    }


    return(
        <div>
            <Container>
                <h1>UserList</h1>
                <Button onClick={getUsers}>USERS</Button>
                    {users.map(user =>
                        <div key={user.email}>{user.email}</div>
                    )}
            </Container>

        </div>
    )
})
export default UserList