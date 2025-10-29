import React, { useEffect, useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Auth() {
    const location =useLocation()
   useEffect(() => {
    if (location.pathname === "/auth/register") {
      setJustifyActive("tab2");
    } else {
      setJustifyActive("tab1");
    }
  }, [location.pathname]);
  const navigate = useNavigate();
  const [justifyActive, setJustifyActive] = useState("");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => {
              handleJustifyClick("tab1");
              navigate("/auth");
            }}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => {
              handleJustifyClick("tab2");
              navigate("/auth/register");
            }}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={justifyActive}>
          <Outlet />
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
