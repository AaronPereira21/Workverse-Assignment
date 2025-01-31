import logo from "../assets/logo.png";
import dummyImage from "../assets/dummy-image.png"; 
import mainImage from "../assets/group679.png";
import tick from "../assets/vector.png";
import instalogo from "../assets/insta.png";
import fblogo from "../assets/fb.png";
import linkedinlogo from "../assets/linkedin.png"
import xlogo from "../assets/X.png";

const WorkverseBanner = () => {
  const bannerStyle = {
    width: "968px",
    height: "2250px",
    backgroundColor: "#000000",
    position: "relative",
  };

  const rectangleStyle = {
    width: "556px",
    height: "1836px",
    position: "absolute",
    top: "42px",
    left: "207px",
    borderRadius: "13px 0px 0px 0px",
    background: "linear-gradient(90deg, #1F221B 0%, #1A2E2F 100%)",
    display: "flex",
    flexDirection: "column",
  };

  const logoStyle = {
    width: "204px",
    height: "45px",
    marginTop: "25px",
    marginLeft: "auto",
    marginRight: "auto"
  };

  const lineStyle = {
    width: "495px",
    borderTop: "1px solid #FFFFFF2B",
    marginTop: "22px",
    marginLeft: "auto",
    marginRight: "auto"
  };

  const textStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "30.24px",
    textAlign: "left",
    color: "#FFFFFF",
    marginTop: "41px", 
    marginLeft: "35px", 
  };

  const nameStyle = {
    color: "#9CE325", 
  };

  const dummyImageStyle = {
    width: "496px",
    height: "166px",
    objectFit: "contain",
    marginLeft:"auto",
    marginRight:"auto"
  };

  const textBelowImageStyle = {
    width: "495px",
    height: "138px",
    top: "398px",  
    left: "236px", 
    opacity: 1, 
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16.38px",
    textAlign: "left",
    color: "#FFFFFF",  
    marginTop: "10px", 
    marginLeft: "35px",
  };

  const mainImageStyle = {
    width: "495px",
    height: "268px",
    marginLeft:"auto",
    marginRight:"auto"
  };

  const headerBelowMain = {
    width: "495px",
    height: "36px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "22.68px",
    textAlign: "left",
    color: "#FFFFFF",  
    marginLeft: "35px",
    textUnderlinePosition:"from-font",
  };

  const tickstyle = {
    width: "12px",
    height: "9px",
    marginLeft: "35px"
  };

  const tickTextStyle = {
    display: "flex",
    alignItems: "center",
    top: "874px",
    left: "276px",
    gap: "5px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16.38px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#DEDEDE", 
  };

  const headerBeforeGrid = {
    width: "495px",
    height: "36px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "22.68px",
    textAlign: "left",
    color: "#FFFFFF",  
    marginLeft: "35px",
    textUnderlinePosition:"from-font",
  };

  const headerBeforeGridSpan = {
    color:" #9CE325",
  };

  // Style for the boxes
  const boxStyle = {
    width: "236px",
    height: "241px",
    background: "linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1885) 100%)",
    borderRadius: "10px 0px 0px 0px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    
  };

  const dummyImageBoxStyle = {
    width: "204px",
    height: "99px",
    objectFit: "contain",
    margin: "auto",
  };

  const headingStyle = {
    width: "148px",
    height: "12px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20.16px",
    textAlign: "left",
    color: "#9CE325",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const descriptionTextStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16.38px",
    letterSpacing: "-0.02em",
    textAlign: "center", // Corrected to only appear once
    color: "#B6B6B6",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  // New text layout
  const textLayoutStyle = {
    width: "495px",
    height: "58px",
    top: "1532px",
    left: "237px",
    gap: "0px",
    opacity: "1", 
    marginLeft:"35px"
  };

  const spanStyle = {
    color: "#9CE325",
  };

  const textStyleForNewText = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "16.38px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#FFFFFF", 
  };

  const buttonStyle = {
    width: "204px",
    height: "38px",
    top: "1610px",
    left: "237px",
    gap: "0px",
    borderRadius: "6px",
    backgroundColor: "#9CE325",
    opacity: "1",  // Set opacity to 1 to make it visible
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginLeft:"35px",
    marginTop:"30px",  // Optional: to show the pointer on hover
  };
  
  const buttonTextStyle = {
    width: "164px",
    height: "12px",
    top: "1623px",
    left: "257px",
    gap: "0px",
    opacity: "1",  // Set opacity to 1 to make it visible
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "20.16px",
    textAlign: "center",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#1F292A",
    
  };

  return (
    <div style={bannerStyle}>
      <div style={rectangleStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <div style={lineStyle}></div>
        <div>
          <p style={textStyle}>
            Dear <span style={nameStyle}>[Name]</span>,
          </p>
        </div>
        <img src={dummyImage} alt="Dummy" style={dummyImageStyle} />
        <div style={textBelowImageStyle}>
          <p>
            We hope you enjoyed playing & learning while SAVING THE COMPANY from crashing!<br />
            But this was just a quick taster to show you how learning in gamified simulations can be enjoyable and memorable.<br />
            How about now learning how to engage with <span style={nameStyle}>10+ unique personalities, building mind maps to break down complex problems and connect the dots to perform boss-impressing jugaads?</span>
          </p>
        </div>
        <img src={mainImage} alt="buy" style={mainImageStyle} />
        <div style={headerBelowMain }>
          <p style={{
            marginTop:"13px",
          }}>
            Why your workplace intelligence will give you a unique edge in career growth
          </p>
        </div>

        <div style={tickTextStyle}>
          <img src={tick} alt="Tick" style={tickstyle} />
          <p>Strong intellectual foundation to tackle 50+ scenarios on your job</p>
        </div>
        <div style={tickTextStyle}>
          <img src={tick} alt="Tick" style={tickstyle} />
          <p>Skill-Insurance against replacement by AI at work</p>
        </div>
        <div style={tickTextStyle}>
          <img src={tick} alt="Tick" style={tickstyle} />
          <p>Scenarios based on wisdom of 1000+ successful professionals</p>
        </div>

        <div style={headerBeforeGrid}>
          <p>What’s Included in the <span style={headerBeforeGridSpan}>Solve Pack</span></p>
        </div>

        {/* Boxes */}
        <div style={{ display: "flex", justifyContent: "space-around", marginTop:"5px" }}>
          {/* First Box */}
          <div style={boxStyle}>
            <img src={dummyImage} alt="Dummy" style={dummyImageBoxStyle} />
            <p style={headingStyle}>Immersive Learning</p>
            <p style={descriptionTextStyle}>
              Master 3 Sub-skills: Asking right questions, Breaking down problems, and Connecting dots
            </p>
          </div>

          {/* Second Box */}
          <div style={boxStyle}>
            <img src={dummyImage} alt="Dummy" style={dummyImageBoxStyle} />
            <p style={headingStyle}>12-Month Support</p>
            <p style={descriptionTextStyle}>
            Neuroda co-thinking support for challenges on your actual job
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* Third Box */}
          <div style={boxStyle}>
            <img src={dummyImage} alt="Dummy" style={dummyImageBoxStyle} />
            <p style={headingStyle}>Evaluation</p>
            <p style={descriptionTextStyle}>
            Strengths & Areas of improvement evaluation with lifetime viewing access
            </p>
          </div>

          {/* Fourth Box */}
          <div style={boxStyle}>
            <img src={dummyImage} alt="Dummy" style={dummyImageBoxStyle} />
            <p style={headingStyle}>Certificate</p>
            <p style={descriptionTextStyle}>
            Shareable LinkedIn Certificate for success
            </p>
          </div>
        </div>

        {/* New Text Layout */}
        <div style={textLayoutStyle}>
          <p style={textStyleForNewText}>
            Also, attached is <span style={spanStyle}>your personalized certificate for saving the company</span>. 
            Feel free to share and show off on your LinkedIn!<br />
            <br />
            Neuroda is waiting to share more wisdom with you in the Workverse.
          </p>
        </div>
        <div style={buttonStyle}>
            <p style={buttonTextStyle}>View your Certificate</p>
       </div>
       <div style={{
            fontSize:"10px",
            color:"#82D62E",
            marginLeft:"35px"
       }}>
            <p>
                [link to same]
                <br></br>
                one more line if needed
            </p>
       </div>
       <div style={lineStyle}></div>
       <div style={{
            height: "10px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "13px",
            lineHeight: "16.38px",
            marginLeft:"auto",
            marginRight:"auto",
            marginBottom:"20px",
            color:"#DEDEDE"
            }}>
            <p>
            I look forward to seeing you on the Forbes List of top young professionals soon
            </p>
        </div>
        
        <div style={{ 
                textAlign: "center", 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontSize: "13px", 
                fontWeight: "400", 
                lineHeight: "16.38px", 
                color: "#FFFFFF", 
                
            }}>
                <p>- samay chakrabraty
                    <br></br>
                <a href="https://www.linkedin.com/in/samaychakrabraty" 
                    style={{ 
                    color: "#9CE325", 
                    textDecoration: "none" 
                }} 
                target="_blank" 
                rel="noopener noreferrer">
                connect on linkedin
                </a>
                </p>
                    <p style={{ marginTop: "10px" }}>on behalf of
                        <br></br>
                Team Workverse</p>
        </div>
        
    </div>
    <footer>
    <div style={{paddingTop:"1920px", marginLeft:"auto",marginRight:"auto", width: '407px', height: '110px', color: '#6A6A6A', fontSize: '10px', textAlign: 'center' }}>
    <p>You are receiving this email because you completed “Save the Company” experience</p>
    <hr style={{ border: '1px solid #6A6A6A' }} />
    
    <div style={{ marginTop: '5px' }}>
      <a href="https://instagram.com" style={{ textDecoration: 'none', color: '#6A6A6A' }}>
        <img src={instalogo} width="20" height="20" alt="Instagram logo" />
      </a>
      <a href="https://facebook.com" style={{ paddingLeft:'5px',paddingRight:'5px',textDecoration: 'none', color: '#6A6A6A' }}>
        <img src={fblogo} width="20" height="20" alt="Facebook logo" />
      </a>
      <a href="https://x.com" style={{ paddingLeft:'5px',paddingRight:'5px',textDecoration: 'none', color: '#6A6A6A' }}>
        <img src={xlogo} width="20" height="20" alt="X logo" />
      </a>
      <a href="https://linkedin.com" style={{paddingLeft:'5px', textDecoration: 'none', color: '#6A6A6A' }}>
        <img src={linkedinlogo} width="20" height="20" alt="LinkedIn logo" />
      </a>
    </div>
    <div>
      <a href="https://visitworkverse.in" style={{ textDecoration: 'none', color: '#6A6A6A' }}>
        visitworkverse.in
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href="unsubscribe_link" style={{ textDecoration: 'none', color: '#6A6A6A' }}>
        unsubscribe from this list
      </a>
    </div>
    <div>
      &nbsp;&nbsp;&nbsp;
      <a href="contact_us_link" style={{ textDecoration: 'none', color: '#6A6A6A' }}>
        contact us
      </a>
    </div>
  </div>
    </footer>
    </div>
  );
};

export default WorkverseBanner;
