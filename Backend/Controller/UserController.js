const  mongoose = require('mongoose');
const userdetailsModel = require('../Models/UserModel');


// Store user details functions
const createuser = async (req,res)=>{
    const {name,email,phone,address,doctorName} = req.body

        try {
            const User = await userdetailsModel.create({name,email,phone,address,doctorName})
            res.status(200).json(User);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
}

// to get all user details

const getalluserdetails = async (req,res)=>{
    try {
        
        const users = await userdetailsModel.find({});
        res.status(200).json(users)
    } catch (e) {
        res.status(400).json({error:e.message});
    }
};

 const edituser = async (req,res)=>{
    const {id} = req.params;
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'invalid id'});
      }
    try {
    const getuserdetails = await userdetailsModel.findById(id);

    res.status(200).json(getuserdetails);

    } catch (error) {
        res.status(400).json({error:error.message});
    }
 }


const updateuser = async (req, res) => {
    const { id } = req.params;

    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid ID' });
    }

    try {
        // Find the user by ID and update it with the request body data
        const updatedUser = await userdetailsModel.findByIdAndUpdate(
            id, // Find user by ID
            { ...req.body }, // Update with the new data from req.body
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        // If user not found, return a 404 response
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the updated user data
        res.status(200).json(updatedUser);
    } catch (e) {
        // Catch any errors and return a 400 response with the error message
        res.status(400).json({ error: e.message });
    }
};

const deleteusers = async (req,res)=>{

    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({meesage: 'invalid id'});
     }

    try {
            const deleteduser = await userdetailsModel.findByIdAndDelete(id);

            res.status(200).json(deleteduser)
    } catch (e) {
        res.status(400).json({error:e.meesage});    
    }
}


module.exports = {createuser,getalluserdetails,edituser,updateuser,deleteusers};