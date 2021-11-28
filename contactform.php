<?php

if (isset($_POST['submit'])) { // did the user click the submit button?
    // variables - data from the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $url = $_POST['url'];
    $message = $_POST['message'];
    $google_recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret_key = '6LefRw4dAAAAABWfslmmGBIeOTiwsX-RCac7T5De';
    $set_recaptcha_response = $_POST['recaptcha_response'];

    // do something with data
    $get_recaptcha_response = file_get_contents($google_recaptcha_url . '?secret=' . $recaptcha_secret_key . '&response=' . $set_recaptcha_response);

    $get_recaptcha_response = json_decode($get_recaptcha_response);

    if($get_recaptcha_response->success == true && $get_recaptcha_response->score >= 0.5 && $get_recaptcha_response->action == 'submit') {
    // are these fields empty?
    if(empty($name) || empty($email) || empty($subject) || empty($message)) {
        header("Location: contact.php?mailsend=empty");
        exit();
    } else {
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) { // is this a valid email?
            header("Location: contact.php?mailsend=invalidemail&name=$name&subject=$subject&url=$url");
            exit();
        }
        else {
            if(!preg_match("/^[a-zA-z]*$/", $name)) { // are the chars in name valid?
                header("Location: contact.php?mailsend=char&email=$email&subject=$subject&url=$url");
                exit();
            } else {
                if ($referer != $this_url) {
                    echo "You do not have permission to use this script from another URL, nice hacking attempt moron.";
                    exit();
                } else { 
                    $mailTo = 'crimson.galaxy.slayer@gmail.com';
                    $headers = "From: ".$email;
                    $txt = "You have received an email from ".$name.". They provided this web address: ".$url."\n\n".$message;
                    setcookie('tntcon', '');    // delete the cookie so it cannot sent again by refreshing this page

                    mail($mailTo, $subject, $txt, $headers);
                    header("Location: contact.php?mailsend=success");
                }
            }
        }
    }
    } else {
        header("Location: contact.php?mailsend=error");
        exit();
    }
} else {
    header("Location: contact.php?mailsend=error");
    exit();
}

?>