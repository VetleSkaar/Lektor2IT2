var results = [
  ["Fornavn", "Etternavn", "Adresse", "Poststed", "Mobil", "Fødselsnummer", "Basisgruppe", "Studierettning", "Foresatt Fornavn", "Foresatt Etternavn", "Foresatt Mobil Privat", "Foresatt Mobil Arbeid", "Foresatt Epost", "Foresatt Adresse", "Foresatt Poststed"]
];

exportToCsv = function() {
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


//--- Utestet kode
function nyElev(){
  results = LocalStorage.GetObj("results");
  results.Push([x,y,z,a,b,c,d,e,f,g,h,l,m,n,o,p,q]);
  results.Sort(sort);
  LocalStorage.SetObj("results", results);
}

function sort(a,b){
  if(a.klasse > b.klasse){return 1;}
  else if(a.klasse < b.klasse){return -1;}
  else {
    if(a.etternavn > b.etternavn){return 1;}
    else if(a.etternavn < b.etternavn){return -1;}
    else {
      if(a.fornavn > b.fornavn){return 1;}
      if(a.fornavn < b.fornavn){return -1;}
    }
  }
}
//---
