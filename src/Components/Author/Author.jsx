import "./Author.css";
import authorImg from "../../assets/me.JPG";
function Author() {
  return (
    <section className="author">
      <div className="author__content">
        <div className="author__img-container">
          <img
            src={authorImg}
            alt="Picture of the Author"
            className="author__img"
          />
        </div>
        <div className="author__text-content">
          <h2 className="author__title">About the author</h2>
          <p className="author__description">
            My name is Raymond. I'm a Software Engineer with knowledge of the
            MERN stack. I also am familiar with python, and google cloud. <br />
            <br />I had a long journey through TripleTen bootcamp, however it
            proved how resilient, disciplined and consistent I am. If that
            sounds like someone you need in your company, shoot me a dm in
            linkedin which can be found in the footer.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Author;
