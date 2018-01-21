var hojaID = '1fwgMRZ4H5Z0o1Id02WT930_u5UdWH5__J2HsSDx8opk';

function doGet(request) {
  return HtmlService.createTemplateFromFile('Index.html')
      .evaluate();
}

function include(File) {
  return HtmlService.createHtmlOutputFromFile(File).getContent();
}

function cogerTabla()
{
var hoja = SpreadsheetApp.openById(hojaID); 
var largo = hoja.getLastRow();
var range = hoja.getSheets()[0].getRange("A1:E"+largo);
var values = range.getValues();
  
return values;
}
