function makeAPi(data = null) {
  let detailsObj;

  // Collect user input if no data is provided
  if (!data) {
      const userName = document.getElementById('userid').value;
      const userEmail = document.getElementById('useremail').value;
      const userTopic = document.getElementById('userselection').value;
      const userQuery = document.getElementById('userquery').value;
      const currentDate = new Date().toLocaleString();

      // Create the details object to send to the API
      detailsObj = {
          "userName": userName,
          "userEmail": userEmail,
          "userTopic": userTopic,
          "userQuery": userQuery,
          "currentDate": currentDate
      };
  } else {
      // Handle data passed in from another function if necessary
      detailsObj = {
          userName: data.name,
          userEmail: data.email,
          userTopic: "Query from: Forecast your growth",
          userQuery: "Standard inquiry", // Provide a default if needed
          currentDate: new Date().toLocaleString()
      };
  }

  // Generate the email body HTML from detailsObj
  const emailBodyHTML = getEmailContentAsHTML(detailsObj);

  // Set up the AJAX settings for the POST request
  const settings = {
      "url": '/api/sendemail', // API endpoint
      "method": "POST",
      "timeout": 0,
      "headers": {
          "Content-Type": "application/json",
      },
      "data": JSON.stringify({
          "data": {
              "userName": detailsObj.userName,
              "userEmail": detailsObj.userEmail,
              "userTopic": detailsObj.userTopic,
              "userQuery": detailsObj.userQuery,
              "currentDate": detailsObj.currentDate,
              "emailBody": emailBodyHTML // Sending the email body as HTML
          }
      }),
  };

  // Make the AJAX request
  $.ajax(settings).done(function (response, textStatus, xhr) {
      if (xhr.status === 202 || xhr.status === 200) {
          if (data) {
              setModalDataSentFlag(true);
              $("#modalLaunchButton").click();
          } else {
              $("#resploseMsg").css('display', 'block');
              // Clear the form fields on success
              $("#userid").val('');
              $("#useremail").val('');
              $("#userquery").val('');
              $("#userselection").val(''); // Clear user selection if applicable
          }
      } else if (data) {
          setModalDataSentFlag(false);
      }
  });

  // Handle the response message timeout
  var hideresponse = $("#resploseMsg");
  setTimeout(function () { hideresponse.hide(); }, 10000);
}

// Form submission event handler
$("#contactUsForm").submit(function (e) {
  e.preventDefault();
  makeAPi(); // Call the API on form submission
});

// HTML-entity encoder to prevent XSS in email body
function escHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Email content generator
const getEmailContentAsHTML = (detailsObj) =>
    `<html>
    <head>
        <meta charset="UTF-8">
        <style>
            table { width: 100%; border: solid 1px lightgrey; border-collapse: collapse; }
            td { border: solid 1px lightgrey; padding: 6px; }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <td>Name</td>
                <td>${escHtml(detailsObj.userName)}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${escHtml(detailsObj.userEmail)}</td>
            </tr>
            <tr>
                <td>Topic</td>
                <td>${escHtml(detailsObj.userTopic)}</td>
            </tr>
            <tr>
                <td>Query</td>
                <td>${escHtml(detailsObj.userQuery)}</td>
            </tr>
            <tr>
                <td>Submitted on</td>
                <td>${escHtml(detailsObj.currentDate)}</td>
            </tr>
        </table>
    </body>
    </html>`;