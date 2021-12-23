import { FormControl, Input } from "@material-ui/core";
import React, {FC, useContext} from "react";
// import { Link } from "@material-ui/core";
// import { LOGIN_ROUTE } from "../utils/consts";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { Card } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Context } from "../..";




const ResertPassword: FC = observer(() =>{
    const [email, setEmail] = useState<string>('')
    const [newpassword, setNewPassword] = useState<string>('')
    const {store} = useContext(Context)

    return(
        <div>
            <Container>
                <FormControl>
                    <h1>ResertPassword</h1>
                </FormControl>

                <Card style={{width: 200}} className="p-5">

                    
                    <Input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        placeholder='Ваш Email'
                    />
                    <Input
                        onChange={e => setNewPassword(e.target.value)}
                        value={newpassword}
                        type="text"
                        placeholder='введите новый пароль'
                    />
                    <Button onClick={() => store.resertPassword(email, newpassword)}>
                        GO
                    </Button>

                    </Card>
               
            </Container>
        </div>
    )
})
export default ResertPassword