// PersonalProfile.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Myimage from '../Assets/Myimage.png';
import './businessAccount.css';
const BusinessAccount = () => {
  const handleActionClick = (action) => {
    // Handle the action based on the button clicked
    console.log(`Clicked on: ${action}`);
    // You can add logic to navigate to specific routes or perform other actions
  };

  return (
    <div style={{display:'flex', backgroundColor:"white"  }} className='personalprofile'>
       
       <div style={{display:'grid', width:"300px",borderRight:"solid salmon",
      overflowY:'scroll', overflowX:'hidden', marginTop:'20px', backgroundColor:'white'}}>

       <div>
          <img className='image' src={Myimage} alt=" logo" style={{marginTop:"20px"}} />
      
  
      </div>

      <div  >
        <NavLink to="/" activeClassName="active" >
          <button className='text' onClick={() => handleActionClick('Add Money')}>
            Home
          </button>
        </NavLink>
      </div>
      <div  >
        <NavLink to="/addmone">
          <button className='text' onClick={() => handleActionClick('Add Money')}>
            Add Money
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/add-card">
          <button className='text' onClick={() => handleActionClick('Add Card')}>
          AgupePay
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/add-card">
          <button className='text' onClick={() => handleActionClick('Add Card')}>
            Add payment Method
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/add-card">
          <button className='text' onClick={() => handleActionClick('Add Card')}>
          Card
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/pay-bill">
          <button className='text' onClick={() => handleActionClick('Pay Bill')}>
            Beneficiary
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/buy-data-airtime">
          <button className='text' onClick={() => handleActionClick('Buy Data/Airtime')}>
            subscription
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/settings">
          <button className='text' onClick={() => handleActionClick('Buy Data/Airtime')}>
            settings
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/buy-data-airtime">
          <button className='text' onClick={() => handleActionClick('Buy Data/Airtime')}>
            Logout
          </button>
        </NavLink>
      </div>
      </div>
        
        <div style={{display:'grid',overflowY:'scroll', overflowX:'hidden',width:'1040px',
         backgroundColor:'rgba(228, 165, 165, 1'}}>

         <div style={{display:'flex', marginTop:'40px', marginLeft:'50px', 
         backgroundColor:'white', width:'930px', padding:'30px', borderRadius:'30px'}}>
      <div>
        
          <button className='text_pro' onClick={() => handleActionClick('Apply for POS')}>
            Welcome Benjamin
          </button>
    
      </div>


     <div  className='profilegallery' style={{display:"flex", marginLeft:"290px"}}>
      <div>
        <NavLink to="/apply-for-pos">
          <button className='text_pro' onClick={() => handleActionClick('Transaction histrory')}>
            Notification
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/pics">
          <button className='text_pro' onClick={() => handleActionClick('Account')}>
            pics
          </button>
        </NavLink>
      </div>

      <div style={{display:'grid'}}>
        <NavLink to="/accountinfo">
          <button className='text_pro' onClick={() => handleActionClick('Profile')}>
          <p>Benjamin </p>
          <p>Benjamin@gmail.com </p>
          </button>
        </NavLink>
      </div>
      </div>
      </div>
          
      <div  style={{display:'flex'}}>

       <div  style={{display:'grid', backgroundColor:'rgb(231, 37, 37, 1)', height:'350px',
          borderRadius:"30px", marginLeft:'50px', marginTop:'50px', width:'300px'}}>

       <div  className='accountdisplay'>
       <NavLink to="/apply-for-pos">
          <button className='text' onClick={() => handleActionClick('Profile')} style={{marginTop:'20px',
           borderRadius:'30px', marginLeft:'75px'}}>
            Account Balance
          </button>
        </NavLink>

       </div>
       <div style={{display:'grid'}}>
       <div  className='TransaferOrpaybils' style={{display:'flex', justifyContent:'center'}}>
         <div className='Transfer'>
         
         <NavLink to="/transfer">
          <button className='text' onClick={() => handleActionClick('Profile')}>
            Transfer
          </button>
        </NavLink>
         </div>

         <div className='paybill'>

         <NavLink to="/paybil">
          <button className='text' onClick={() => handleActionClick('Profile')}>
            Pay bill
          </button>
        </NavLink>

         </div>
     
       </div>

    <div style={{display:"flex", justifyContent:'space-evenly'}}>   
    <div className='paybill'>
    <NavLink to="/paybil">
    <button className='text' onClick={() => handleActionClick('Profile')}>
      User ID
    </button>
    </NavLink>
    </div> 

               
    <div className='paybill'>
    <NavLink to="/paybil">
    <button className='text' onClick={() => handleActionClick('Profile')}>
      Qcode
    </button>
    </NavLink>
    </div> 
    </div>
       </div>
       </div>

       <div style={{display:'flex', flexDirection:'column',marginLeft:'40px', marginTop:'150px',
         backgroundColor:"rgba(252, 233, 67, 1)", height:'150px', width:'500px',
          marginBottom:"80px", borderRadius:"30px"}}>
       <NavLink to="/recenttransaction">
          <button  className='text' onClick={() => handleActionClick('Profile')} style={{marginTop:'60px',
             marginLeft:'170px'}}>
            Recent Transactions
          </button>
        </NavLink>
       </div>

      </div>


      <div style={{display:'flex', overflowX:'scroll', marginTop:'20px', height:'90px',
      backgroundColor:'white', width:'1023px', padding:'20px'}}>
      <div >
        <NavLink to="/apply-for-po">
          <button className='text'  onClick={() => handleActionClick('Apply for POS')}>
            Account
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-po">
          <button className='text' onClick={() => handleActionClick('Transaction histrory')}>
        Generate Statement
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-po">
          <button className='text' onClick={() => handleActionClick('Account')}>
            Transaction History
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-po">
          <button className='text' onClick={() => handleActionClick('Profile')}>
            POS
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-po">
          <button className='text' onClick={() => handleActionClick('Profile')}>
            Find ATM nearby
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-po">
          <button className='text' onClick={() => handleActionClick('Profile')}>
           Agupe Mobile
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/apply-for-po">
          <button className='text' onClick={() => handleActionClick('Profile')}>
           shop
          </button>
        </NavLink>
      </div>
      </div>

      </div>
    </div>
  );
};

export default BusinessAccount;
