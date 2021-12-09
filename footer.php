</section>
<footer>
  <div id="inner">
  <section id="beforeFoot">
    <div id="subscribe">
      Subscribe to R&R Aquaculture!<br />
      Stay in touch with River and Reef Aquaculture, see latest updates and much, much more.
    </div>
    <div id="half">
      <form>
        <input name="email" type="text" id="email" placeholder="Your e-mail*" required class="emailList" />
        <button type="submit" name="submit" class="mailList">SIGN UP NOW&nbsp;<i class="fas fa-arrow-right"></i></button>
      </form>
    </div>
  </section>
  <hr />
  <div id="footer3">
    <section id="logoSection">
      <p><a href="https://riverandreef.store/main.php"><img src="./img/blank_img.png" height="100" width="200" alt="River and Reef Aquaculture LLC Logo" id="logo" /></a><br />
      River and Reef Aquaculture LLC<br />
      <strong>Hours of Operation</strong><br />
      Mon-Fri: 10am - 9pm EST<br />
      Sat & Sun: 12pm to 9pm EST<br /><br />

      Main: ###-###-####<br />
      <a href="mailto:riverandreefaquaculture@gmail.com">riverandreefaquaculture@gmail.com</a>
      </p>
    </section>
    <section id="footLinks1">
      <p class="footHead">Learn more</p>
      <p>
        <a href="#">About Us</a><br />
        <a href="#">Meet the Team</a>
      </p>
    </section>
    <section id="footLinks2">
      <p class="footHead">Getting Help</p>
      <p>
        <a href="#">FAQ</a><br />
        <a href="#">Track Orders</a><br />
        <a href="#">Contact Us</a>
      </p>
    </section>
    <section id="footLinks3">
      <p class="footHead">Policies</p>
      <p>
        <a href="#">Fast Shipping Policy</a><br />
        <a href="#">Return Policy</a><br />
        <a href="#">Internet Taxes</a><br />
        <a href="#">Privacy</a>
      </p>
    </section>
</div>
</div>
</footer>
</div>

    <script>
    grecaptcha.ready(function() {
        grecaptcha.execute('6LefRw4dAAAAANexYiV4MxbYODkg3eFkMDBfMIBT', {action: 'submit'}).then(function(token) {
            var recaptchaResponse = document.getElementById('recaptchaResponse');
            recaptchaResponse.value = token;
        });
    });
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
  </script>
</body>
</html>