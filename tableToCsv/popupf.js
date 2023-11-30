
document.addEventListener('DOMContentLoaded', function () {
    
    let  params = {
        active:true,
        currentWindow: true
    }
    chrome.tabs.query(params,gotTab);

    function gotTab(tabs){
        var msg = {
            txt :"download"
        }
        //console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
});
