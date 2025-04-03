function About() {
  const x = "文字です";
  return (
    <section>
      <img className="lefttop-img about-img" src="1.jpeg" alt="自分の写真" />
      <p className="about-messege">{x.repeat(200)}</p>
    </section>
  );
}

export default About;
