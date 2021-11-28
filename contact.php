<?php include('./header.php'); ?>
<!-- START OF CONTACT PAGE -->
<section>

<h1>Contact Erin</h1>
<p>You can contact Erin at any of the following locations, as well as filling out the form below:</p>
<blockquote class="blockquote">
    You can FaceTime or iMessage Erin's iCloud which is dudethatserin@icloud.com.<br />
    You can manually send Erin an email at erin.skidds@gmail.com.<br />
    Discord Username: DudeThatsErin#8061<br />
    Twitter Username: <a href="https://twitter.com/DudeThatsErin" target="_blank" title="Visit my Twitter">DudeThatsErin</a><br />
</blockquote>

<img src="https://erinskidds.com/img/h1side.png" alt="arrow" id="projects">
<h2>Contact Form</h2>


<form id="form" action="contactform.php" method="post">

<!-- PHP CODE GOES HERE FOR FORM -->
<?php 
    if(isset($_GET['name'])) {
        $name = $_GET['name'];
        echo '<input name="name" type="text" id="name" placeholder="Full Name*" value="'.$name.'" required /><br />';
    }
    else {
        echo '<input name="name" type="text" id="name" placeholder="Full Name*" required /><br />';
    }

    if(isset($_GET['email'])) {
        $email = $_GET['email'];
        echo '<input name="email" type="text" id="email" placeholder="Your e-mail*" value="'.$email.'" required /><br />';
    }
    else {
        echo '<input name="email" type="text" id="email" placeholder="Your e-mail*" required /><br />';
    }

    if(isset($_GET['url'])) {
        $url = $_GET['url'];
        echo '<input name="url" type="text" id="url" placeholder="Website Address" value="'.$url.'" /><br />';
    }
    else {
        echo '<input name="url" type="text" id="url" placeholder="Website Address" /><br />';
    }

    if(isset($_GET['subject'])) {
        $subject = $_GET['subject'];
        echo '<input name="subject" type="text" id="subject" placeholder="Subject*" value="'.$subject.'" /><br />';
    }
    else {
        echo '<input name="subject" type="text" id="subject" placeholder="Subject*" /><br />';
    }

    if(isset($_GET['message'])) {
        $message = $_GET['message'];
        echo '<textarea id="message" name="message" placeholder="Message*" value="'.$message.'" required></textarea><br />';
    }
    else {
        echo '<textarea id="message" name="message" placeholder="Message*" required></textarea><br />';
    }
?>

<input type="hidden" name="recaptcha_response" value="" id="recaptchaResponse" />

<button type="submit" name="submit" class="submit">SEND MAIL</button>
</form>
<br />
<p style="font-size: 10px;">This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>

<?php
require('./footer.php');

   if(!isset($_GET['mailsend'])) {
        exit();
    }
    else {
        $signupCheck = $_GET['mailsend'];

        if($signupCheck == "empty") {
            echo "<p class='error'>You did not fill in the required fields!</p>";
            exit();
        }
        else if($signupCheck == "invalidemail") {
        echo "<p class='error'>That email address is not valid!</p>";
        exit();
        }
        else if($signupCheck == "char") {
        echo "<p class='error'>The name field has invalid characters!</p>";
        exit();
        }
        else if($signupCheck == "error") {
        echo "<p class='error'>There was an error sending your form. Please try again later!</p>";
        exit();
        }

        else if($signupCheck == "success") {
        echo "<p class='success'>Your message was successfully sent! Erin will get back to you within 24-48 hours.</p>";
        exit();
        }
    }
?>