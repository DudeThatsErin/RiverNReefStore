</section>
<footer>
    <p>&copy; 2021 River and Reef Aquaculture LLC (riverandreef.store)</p>
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