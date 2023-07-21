import "./skill.scss";

const Skill = (props) => {
  return (
    <>
      <div className="skill-box">
        <div className="skill-title">
          <div className="img">
            <img src={props.image} alt="" />
          </div>
          <h3>{props.name}</h3>
        </div>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default Skill;
