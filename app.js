const express = require('express');

const app = express();

app.use(express.json());

const userDB = [
    {
        'id': '1',
        'name': 'DASO'
    },
    {
        'id': '2',
        'name': 'DAVID'
    }
]

//get all users
app.get('/users', (req,res ) => {
    res.status(200).json({
        success: 'true',
        message: "Data Fetched Successfully",
        users : userDB
        
        
    });
})

// add user
app.post('/users', (req, res) => {

    userDB.push(req.body)

    res.status(201).json({
        success: 'true',
        message: 'Data Added Successfully'
    })
});

//edit user by id
app.put('/users/:id', (req, res)=>{
    const ID = req.params.id;


    let userIndex = userDB.findIndex(user => user.id === ID )
    userDB[userIndex] = req.body;
    res.status(201).json({
        success: 'true',
        message: 'Data Updated Successfully'
    }
    )
});

//delete user by id
app.delete('/users/:id', (req, res)=> {
    const ID = req.params.id;
    let userIndex = userDB.findIndex(user => user.id === ID);

    userDB.splice(userIndex, 1);
    res.status(201).json({
        success: 'true',
        message: 'Data Deleted Successfully'
    })
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});