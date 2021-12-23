import { observer } from "mobx-react-lite";
import React from "react";
import { FC } from "react";
import { Card, Container, Input } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Context } from "../..";
import { useContext } from "react";

export{}
const Admin:FC = observer(() =>{
    const {store} = useContext(Context)


    const [value, setValue] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    // const [roleValue, setRoleValue] = useState<string>('')
    const [Ivalue, setIvalue] = useState<string>('')
    const [IuserId, setIuserId] = useState<number>(0)


    return(
        <div>
            <Container>
                
                    <h1>ADMIN</h1>


                        <Card style={{width: 200}} className="p-5">
                        <Input
                            onChange={e => setValue(e.target.value)}
                            value={value}
                            placeholder='введите роль'
                        />

                        <Input
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            placeholder='введите описание'
                        />

                        <Button onClick={() => store.addRole(value, description)}>
                             ADDROLE
                         </Button>
                        </Card>

                        <h1> ADD ROLE TO USER </h1>
                        <Card style={{width: 200}} className="p-5">
                        <Input
                            onChange={e => setIvalue(e.target.value)}
                            value={Ivalue}
                            placeholder='введите роль'
                        />
                        <Input
                            onChange={e => setIuserId(Number(e.target.value))}
                            value={IuserId}
                            placeholder='введите ID'
                        />
                        </Card>

                        <Button onClick={()=> store.addRoleToUser(Ivalue, IuserId)}>ADD ROLE TO USER</Button>

            </Container>
        </div>
    )
})

export default Admin

