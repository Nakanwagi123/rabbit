import React from "react";
import "./navbar.js";
import "./navbar.css";

function Navbar(){
return(
    <>
        <section>
        <div class="container">
        <div class="split">
        <div class="button"><i class="fas fa-bars"></i></div>
        <div class="profile">
        Profile
        </div>
        <div class="dropdown"><ul><li>RideHistory</li><li>Support</li><li>About</li></ul></div>
        <div class="rest">Signup to drive</div>
        </div>
        </div>
        </section>
    </>
)
}

export default Navbar;