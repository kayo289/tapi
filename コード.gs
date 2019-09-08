function doPost(e) {

  var t=":tapioka:"
  for(var i=0;i<24;i++){
    t += ":tapioka:"
  }
  var t2=":tapioka::tapipyon::tapipyon::tapipyon::tapipyon::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapioka::tapipyon::tapipyon::tapipyon::tapipyon::tapioka::tapioka::tapipyon::tapipyon::tapipyon::tapioka::tapioka:\n"+
":tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapioka::tapipyon::tapioka::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka:\n"+
":tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapioka::tapipyon::tapipyon::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapipyon::tapipyon::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka:\n"+
":tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka:\n"+
":tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapipyon::tapioka::tapioka::tapipyon::tapioka::tapioka::tapioka::tapioka::tapioka::tapipyon::tapipyon::tapipyon::tapioka::tapioka:\n"
  
  var res = {response_type: "in_channel", text: t+"\n"+t2+t};
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
  
}
