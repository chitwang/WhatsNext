import React from "react";
import "./Landing.css";
import logo from "./logo1.png";
import svg from "./logo2.png";
import Typewriter from "typewriter-effect";

export default function Landing() {
    return (
        <>
            <div class="everything">
                <div class="logoandtext">
                        <img
                            style={{
                                borderRadius: "15vw",
                                width: "60%",
                            }}
                            src={logo}
                            alt="APP LOGO"
                            srcset=""
                        />
                    <div className="type">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter

                                    .typeString(
                                        "Always stay informed with campus activities!"
                                    )

                                    .start();
                            }}
                        />
                    </div>
                </div>
                <div class="hero-img">
                    {/* <img
                        src="https://digitshack.com/codepen/mentor7/illustration-mockups.svg"
                        alt=""
                    /> */}
                    <img src={svg} alt="" />
                </div>
            </div>
            <div class="social">
                <a>Connect with us:</a>
                <a href="https://facebook.com" class="btnSocial">
                    <i
                        class="fab fa-2x fa-facebook-f"
                        style={{ color: "blue" }}
                    ></i>
                </a>
                <a href="https://twitter.com" class="btnSocial">
                    <i
                        class="fab fa-2x fa-twitter"
                        style={{ color: "blue" }}
                    ></i>
                </a>
                <a href="https://instagram.com" class="btnSocial">
                    <i
                        class="fab fa-2x fa-instagram"
                        style={{ color: "blue" }}
                    ></i>
                </a>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        </>
    );
}
