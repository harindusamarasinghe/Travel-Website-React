import '../App.css';
import './Home.css';
import React from 'react';


const Home = () => {
  return (
    <>
    <div className='home--div'>
      <div className='background'>
        <h1 className='home--heading'>
          Spend your next vacation with <a href="#" id="style-2" data-replace="CocoShore Family."><span>Sri Lanka's best travel Agency</span></a>
        </h1>
        <a class="play-btn" href="#"></a>
       
      </div>

      <div className='home--searchBar'>
        <div className="location--div">
          <label htmlFor="location" className="label">
            Location
          </label>
          <input
            type="text"
            placeholder="Dream Destination"
            name="location"
            className="input"
          />
        </div>

        <div className="checkIn--div">
          <label htmlFor="date" className="label">
            Check-in
          </label>
          <input type="date" name="date" className="input" />
        </div>

        <div className="checkOut--div">
          <label htmlFor="date" className="label">
            Check-out
          </label>
          <input type="date" name="date" className="input" />
        </div>

        <div className="Budget--div">
          <label htmlFor="date" className="label">
            Budget Plan
          </label>
          <select className="input">
            <option value="Budget Friendly">Budget Friendly</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        <button className="button-28">Search</button>
      </div>
      
    </div>
    <h1 className='cards--heading'>Popular Destinations</h1>
    <div className='cards--container1'>
          <div className='card'>
            <img src="https://images.unsplash.com/photo-1580889240912-c39ecefd3d95?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt='sigiriya' className='img'></img>
            <div className='card--content'>
              <h2 className='cards--topic'>SIGIRIYA</h2>
            
            </div>
          </div>

          <div className='card'>
            <img src="https://images.pexels.com/photos/16601063/pexels-photo-16601063/free-photo-of-red-mosque-colombo-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='sigiriya' className='img'></img>
            <div className='card--content'>
              <h2 className='cards--topic'>COLOMBO</h2>
              
            </div>
          </div>

          

          <div className='card'>
            <img src="https://images.pexels.com/photos/18619140/pexels-photo-18619140/free-photo-of-nine-arch-bridge-in-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='sigiriya' className='img'></img>
            <div className='card--content'>
              <h2 className='cards--topic'>ELLA</h2>
              
            </div>
          </div>

          
    </div>
    <div className='cards--container2'>
          <div className='card'>
            <img src="https://images.pexels.com/photos/1461027/pexels-photo-1461027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='sigiriya' className='img'></img>
            <div className='card--content'>
              <h2 className='cards--topic'>NUWARAELIYA</h2>
              
            </div>
          </div>

          <div className='card'>
            <img src="https://images.pexels.com/photos/3556117/pexels-photo-3556117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='sigiriya' className='img'></img>
            <div className='card--content'>
              <h2 className='cards--topic'>GALLE</h2>
              
            </div>
          </div>

          <div className='card'>
            <img src="https://images.pexels.com/photos/19159247/pexels-photo-19159247/free-photo-of-landscape-field-countryside-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='sigiriya' className='img'></img>
            <div className='card--content'>
              <h2 className='cards--topic'>RATNAPURA</h2>
             
            </div>
          </div>

          
    </div>
    
    </>
  );
}

export default Home;
