

document.getElementById("delete").addEventListener("click", function(){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message:"delete"}, function(response) {
        console.log(response.result);
    });
});
});

document.getElementById("like").addEventListener("click", function(){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message:"like"}, function(response) {
        console.log(response.result);
    });
});

});

document.getElementById("like_w").addEventListener("click", function(){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message:"like_w"}, function(response) {
        console.log(response.result);
    });
});

});

document.getElementById("delete_w").addEventListener("click", function(){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message:"delete_w"}, function(response) {
        console.log(response.result);
    });
});
});

document.getElementById("skip").addEventListener("click", function(){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message:"skip"}, function(response) {
        console.log(response.result);
    });
});

});

document.getElementById("one").addEventListener("click", function(){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message:"one"}, function(response) {
        console.log(response.result);
    });
});
});

document.getElementById("skip_w").addEventListener("click", function(){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message:"skip_w"}, function(response) {
        console.log(response.result);
    });
});

});

document.getElementById("one_w").addEventListener("click", function(){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message:"one_w"}, function(response) {
        console.log(response.result);
    });
});
});


