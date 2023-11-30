chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);

  function downloadCSV() {
    let csv = [];
    let tr = document.querySelectorAll("tr");
    if(tr.length>0){
      for (let i = 0; i < tr.length; i++) {
        //console.log(tr[i]);
        let col = tr[i].querySelectorAll("td,th");
        let csvRow = [];
        for (let j = 0; j < col.length; j++) {
          csvRow.push(col[j].innerHTML);
        }
        csv.push(csvRow.join(","));
      }
      let c = csv.join("\n");
      //console.log(csv.join("\n"));
      let blob = new Blob([c], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
  
      let a = window.document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display:none");
      a.href = url;
      a.download = "testDownload.csv";
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();

    }
    else{
      window.alert("no table content found");
    }
  }
  if(message.txt == "download"){
    downloadCSV();
  }
}
