import Events from "./Events";

export const Home = () => {

    return (
        <div> 
           <div class="container">
  <div class="wrapper">
    <div class="header">
      <img src="public/logo.png" alt="" srcset="" />
    </div>
    <div class="main">
        <div class = "typewriter">
    <h1> <span class="auto-type"></span> </h1></div>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

      <div class="hero-img"><img src="https://digitshack.com/codepen/mentor7/illustration-mockups.svg" alt="" /></div>
      <div class="hero-text">
       
        <h1>Always stay informed with campus activities!</h1>
        <p>WhatsNext re-imagines the way we build communities. You can inform campus ! 
          Create audience for your events easily and never miss anything in campus !.</p>
       
      </div>
    </div>
    <div class="social">
      <a href="#">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</div>
        </div>
    )
}

