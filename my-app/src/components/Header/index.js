import React, { useState } from "react";
import { Wrapper, Content } from "./header.style";
import { Link } from "react-router-dom";

import SideNav from "../SideNav";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        {/* <div className="logo">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/fire-optics.svg"}
              alt="logo"
            />
          </Link>
        </div> */}
        <Content>
          <a href="#goals">Goals</a>
          <Link to="https://healthy-nephew-264.notion.site/Design-Log-28146004f6e8455387dc545bd8700806">
            Design Log
          </Link>
          <Link to="https://healthy-nephew-264.notion.site/Timeline-6e9fde45ffba434ca89727e00fdc5eb7">
            Timeline
          </Link>
          <a href="#background">Background</a>
          <Link to="https://healthy-nephew-264.notion.site/Fire-Optics-0e186c0df5ab48ef9558f62e24fc2a2e#e606b7ffaa2c4a80bf134ee094b20cfb">
            Team
          </Link>
          <Link to="/#">Contact Us</Link>
        </Content>
        {open && (
          <div className="top">
            <div className="close" onClick={() => setOpen(false)}>
              <CloseIcon />
            </div>
          </div>
        )}
        <SideNav show={open} />
      </Wrapper>
    </>
  );
};

export default Header;
