import './navbar.css';
import { useState } from 'react';
import logo from '../../assets/logo.svg';

export default function Navbar() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <div className="flex items-center p-6 font-light border-b border-mongodb-borderNav">
      <img src={logo.src} alt="" className="w-[126px]" />
      <ul className="navbar-list flex items-center gap-10 ml-10">
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
        <li className="flex items-center">
          Solutions
          <span className="material-symbols-outlined text-base">
            keyboard_arrow_down
          </span>
        </li>
        <li
          className="flex items-center relative"
          onClick={() => setDialogIsOpen(!dialogIsOpen)}
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
      </ul>
      <div className="grow"></div>
      <ul className="navbar-list flex items-center gap-10 ml-10">
        <li>
          <span className="material-symbols-outlined">search</span>
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
