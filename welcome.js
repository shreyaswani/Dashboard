firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.replace('index.html');
    } else {
      var contactFormDB = firebase.database().ref("contactForm");
      var tableBody = document.getElementById('tableBody');
  
      contactFormDB.on('child_added', function(snapshot) {
        var value = snapshot.val();
        const cname =  value.Name;
        const cemail = value.Email;
        const cnumber = value.Contact_Number;
        const corganization = value.Organization;
        const cInquiry = value.Inquiry_Type;
        const cregion = value.Region;
        const cmessage = value.Message;

        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.innerHTML = cname;
        row.appendChild(nameCell);
  
        var emailCell = document.createElement('td');
        emailCell.innerHTML = cemail;
        row.appendChild(emailCell);

        var organizationCell = document.createElement('td');
        organizationCell.innerHTML = corganization;
        row.appendChild(organizationCell);
  
        var numberCell = document.createElement('td');
        numberCell.innerHTML = cnumber;
        row.appendChild(numberCell);
 
        var regionCell = document.createElement('td');
        regionCell.innerHTML = cregion;
        row.appendChild(regionCell);
        
        var inquiryCell = document.createElement('td');
        inquiryCell.innerHTML = cInquiry;
        row.appendChild(inquiryCell);
  
        var messageCell = document.createElement('td');
        messageCell.innerHTML = cmessage;
        row.appendChild(messageCell);
        tableBody.appendChild(row);
      })
        .catch(function (error) {
        console.error(error);
        });
  
    }
  });






  function downloadCSV() {
    var table = document.getElementById('myTable');
    var rows = table.getElementsByTagName('tr');
    var csvContent = '';
  
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName('td');
      var rowData = [];
  
      for (var j = 0; j < cells.length; j++) {
        rowData.push('"' + cells[j].innerHTML + '"');
      }
  
      csvContent += rowData.join(',') + '\n';
    }
  
    var encodedCSV = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodedCSV);
    link.setAttribute('download', 'data.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }










  
  function logout() {
    firebase.auth().signOut();
  }
  