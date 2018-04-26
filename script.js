var Results = [
  ["Fullt Navn", "Klasse", "Epost", "Adresse"],
  ["", 50, 100, 500],
  ["Data", -100, 20, 100],
];

exportToCsv = function() {
  var CsvString = '"sep=,"';
  Results.forEach(function(RowItem, RowIndex) {
    RowItem.forEach(function(ColItem, ColIndex) {
      CsvString += ColItem + ',';
    });
    CsvString += "\r\n";
  });
  window.open('data:application/csv,' + encodeURIComponent(CsvString));
}
