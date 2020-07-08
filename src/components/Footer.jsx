import FacebookIcon from "@material-ui/icons/Facebook";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../assets/styles/footer.css";

const Footer = (props) => {
  const today = new Date();
  const thisYear = today.getFullYear();
  return (
    <footer>
      <div className="footer-limiter">
        <div className="footer-right">
          <a target="_blank" href="https://twitter.com/ebisuyacom">
            <TwitterIcon />
          </a>
          <a target="_blank" href="https://ja-jp.facebook.com/EbisuyaAsakusa">
            <FacebookIcon />
          </a>
          <a target="_blank" href="https://www.instagram.com/ebisuya_rickshaw/">
            <InstagramIcon />
          </a>
        </div>

        <div className="footer-left">
          <div className="footer-links">
            <p>Made with </p>
            <FavoriteIcon className="heart-icon" />
            <p>
              by
              <a target="_blank" href="http://www.ebisuya.com/">
                Ebisuya
              </a>
            </p>
          </div>

          <p>Copyright © {thisYear} | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
