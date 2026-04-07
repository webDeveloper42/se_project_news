import "./Author.css";
import authorImg from "../../assets/me.JPG";
function Author() {
  return (
    <div className="author">
      <div className="author__content">
        <div className="author__img-container">
          <img
            src={authorImg}
            alt="Picture of the Author"
            className="author__img"
          />
        </div>
        <div className="author__text-content">
          <div className="author__title">About the author</div>
          <div className="author__description">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            <br />
            <br />
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Author;
