import "./User.css";
import UserCardSection from "../UserCardSection/UserCardSection";

function User() {
  return (
    <div className="user">
      <div className="user__content">
        <div className="user__header-text">
          <div className="user__header-top">Saved articles</div>
          <div className="user__header-title">
            Raymond, you have 5 saved articles
          </div>
          <div className="user__header-description">
            By keywords:{" "}
            <span className="user__header-tags">
              Nature, Yellowstone, and 2 others
            </span>
          </div>
        </div>
        <UserCardSection />
      </div>
    </div>
  );
}
export default User;
