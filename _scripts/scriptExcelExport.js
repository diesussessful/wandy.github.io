 function fnExcelReport(){
  var tab_text="<table border='2px'>";
  var textRange; var j=0;
  tab = document.getElementById('table').cloneNode(true);
  
  for(j = 0 ; j < tab.rows.length ; j++) 
  {
    var row = tab.rows[j];
    var numberOfCells = row.cells.length;
    // Altere o número 4 pelo número de colunas no TBODY
    // A cada linha de registro na tabela, sera excluído as duas ultimas colunas,
    // pois a coluna ACAO no THEAD ta setado o atributo 'colspan=2'
    if (numberOfCells === 3) {
      row.deleteCell(-1);
      row.deleteCell(-1);
    } else {
      // Remove a coluna ACAO
      row.deleteCell(-1);
    }
    tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
  }

  tab_text=tab_text+"</table>";
  tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
  tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
  tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE "); 

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
  {
    txtArea1.document.open("txt/html","replace");
    txtArea1.document.write(tab_text);
    txtArea1.document.close();
    txtArea1.focus(); 
    sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
  }  
  else                 //other browser not tested on IE 11
    sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

  return (sa);}
   