const { redirect } = require("express/lib/response");

const userInfo = [
   
    {
        fname: 'Rajan',
        mname: '',
        lname : 'Shrestha',
        email : '',
        phone : ''
    },
    {
        fname: 'Shiva',
        mname: '',
        lname : 'Shrestha',
        email : '',
        phone : '1234'
    },

]

// Home Page
exports.index = (req,res)=>{
    res.render('../views/index', {userdetails:userInfo,btnName: 'Save' })    
    console.log("Success");
}


// // Add User 
// exports.addUser = (req,res)=>{
//     res.render('adduser')
// }

exports.adduserpost = (req,res)=>{
    const {fname, mname, lname, email, phone} = req.body;
   {(mname == '') ? console.log('Full Name: ' + fname + ' ' + lname) : console.log('Full Name: ' + fname + ' ' + mname +' ' + lname)}  ;
   userInfo.push({fname,mname,lname,email,phone});
    res.redirect('/')
}


// Update User
exports.update = ( req,res) =>{
    console.log(req.params.id);
    res.render('updateuser', {userdetails:userInfo[req.params.id], index: req.params.id, btnName: 'Update' })
    // console.log(userInfo);
}


exports.updateUser = (req,res)=>{
    console.log('param:' + req.params.id);
     const {fname, mname, lname, email, phone} = req.body;
     userInfo[req.params.id].fname  = fname
     userInfo[req.params.id].mname  = mname
     userInfo[req.params.id].lname  = lname
     userInfo[req.params.id].phone  = phone
     userInfo[req.params.id].email  = email
    res.redirect('/')
}


// Delete User
exports.delete = (req,res) =>{  
  const index = req.params.id;   
  userInfo.splice(index,1)
   res.redirect('/')
}