import logo from "../assets/logo.png";
import dummyImage from "../assets/dummy-image.png";
import tick from "../assets/vector.png";
import instalogo from "../assets/insta.png";
import fblogo from "../assets/fb.png";
import linkedinlogo from "../assets/linkedin.png";
import xlogo from "../assets/X.png";

const WorkverseBanner = () => {
  // Common styles
  const commonStyles = {
    flexCol: {
      display: "flex",
      flexDirection: "column",
    },
    text: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: "#FFFFFF",
    },
    greenText: {
      color: "#9CE325",
    },
    sectionSpacing: {
      margin: "20px 0",
    },
  };

  return (
    <div style={{
      ...commonStyles.flexCol,
      backgroundColor: "#000000",
      minHeight: "100vh",
      padding: "2rem",
      maxWidth: "968px",
      margin: "0 auto",
    }}>
      {/* Main Content */}
      <div style={{
        ...commonStyles.flexCol,
        background: "linear-gradient(90deg, #1F221B 0%, #1A2E2F 100%)",
        borderRadius: "13px 0 0 0",
        padding: "1.5rem",
        gap: "1.5rem",
        maxWidth:"600px"
      }}>
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo" 
          style={{ 
            width: "min(204px, 50%)", 
            margin: "0 auto" 
          }} 
        />

        <hr style={{ borderTop: "1px solid #FFFFFF2B", width: "100%" }} />

        {/* Greeting */}
        <h1 style={{ ...commonStyles.text, fontSize: "1.5rem" }}>
          Dear <span style={commonStyles.greenText}>[Name]</span>,
        </h1>

        {/* Main Image Section */}
        <div style={{ ...commonStyles.flexCol, gap: "1rem" }}>
          <img 
            src={dummyImage} 
            alt="Content" 
            style={{ width: "100%", height: "auto" }}
          />
          
          <p style={{ ...commonStyles.text, fontSize: "0.9rem" }}>
            We hope you enjoyed playing & learning while SAVING THE COMPANY from crashing!
            <br /><br />
            But this was just a quick taster to show you how learning in gamified simulations can be enjoyable and memorable.
            <br /><br />
            How about now learning how to engage with{" "}
            <span style={commonStyles.greenText}>
              10+ unique personalities, building mind maps to break down complex problems and connect the dots to perform boss-impressing jugaads?
            </span>
          </p>
        </div>

        {/* Pricing Section */}
        <div style={{
          ...commonStyles.flexCol,
          background: "linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1885) 100%)",
          padding: "1.5rem",
          borderRadius: "10px",
          gap: "1rem",
          textAlign: "center",
        }}>
          <h2 style={{ ...commonStyles.text, fontSize: "1.2rem" }}>
            Activate your workplace intelligence
          </h2>
          <p style={{ ...commonStyles.text, fontSize: "0.9rem", color: "#B6B6B6" }}>
            Gain expert mastery over Creative Problem Solving - a superpower for sure shot success at work.
          </p>
          <div>
            <p style={{ ...commonStyles.text, fontSize: "0.75rem", color: "#767676" }}>
              Unlock Full Access for
              <br />
              <span style={{ fontSize: "1.2rem", ...commonStyles.greenText }}>
                INR 1,599/- Only
              </span>
            </p>
          </div>
          <button style={{
            backgroundColor: "#9CE325",
            padding: "0.8rem 2rem",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: "700",
            margin: "0 auto",
          }}>
            Buy Solve Pack
          </button>
        </div>

        {/* Features List */}
        <div style={{ ...commonStyles.flexCol, gap: "1rem" }}>
          <h3 style={{ ...commonStyles.text, fontSize: "1.1rem" }}>
            Why your workplace intelligence will give you a unique edge in career growth
          </h3>
          
          {[
            "Strong intellectual foundation to tackle 50+ scenarios on your job",
            "Skill-Insurance against replacement by AI at work",
            "Scenarios based on wisdom of 1000+ successful professionals"
          ].map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <img src={tick} alt="Tick" style={{ width: "12px" }} />
              <p style={{ ...commonStyles.text, fontSize: "0.9rem" }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Package Features Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
        }}>
          {[
            { title: "Immersive Learning", text: "Master 3 Sub-skills: Asking right questions, Breaking down problems, and Connecting dots" },
            { title: "12-Month Support", text: "Neuroda co-thinking support for challenges on your actual job" },
            { title: "Evaluation", text: "Strengths & Areas of improvement evaluation with lifetime viewing access" },
            { title: "Certificate", text: "Shareable LinkedIn Certificate for success" },
          ].map((item, i) => (
            <div key={i} style={{
              ...commonStyles.flexCol,
              background: "linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1885) 100%)",
              borderRadius: "10px",
              padding: "1rem",
              gap: "1rem",
            }}>
              <img 
                src={dummyImage} 
                alt={item.title} 
                style={{ width: "70%", height: "auto", margin: "0 auto" }} 
              />
              <h4 style={{ ...commonStyles.text, ...commonStyles.greenText, textAlign: "center" }}>
                {item.title}
              </h4>
              <p style={{ ...commonStyles.text, fontSize: "0.8rem", textAlign: "center" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        <div style={{ ...commonStyles.flexCol, gap: "1rem" }}>
          <p style={{ ...commonStyles.text, fontSize: "0.9rem" }}>
            Also, attached is{" "}
            <span style={commonStyles.greenText}>
              your personalized certificate for saving the company
            </span>. Feel free to share and show off on your LinkedIn!
            <br /><br />
            Neuroda is waiting to share more wisdom with you in the Workverse.
          </p>
          <button style={{
            backgroundColor: "#9CE325",
            padding: "0.8rem 2rem",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: "700",
            margin: "0 auto",
          }}>
            View your Certificate
          </button>
        </div>

        {/* Footer */}
        <hr style={{ borderTop: "1px solid #FFFFFF2B", width: "100%" }} />
        
        <div style={{ ...commonStyles.flexCol, gap: "1rem", textAlign: "center" }}>
          <p style={{ ...commonStyles.text, fontSize: "0.9rem" }}>
            I look forward to seeing you on the Forbes List of top young professionals soon
          </p>
          
          <div>
            <p style={{ ...commonStyles.text, fontSize: "0.9rem" }}>
              - samay chakrabraty
              <br />
              <a href="https://www.linkedin.com/in/samaychakrabraty" 
                style={{ ...commonStyles.greenText, textDecoration: "none" }}>
                connect on linkedin
              </a>
            </p>
            <p style={{ ...commonStyles.text, fontSize: "0.9rem" }}>
              on behalf of
              <br />
              Team Workverse
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{
        ...commonStyles.flexCol,
        gap: "1rem",
        color: "#6A6A6A",
        fontSize: "0.7rem",
        textAlign: "center",
        padding: "2rem 0",
      }}>
        <p>You are receiving this email because you completed “Save the Company” experience</p>
        
        <hr style={{ borderTop: "1px solid #6A6A6A", width: "100%" }} />
        
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          {[instalogo, fblogo, xlogo, linkedinlogo].map((icon, i) => (
            <a key={i} href="/" style={{ textDecoration: "none" }}>
              <img src={icon} alt="Social" style={{ width: "20px", height: "20px" }} />
            </a>
          ))}
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://visitworkverse.in" style={{ color: "#6A6A6A", textDecoration: "none" }}>
            visitworkverse.in
          </a>
          <a href="/unsubscribe" style={{ color: "#6A6A6A", textDecoration: "none" }}>
            unsubscribe from this list
          </a>
          
          <a href="/contact" style={{ color: "#6A6A6A", textDecoration: "none" }}>
            contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkverseBanner;