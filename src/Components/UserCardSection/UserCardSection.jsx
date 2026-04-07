import "./UserCardSection.css";
import Trash from "../../assets/trash.svg";
import Dog from "../../assets/dog.png";
import Winter from "../../assets/winter.png";
import Mountain from "../../assets/mountain.png";
function UserCardSection() {
  return (
    <div className=" user-cards__card-section">
      <div className="user-cards__content">
        <div className="user-cards__list user__cards-list">
          <div className="user-cards__card">
            <div className="user-cards__header">
              <div className="user-cards__header-tag">Nature</div>
              <div className="user-cards__bookmark">
                <img src={Trash} alt="Trash Icon" />
              </div>
              <div className="user-cards__header-confirm-delete">
                Remove from saved
              </div>
              <img src={Dog} alt="" className="user-cards__img" />
            </div>
            <div className="user-cards__texts-content">
              <div className="user-cards__texts-header">
                <div className="user-cards__date">November 4, 2020</div>
                <div className="user-cards__title">
                  Everyone Needs a Special 'Sit Spot' in Nature
                </div>
              </div>
              <div className="user-cards__description">
                Ever since I read Richard Louv's influential book, "Last Child
                in the Woods," the idea of having a special "sit spot" has stuck
                with me. This advice, which Louv attributes to nature educator
                Jon Young, is for both adults and children to find...
              </div>
              <div className="user-cards__footer-text">TREEHUGGER</div>
            </div>
          </div>
          <div className="user-cards__card">
            <div className="user-cards__header">
              <div className="user-cards__header-tag">Nature</div>
              <div className="user-cards__bookmark">
                <img src={Trash} alt="Trash Icon" />
              </div>
              <div className="user-cards__header-confirm-delete">
                Remove from saved
              </div>
              <img src={Mountain} alt="" className="user-cards__img" />
            </div>
            <div className="user-cards__texts-content">
              <div className="user-cards__texts-header">
                <div className="user-cards__date">February 19, 2019</div>
                <div className="user-cards__title">Nature makes you better</div>
              </div>
              <div className="user-cards__description">
                We all know how good nature can make us feel. We have known it
                for millennia: the sound of the ocean, the scents of a forest,
                the way dappled sunlight dances through leaves. из местных чудес
                природы.
              </div>
              <div className="user-cards__footer-text">NATIONAL GEOGRAPHIC</div>
            </div>
          </div>
          <div className="user-cards__card">
            <div className="user-cards__header">
              <div className="user-cards__header-tag">Yellowstone</div>
              <div className="user-cards__bookmark">
                <img src={Trash} alt="Trash Icon" />
              </div>
              <div className="user-cards__header-confirm-delete">
                Remove from saved
              </div>
              <img src={Winter} alt="" className="user-cards__img" />
            </div>
            <div className="user-cards__texts-content">
              <div className="user-cards__texts-header">
                <div className="user-cards__date">October 19, 2020</div>
                <div className="user-cards__title">
                  Grand Teton Renews Historic Crest Trail
                </div>
              </div>
              <div className="user-cards__description">
                “The linking together of the Cascade and Death Canyon trails, at
                their heads, took place on October 1, 1933, and marked the first
                step in the realization of a plan whereby the hiker will be...
              </div>
              <div className="user-cards__footer-text">NATIONAL GEOGRAPHIC</div>
            </div>
          </div>
          <div className="user-cards__card">
            <div className="user-cards__header">
              <div className="user-cards__header-tag">Parks</div>
              <div className="user-cards__bookmark">
                <img src={Trash} alt="Trash Icon" />
              </div>
              <div className="user-cards__header-confirm-delete">
                Remove from saved
              </div>
              <img src={Winter} alt="" className="user-cards__img" />
            </div>
            <div className="user-cards__texts-content">
              <div className="user-cards__texts-header">
                <div className="user-cards__date">October 19, 2020</div>
                <div className="user-cards__title">
                  Grand Teton Renews Historic Crest Trail
                </div>
              </div>
              <div className="user-cards__description">
                “The linking together of the Cascade and Death Canyon trails, at
                their heads, took place on October 1, 1933, and marked the first
                step in the realization of a plan whereby the hiker will be...
              </div>
              <div className="user-cards__footer-text">NATIONAL GEOGRAPHIC</div>
            </div>
          </div>
          <div className="user-cards__card">
            <div className="user-cards__header">
              <div className="user-cards__header-tag">Photography</div>
              <div className="user-cards__bookmark">
                <img src={Trash} alt="Trash Icon" />
              </div>
              <div className="user-cards__header-confirm-delete">
                Remove from saved
              </div>
              <img src={Winter} alt="" className="user-cards__img" />
            </div>
            <div className="user-cards__texts-content">
              <div className="user-cards__texts-header">
                <div className="user-cards__date">October 19, 2020</div>
                <div className="user-cards__title">
                  Grand Teton Renews Historic Crest Trail
                </div>
              </div>
              <div className="user-cards__description">
                “The linking together of the Cascade and Death Canyon trails, at
                their heads, took place on October 1, 1933, and marked the first
                step in the realization of a plan whereby the hiker will be...
              </div>
              <div className="user-cards__footer-text">NATIONAL GEOGRAPHIC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserCardSection;
