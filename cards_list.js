$(document).ready(function () {
    $.getJSON('cards_list.json')
        .done(function (data) {
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(function (cardGroup) {
                    var table = '<table class="section-table" data-type="' + cardGroup.type + '">';
                    table += '<h2>' + cardGroup.type + '</h2>';
                    table += '<tr class="header"><th>Card Number</th><th>Expiry Date</th><th>Security Code</th><th>Country</th><th>Action</th></tr>';

                    cardGroup.cards.forEach(function (card) {
                        table += '<tr>';
                        table += '<td class="card-number">' + card.card_number + '</td>';
                        table += '<td class="expiry-date">' + card.expiry_date + '</td>';
                        table += '<td class="security-code">' + card.security_code + '</td>';
                        table += '<td class="country">' + card.country + '</td>';
                        table += '<td class="action"><button class="fill-card-button">Fill</button><button class="copy-button">Copy</button></td>';
                        table += '</tr>';
                    });

                    table += '</table>';
                    $('#cardTables').append(table);
                });

                $('#cardTables').on('click', '.fill-card-button', function (evt) {
                    evt.preventDefault();
                    var $row = $(this).closest('tr');
                    var cardNumber = $row.find('td.card-number').text();
                    var expiryDate = $row.find('td.expiry-date').text();
                    var securityCode = $row.find('td.security-code').text();

                    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                        var activeTab = tabs[0];

                        chrome.scripting.executeScript({
                            target: {tabId: activeTab.id, allFrames: true},
                            func: prefillCardComponent,
                            args: [cardNumber, expiryDate, securityCode]
                        });
                    });
                });

                $('#cardTables').on('click', '.copy-button', function (evt) {
                    evt.preventDefault();
                    var $row = $(this).closest('tr');
                    var cardNumber = $row.find('td.card-number').text();
                    copyToClipboard(cardNumber);
                });
            } else {
                console.error('No data found or data is not in the expected format.');
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error('Failed to load JSON file:', textStatus, errorThrown);
        });

    $.getJSON('sepa_list.json')
        .done(function (data) {
            if (Array.isArray(data) && data.length > 0) {
                var table = '<table class="section-table">';
                table += '<h2>Sepa Data</h2>';
                table += '<tr class="header"><th>Name</th><th>IBAN</th><th>Country</th><th>Action</th></tr>';

                data.forEach(function (sepa) {
                    table += '<tr>';
                    table += '<td class="name">' + sepa.account_name + '</td>';
                    table += '<td class="iban">' + sepa.iban + '</td>';
                    table += '<td class="sepa-country">' + sepa.country + '</td>';
                    table += '<td><button class="fill-sepa-button">Fill</button><button class="copy-button">Copy</button></td>';
                    table += '</tr>';
                });

                table += '</table>';
                $('#sepaTables').append(table);

                $('#sepaTables').on('click', '.fill-sepa-button', function (evt) {
                    evt.preventDefault();
                    var $row = $(this).closest('tr');
                    var name = $row.find('td.name').text();
                    var iban = $row.find('td.iban').text();

                    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                        var activeTab = tabs[0];

                        chrome.scripting.executeScript({
                            target: {tabId: activeTab.id, allFrames: true},
                            func: prefillSepaComponent,
                            args: [name, iban]
                        });
                    });
                });

                $('#sepaTables').on('click', '.copy-button', function (evt) {
                    evt.preventDefault();
                    var $row = $(this).closest('tr');
                    var iban = $row.find('td.iban').text();
                    copyToClipboard(iban);
                });
            } else {
                console.error('No data found or data is not in the expected format.');
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error('Failed to load JSON file:', textStatus, errorThrown);
        });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(function (err) {
            console.error('Could not copy text: ', err);
        });
    }

    function prefillCardComponent(cardNumber, expiryDate, securityCode) {
        var cardnumber = document.querySelector('input[id^="adyen-checkout-encryptedCardNumber-"]');
        var cvc = document.querySelector('input[id^="adyen-checkout-encryptedSecurityCode-"]');
        var expiry = document.querySelector('input[id^="adyen-checkout-encryptedExpiryDate-"]');

        if (cardnumber != null) {
            cardnumber.focus({focusVisible: true});
            document.execCommand('selectAll', false, null);
            document.execCommand('insertText', false, cardNumber);
        }

        if (cvc != null) {
            cvc.focus({focusVisible: true});
            document.execCommand('selectAll', false, null);
            document.execCommand('insertText', false, securityCode);
        }

        if (expiry != null) {
            expiry.focus({focusVisible: true});
            document.execCommand('selectAll', false, null);
            document.execCommand('insertText', false, expiryDate);
        }
    }

    function prefillSepaComponent(name, iban) {
        var form = document.querySelector('.payment-additions');

        if (form != null) {
            var nameField = form.querySelector('input[name^="holder"]');
            var ibanField = form.querySelector('input[name^="iban"]');

            if (nameField != null) {
                nameField.focus({focusVisible: true});
                document.execCommand('selectAll', false, null);
                document.execCommand('insertText', false, name);
            }

            if (ibanField != null) {
                ibanField.focus({focusVisible: true});
                document.execCommand('selectAll', false, null);
                document.execCommand('insertText', false, iban);
            }
        }
    }
});
