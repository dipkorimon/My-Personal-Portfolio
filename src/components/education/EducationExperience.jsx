import "./educationExperience.scss";

const EducationExperience = () => {
  return (
    <div className="education">
      <main className="row">
        {/* Education section */}
        <section className="col">
          <header className="title">
            <h2>Education</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>2018-2023</h4>
              <h3>
                Bachelor of Science, Computer Science and Telecommunication
                Engineering
              </h3>
              <p>Noakhali Science and Technology University</p>
            </div>
            <div className="box">
              <h4>2014-2016</h4>
              <h3>Higher Secondary, Science</h3>
              <p>Notre Dame College, Mymensingh</p>
            </div>
            <div className="box">
              <h4>2008-2014</h4>
              <h3>Secondary, Science</h3>
              <p>Kalmakanda Govt. Pilot High School</p>
            </div>
          </div>
        </section>
        {/* Experience section */}
        <section className="col">
          <header className="title">
            <h2>Experience</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>2018-Present</h4>
              <h3>Competitive Programming</h3>
              <p></p>
            </div>
            <div className="box">
              <h4>2019-Present</h4>
              <h3>Web Application Development</h3>
              <p></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EducationExperience;
