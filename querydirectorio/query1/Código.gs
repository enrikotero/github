var hojaID = '1fwgMRZ4H5Z0o1Id02WT930_u5UdWH5__J2HsSDx8opk';

/*
function doGet(e)
{
  num = e.parameter.user;
  return HtmlService.createHtmlOutputFromFile('Index.html');
}
*/

function doGet(request) {
  return HtmlService.createTemplateFromFile('Index.html')
      .evaluate();
}

/*
function cogerDatos()
{
var hoja = SpreadsheetApp.openById(spreadsheetID); 
var lastRow = hoja.getLastRow();
var range = hoja.getSheets()[0].getRange("A1:B"+lastRow);
var values = range.getValues();
  
    for(var i=0; i < values.length; i++)
    {
    if (values[i][1] == num) return values[i][0];
    }
}
*/

function include(File) {
  return HtmlService.createHtmlOutputFromFile(File).getContent();
}

function cogerAlumno()
{
var correo = Session.getActiveUser().getEmail();
  
//Logger.log(correo);
  
var hoja = SpreadsheetApp.openById(hojaID); 
var largo = hoja.getLastRow();
var range = hoja.getSheets()[0].getRange("A1:E"+largo);
var values = range.getValues();
var alumno;
  
for(var i=0; i < values.length; i++)
  {
  if (values[i][4] == correo)
    {
      alumno = {dato:correo, nombre:values[i][0], numero:values[i][1], edad:values[i][2], direccion:values[i][3], correo:values[i][4]};
    }
  }
  
  return alumno;
}
