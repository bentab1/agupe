// PersonalProfile.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Myimage from '../Assets/Myimage.png';
import './personalProfile.css';
const PersonalProfile = () => {
  const handleActionClick = (action) => {
    // Handle the action based on the button clicked
    console.log(`Clicked on: ${action}`);
    // You can add logic to navigate to specific routes or perform other actions
  };

  return (
    <div style={{display:'flex'  }} className='personalprofile'>
       
       <div style={{display:'grid', width:"300px",borderRight:"solid salmon",
      overflowY:'scroll', overflowX:'hidden', marginTop:'20px'}}>

       <div>
          <img className='image' src={Myimage} alt=" logo" style={{}} />
      
  
      </div>

      <div  >
        <NavLink to="/" activeClassName="active" >
          <button onClick={() => handleActionClick('Add Money')}>
            Home
          </button>
        </NavLink>
      </div>

      <div  >
        <NavLink to="/addmoney">
          <button onClick={() => handleActionClick('Add Money')}>
            Add Money
          </button>
        </NavLink>
      </div>

      
      <div>
        <NavLink to="/add-card">
          <button onClick={() => handleActionClick('Add Card')}>
          AgupePay
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/add-card">
          <button onClick={() => handleActionClick('Add Card')}>
            Add payment Method
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/add-card">
          <button onClick={() => handleActionClick('Add Card')}>
          Card
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/pay-bill">
          <button onClick={() => handleActionClick('Pay Bill')}>
            Beneficiary
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/buy-data-airtime">
          <button onClick={() => handleActionClick('Buy Data/Airtime')}>
            settings
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/buy-data-airtime">
          <button onClick={() => handleActionClick('Buy Data/Airtime')}>
            Logout
          </button>
        </NavLink>
      </div>
      </div>
        
        <div style={{display:'grid',overflowY:'scroll', overflowX:'hidden'}}>

         <div style={{display:'flex', marginTop:'40px', marginLeft:'20px'}}>
      <div>
        
          <button onClick={() => handleActionClick('Apply for POS')}>
            Welcome Benjamin
          </button>
    
      </div>


     <div  className='profilegallery' style={{display:"flex", marginLeft:"170px"}}>
      <div>
        <NavLink to="/apply-for-pos">
          <button onClick={() => handleActionClick('Transaction histrory')}>
            Notification
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/pics">
          <button onClick={() => handleActionClick('Account')}>
            pics
          </button>
        </NavLink>
      </div>

      <div style={{display:'grid'}}>
        <NavLink to="/accountinfo">
          <button onClick={() => handleActionClick('Profile')}>
          <p>Benjamin </p>
          <p>Benjamin@gmail.com </p>
          </button>
        </NavLink>
      </div>
      </div>
      </div>
          
      <div  style={{display:'flex'}}>

       <div  style={{display:'grid', backgroundColor:'rgb(231, 37, 37, 1)', height:'350px',
          borderRadius:"30px", marginLeft:'20px', marginTop:'30px'}}>

       <div  className='accountdisplay'>
       <NavLink to="/apply-for-pos">
          <button onClick={() => handleActionClick('Profile')} style={{marginTop:'20px',
           borderRadius:'30px'}}>
            Account Balance
          </button>
        </NavLink>

       </div>
       <div style={{display:'grid'}}>
       <div  className='TransaferOrpaybils' style={{display:'flex'}}>
         <div className='Transfer'>
         
         <NavLink to="/transfer">
          <button onClick={() => handleActionClick('Profile')}>
            Transfer
          </button>
        </NavLink>
         </div>

         <div className='paybill'>

         <NavLink to="/paybil">
          <button onClick={() => handleActionClick('Profile')}>
            Pay bill
          </button>
        </NavLink>

         </div>
     
       </div>

    <div style={{display:"flex"}}>   
    <div className='paybill'>
    <NavLink to="/paybil">
    <button onClick={() => handleActionClick('Profile')}>
      User ID
    </button>
    </NavLink>
    </div> 

               
    <div className='paybill'>
    <NavLink to="/paybil">
    <button onClick={() => handleActionClick('Profile')}>
      Qcode
    </button>
    </NavLink>
    </div> 
    </div>
       </div>
       </div>

       <div style={{display:'flex', flexDirection:'column',marginLeft:'40px', marginTop:'90px',
         backgroundColor:"rgba(252, 233, 67, 1)", height:'150px', width:'500px',
          marginBottom:"80px", borderRadius:"30px"}}>
       <NavLink to="/recenttransaction">
          <button onClick={() => handleActionClick('Profile')} style={{marginTop:'60px',
             marginLeft:'170px'}}>
            Recent Transactions
          </button>
        </NavLink>
       </div>

      </div>


      <div style={{display:'flex', overflowX:'scroll', marginTop:'20px', height:'80px',
     marginLeft:"30px"}}>
      <div >
        <NavLink to="/apply-for-pos">
          <button onClick={() => handleActionClick('Apply for POS')}>
            Account
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-pos">
          <button onClick={() => handleActionClick('Transaction histrory')}>
        Generate Statement
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-pos">
          <button onClick={() => handleActionClick('Account')}>
            Transaction History
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-pos">
          <button onClick={() => handleActionClick('Profile')}>
            POS
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-pos">
          <button onClick={() => handleActionClick('Profile')}>
            Find ATM nearby
          </button>
        </NavLink>
      </div>
      </div>

      </div>
    </div>
  );
};

export default PersonalProfile;
