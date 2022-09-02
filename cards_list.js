function copyToClipboard(elementClassName) {

    // Create a "hidden" input
    var aux = document.createElement("input");

    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementsByClassName(elementClassName)[0].innerHTML);

    // Append it to the body
    document.body.appendChild(aux);

    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");

    // Remove it from the body
    document.body.removeChild(aux);

}

$(document).ready(function () {

    //Get cards count for each type
    let visa_rows_count = $('#visa > tbody > tr').length;
    let visa_3ds1_rows_count = $('#visa-3ds1 > tbody > tr').length;
    let visa_3ds2_rows_count = $('#visa-3ds2 > tbody > tr').length;
    let mastercard_rows_count = $('#mastercard > tbody > tr').length;
    let mastercard_3ds1_rows_count = $('#mastercard-3ds1 > tbody > tr').length;
    let amex_rows_count = $('#amex > tbody > tr').length;
    let amex_3ds1_rows_count = $('#amex-3ds1 > tbody > tr').length;
    let amex_3ds2_rows_count = $('#amex-3ds2 > tbody > tr').length;
    let maestro_rows_count = $('#maestro > tbody > tr').length;
    let maestro_3ds1_rows_count = $('#maestro-3ds1 > tbody > tr').length;
    let maestro_3ds2_rows_count = $('#maestro-3ds2 > tbody > tr').length;

    //Loop through all card numbers
    for (let i = 0; i < visa_rows_count + 1; i++) {
        //Add class for each card cell to be able to copy
        $('#visa > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("visa-card-" + i)
        //Creating a button for copying and binding the click event - Chrome doesn't allow inline scripts
        var element = $('<input type="button" id="visa-copy-' + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("visa-card-" + i)
        });
        //Appending the created button to the separate cell
        $('#visa > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }
    for (let i = 0; i < visa_3ds1_rows_count + 1; i++) {
        $('#visa-3ds1 > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("visa-card-3ds1-" + i);
        var element = $('<input type="button"  id="visa3ds1-copy-'  + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("visa-card-3ds1-" + i)
        });
        $('#visa-3ds1 > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < visa_3ds2_rows_count + 1; i++) {
        $('#visa-3ds2 > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("visa-card-3ds2-" + i);
        var element = $('<input type="button"  id="visa3ds2-copy-'  + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("visa-card-3ds2-" + i)
        });
        $('#visa-3ds2 > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < mastercard_rows_count + 1; i++) {
        $('#mastercard > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("mastercard-" + i);
        var element = $('<input type="button"  id="mastercard-copy-'  + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("mastercard-" + i)
        });
        $('#mastercard > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < mastercard_3ds1_rows_count + 1; i++) {
        $('#mastercard-3ds1 > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("mastercard-3ds1-" + i);
        var element = $('<input type="button"  id="mastercard3ds1-copy-'  + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("mastercard-3ds1-" + i)
        });
        $('#mastercard-3ds1 > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < amex_rows_count + 1; i++) {
        $('#amex > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("amex-card-" + i);
        var element = $('<input type="button" id="amex-copy-' + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("amex-card-" + i)
        });
        $('#amex > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < amex_3ds1_rows_count + 1; i++) {
        $('#amex-3ds1 > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("amex-3ds1-" + i);
        var element = $('<input type="button"  id="amex3ds1-copy-'  + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("amex-3ds1-" + i)
        });
        $('#amex-3ds1 > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < amex_3ds2_rows_count + 1; i++) {
        $('#amex-3ds2 > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("amex-3ds2-" + i);
        var element = $('<input type="button"  id="amex3ds2-copy-'  + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("amex-3ds2-" + i)
        });
        $('#amex-3ds2 > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < maestro_rows_count + 1; i++) {
        $('#maestro > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("maestro-card-" + i);
        var element = $('<input type="button" id="maestrocard-copy-' + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("maestro-card-" + i)
        });
        $('#maestro > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);

    }

    for (let i = 0; i < maestro_3ds1_rows_count + 1; i++) {
        $('#maestro-3ds1 > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("maestro-3ds1-" + i);
        var element = $('<input type="button"  id="maestro3ds1-copy-'  + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("maestro-3ds1-" + i)
        });
        $('#maestro-3ds1 > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < maestro_3ds2_rows_count + 1; i++) {
        $('#maestro-3ds2 > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("maestro-3ds2-" + i);
        var element = $('<input type="button"  id="maestro3ds2-copy-'  + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("maestro-3ds2-" + i)
        });
        $('#maestro-3ds2 > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
    }

    for (let i = 0; i < adyen_sepa_rows_count + 1; i++) {
        $('#adyen-sepa > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').addClass("adyen-sepa-name" + i)
        $('#adyen-sepa > tbody > tr:nth-child(' + i + ') > td:nth-child(3)').addClass("adyen-sepa-iban" + i)
        var element = $('<input type="button" id="adyen-sepa-name' + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("adyen-sepa-name" + i)
        });
        var element1 = $('<input type="button" id="adyen-sepa-iban' + i + '" value="&#xf0c5" class="copy-button"/>').on('click', function () {
            copyToClipboard("adyen-sepa-iban" + i)
        });
        $('#adyen-sepa > tbody > tr:nth-child(' + i + ') > td:nth-child(2)').append(element);
        $('#adyen-sepa > tbody > tr:nth-child(' + i + ') > td:nth-child(4)').append(element1);
    }
});

