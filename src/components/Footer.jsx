import React from "react";
import "../assets/styles/footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
          <a target="_blank" href="http://ebisuya.com/instagram">
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
