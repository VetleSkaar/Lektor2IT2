var results = [
  ["Fornavn", "Etternavn", "Adresse", "Poststed", "Mobil", "Fødselsnummer", "Basisgruppe", "Studierettning", "Foresatt Fornavn", "Foresatt Etternavn", "Foresatt Mobil Privat", "Foresatt Mobil Arbeid", "Foresatt Epost", "Foresatt Adresse", "Foresatt Poststed"],
];

var exportToCsv = function() {
  var CsvString = '"sep=,"\r\n';
  results.forEach(function(RowItem, RowIndex) {
    RowItem.forEach(function(ColItem, ColIndex) {
      CsvString += ColItem + ',';
    });
    CsvString += "\r\n";
  });
  CsvString = "data:application/csv," + encodeURIComponent(CsvString);
  var x = document.createElement("A");
  x.setAttribute("href", CsvString );
  x.setAttribute("download","somedata.csv");
  document.body.appendChild(x);
  x.click();
}


function nyElev(){
  //TODO
}
