
function validateForm() {
    var frstNm = document.forms["ss-form"]["entry.1397525092"].value;
    var eMail = document.forms["ss-form"]["entry.1764244229"].value;

    //For Email Validation
    var atpos = eMail.indexOf("@");
    var dotpos = eMail.lastIndexOf(".");

    //First Name
    if (frstNm == null || frstNm == "") {
        alertify.set({ delay: 3000 });
        alertify.error("First name must be filled out!");
        $('#entry_2080480129').addClass('error');
        return false;
    }
    //Email
    else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=eMail.length) {
        alertify.set({ delay: 3000 });
        alertify.error("Please enter a valid email address.");
        $('#entry_193196971').addClass('error');
        return false;
    }
    else if (!$('#group_626803144_1').is(':checked')){
        alertify.set({ delay: 3000 });
        alertify.error("You must agree to the rules and TOS.");
        return false;
    }
    else{
        submitted=true;
    }
}
