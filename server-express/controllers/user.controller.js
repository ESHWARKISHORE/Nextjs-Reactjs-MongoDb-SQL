import { getAllUsers } from "../model/user.model.js";

export async function fetchUser (req, res) {
    try{
        const users = await getAllUsers();
        res.json(users);
    }
    catch(err){
        console.log(err, 'error while fetching the user details')
        res.status(500).json({err: 'Failed while fetching the user'})
    }
}