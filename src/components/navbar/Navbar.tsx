import './navbar.css';
import { useState } from 'react';
import logo from '../../assets/logo.svg';

export default function Navbar() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  function toggleDialog(event: any) {
    if (!dialogIsOpen) {
      if (event.target instanceof HTMLSpanElement) {
        event.target.classList.remove('down-arrow');
        event.target.classList.add('up-arrow');
      } else if (event.target instanceof HTMLLIElement) {
        event.target.children[0].classList.remove('down-arrow');
        event.target.children[0].classList.add('up-arrow');
      }
    } else {
      if (event.target instanceof HTMLSpanElement) {
        event.target.classList.remove('up-arrow');
        event.target.classList.add('down-arrow');
      } else if (event.target instanceof HTMLLIElement) {
        event.target.children[0].classList.remove('up-arrow');
        event.target.children[0].classList.add('down-arrow');
      }
    }

    setDialogIsOpen(!dialogIsOpen);
  }

  function toggleSearch() {
    setSearchIsOpen(!searchIsOpen);
  }
  return (
    <div
      className={`navbar flex items-center p-6 font-light border-b border-mongodb-borderNav ${searchIsOpen ? 'navbar-search-open' : 'navbar-search-closed'}`}
    >
      <img
        src={logo.src}
        alt=""
        className={`w-[126px] ${searchIsOpen ? 'navbar-search-open' : 'navbar-search-closed'}`}
      />
      <ul
        className={`navbar-list relative flex items-center gap-10 ml-10 ${searchIsOpen ? 'navbar-list-search-open' : 'navbar-list-search-closed'}`}
      >
        <li className="flex items-center">
          Products
          <span className="material-symbols-outlined text-base">
            keyboard_arrow_down
          </span>
        </li>
        <li className="flex items-center">
          Resources
          <span className="material-symbols-outlined text-base">
            keyboard_arrow_down
          </span>
        </li>
        <li
          className="flex items-center"
          onClick={event => toggleDialog(event)}
        >
          Solutions
          <span className="material-symbols-outlined text-base">
            keyboard_arrow_down
          </span>
        </li>
        <li
          className="flex items-center relative"
          onClick={event => toggleDialog(event)}
        >
          Company
          <span className="material-symbols-outlined text-base">
            keyboard_arrow_down
          </span>
          <div
            className={`company-dialog w-[736px] h-[278px] rounded-3xl text-mongodb-header flex gap-2 ${dialogIsOpen ? 'dialog-open' : 'dialog-closed'}`}
          >
            <div className="company-dialog-left">
              <div>
                <h2>Careers</h2>
                <h3>Start your next adventure</h3>
              </div>
              <div>
                <h2>Partners</h2>
                <h3>Learn aboout our partner ecosystem</h3>
              </div>
              <div>
                <h2>Blog</h2>
                <h3>Read articles and announcements</h3>
              </div>
              <div>
                <h2>Leadership</h2>
                <h3>Meet our executive team</h3>
              </div>
              <div>
                <h2>Newsroom</h2>
                <h3>Read press releases and news stories</h3>
              </div>
              <div>
                <h2>Company</h2>
                <h3>Learn more about who we are</h3>
              </div>
            </div>
            <div className="company-dialog-right grow flex flex-col gap-2">
              <div className="grow">
                <h4>Contact Us</h4>
                <h5>Reach out to MongoDB</h5>
                <div className="grow"></div>
                <div className="lets-chat">
                  <div>Let's chat</div>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="grow">
                <h4>Contact Us</h4>
                <h5>Reach out to MongoDB</h5>
                <div className="grow"></div>
                <div className="lets-chat">
                  <div>Let's chat</div>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex items-center">Pricing</li>
        <div className="search-div">
          <input
            type="text"
            placeholder="Search products, whitepapers, & more"
          />
          <input type="text" placeholder="General Information" />
          <span
            onClick={() => toggleSearch()}
            className="material-symbols-outlined search-button-interior bg-mongodb-text"
          >
            search
          </span>
        </div>
      </ul>
      <div className="grow"></div>
      <ul
        className={`navbar-list flex items-center gap-10 ml-10 ${searchIsOpen ? 'navbar-search-open' : 'navbar-search-closed'}`}
      >
        <li>
          {!searchIsOpen ? (
            <span
              onClick={() => toggleSearch()}
              className="material-symbols-outlined"
            >
              search
            </span>
          ) : (
            <span
              onClick={() => toggleSearch()}
              className="material-symbols-outlined"
            >
              close
            </span>
          )}

          <span className="material-symbols-outlined ml-10">language</span>
          <div className="ml-2">Eng</div>
          <span className="material-symbols-outlined text-base ml-1">
            keyboard_arrow_down
          </span>
        </li>
        <li>Support</li>
        <li>Sign In</li>
      </ul>
      <button className="navbar-button rounded-md bg-mongodb-button py-3 px-6 border border-mongodb-border font-medium ml-10">
        Try Free
      </button>
    </div>
  );
}
