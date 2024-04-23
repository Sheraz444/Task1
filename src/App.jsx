import React from 'react'
import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../src/Images/logoo.png'
import hero from '../src/Images/hero.jpeg'
const App = () => {
  return (
    <>
 
<div className='container-fluid logo mt-5'>
<img src={logo} alt="" />
</div>

{/*============================= WELLCOME =================  */}
<div className="wrapper">
  <div className="container">
  <div className="row">
<div className="left col-md-6">
<h1>Welcome to Veloce Capital: Your Path to Profitable Investments</h1>
<span>At Veloce Capital, we specialize in unlocking the potential of secondary and tertiary real estate markets, offering our investors a gateway to lucrative opportunities with an attractive risk and return profile</span>
</div>


<div className="right col-md-6 ">
  
    <div className="">
      <img src={hero} alt="" />
    </div>
  </div>
  </div>
  </div>
</div>

{/* ========================= Blue =============================== */}

<div className="container-fluid " style={{backgroundColor: "rgb(9, 107, 253)", marginTop: "60px"}}>
  <div className="container" style={{paddingBottom: "20px"}}>
    <div className="row">
      <div className="col-md-6 lefti">

        <div className="heading">
          <h1>Why Veloce Capital?</h1>
          <p>Expertise: With years of experience in the industry, our team at Veloce Capital possesses unparalleled expertise in structuring and financing complex real estate transactions. We understand the nuances of the market, allowing us to identify high-yielding investment avenues that others may overlook.</p>
        </div>
      </div>
      <div className="col-md-6 righti">
        <p>Profitability: Our track record speaks for itself. Veloce Capital has consistently delivered substantial profits for our investors. We attribute this success to our hands-on entrepreneurial approach, coupled with institutional-grade execution and meticulous data-driven analysis.</p>
      </div>
    </div>
  </div>
</div>

<div className="heading col" style={{marginTop: "50px", marginLeft: "25px"}}>
  <h1>Investment Strategy</h1>
</div>
<div className="container">
  <div className="row " style={{marginTop: "30px"}}>
<div className="col-md-4"style={{fontSize: "19px"}}>
  <h3>Collateralized Real Estate</h3>
  <p>We specialize in collateralized real estate investments, offering our investors the security of tangible assets while maximizing returns</p>
</div>
<div className="col-md-4" style={{fontSize: "19px"}}>
<h3>Redevlopment Oportunites</h3>
  <p>Veloce Capital identifies and capitalizes on redevelopment opportunities, breathing new life into underutilized properties and unlocking their full potential.</p>
</div>
<div className="col-md-4" style={{fontSize: "19px"}}>
<h3>CO-GP Ventures</h3>
  <p>Collaborative opportunities with seasoned partners allow us to leverage collective expertise and resources, ensuring mutually beneficial outcomes for all stakeholders involved.</p>
</div>
  </div>
</div>

{/* ============================ form Sction ============================= */}

<div className="container " style={{marginTop: "80px"}}>
  <div className="row ">
    <div className="col-md-6 " style={{marginTop: "20%", padding: "18px"}}>
      <div className="join">
        <h1>Join Us Today</h1>
        <p style={{fontSize: "18px"}}>Ready to embark on a journey towards financial prosperity? Simply provide us with your name, email, phone number, and a few additional details, and you'll be one step closer to unlocking exclusive investment opportunities with Veloce Capital</p>
      </div>
    </div>
    <div className="col-md-6" style={{padding:"30px", border: "2px solid silver", maxWidth: "65vh", marginLeft: ""}}> 
 <div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
  </div>

  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Number" />
  </div>

  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Investment Amount" />
  </div>
  <div className="txt">
 <div className="form-check">
  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  I agree to receive marketing messaging from Realty Mercato Inc. at the phone number and email provided above. I understand I will receive at least two messages a month, data charges may apply, reply STOP to opt out.
  </label>
</div>


    
  </div>
  <div class="d-grid gap-2" style={{margin: "20px"}}>
  <button class="btn btn-primary" type="button">Submit</button>
  
</div>
<div style={{fontSize: "22px"}}>
<a href="">Privacy Policy</a> <span>|</span> <a href="">Terms of Services</a>
</div>
</div>

    </div>
  </div>
</div>

<div className="col info" >
  <p style={{fontSize: "15px"}}>The information set forth herein does not constitute an offer to sell or a solicitation to purchase securities. Any offer to sell or solicitation of an offer to purchase securities, if made, shall only be made by delivery of confidential offering documents to persons or entities that have first been qualified by Veloce Capital or its affiliates. Veloce Capital and its affiliates are not registered broker-dealers or investment advisers under federal or state securities laws. Certain information contained herein may be “forward-looking” in nature. The actual performance of Veloce Capital, its affiliates or any investment it engages in may differ materially from those reflected or contemplated in such forward-looking statements or information. Past performance is not indicative of future results. Veloce Capital makes no representation or warranty, expressed or implied, concerning the accuracy or completeness of any of the information contained herein and has no responsibility to update such information. The information herein is not intended to provide, and should not be relied upon for, accounting, legal or tax advice. Appraised value to be verified by a third party, equity buy-in price is contingent upon the final appraised value and cap rate valuation is based on net operating income. Actual numbers may vary, these are estimates as close as possible</p>
</div>

<div className="fotter" style={{backgroundColor: "rgb(9, 107, 253)", marginTop: "60px", height: ""}}>
  <div className="container">
    <div className="row">
      <div className="col-md-6" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "40px", marginBottom: "30px"}}>
<h3>58 Main Street, 2nd Floor</h3>
<h3>Hackensack, NJ 07601</h3>
      </div>
      <div className="col-md-6" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h3>+1 201 786 6300</h3>
        <h3>Info@gmail.com</h3>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default App