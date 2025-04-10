import ProfileTimeline from "./ProfileTimeline";

function Experience() {
  return (
    <section className="experience">
      <h1>Experience</h1>
      <div>
        {" "}
        <p className="exp-intro">
          せっかくなので
          <br className="sp-only" />
          今までの私を一緒に振り返りましょう
        </p>{" "}
        <ProfileTimeline />
      </div>
    </section>
  );
}

export default Experience;
