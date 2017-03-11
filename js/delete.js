var delay = 3000;
var de = 1000;
var qn_i = 0;   //qq空间忽略删除计数
var wn_i = 0;
function yes() {
    document.querySelector('.qz_dialog_layer_btn').click();
    setTimeout("del_q()", delay);
}

function yes1() {
    document.querySelector('.qz-dark-button').click();
    setTimeout("del_q()", delay);
}

function del_q() {

    var iframe = document.querySelector('.app_canvas_frame');
    var iframe_q = document.querySelector('#QM_Feeds_Iframe');
    if (iframe) {
        iframe.contentWindow.document.getElementsByClassName('del_btn')[qn_i].click();
        setTimeout("yes()", de);
    } else if (iframe_q) {
        var delbtn = iframe_q.contentWindow.document.getElementsByClassName('item');
        for (var i = 0; i < delbtn.length; i++) {
        	if(delbtn[i].getAttribute("data-cmd") == "qz_opr_delete"){
        		var count = 0;
        		var item_arry = new Array();
        		item_arry[count] = delbtn[i];
        		++count;
        	}
        }
         item_arry[qn_i].click();

         setTimeout("yes1()",1000);
    } else {
        var delbtn = document.getElementsByClassName('item');
        for (var i = 0; i < delbtn.length; i++) {
            if (delbtn[i].getAttribute("data-cmd") == "qz_opr_delete") {
                delbtn[i].click();
                setTimeout("yes1()", de);
            }
        }
    }
}

function del_qo() {
    var iframe = document.querySelector('.app_canvas_frame');
    var iframe_q = document.querySelector('#QM_Feeds_Iframe');
    if (iframe) {
        iframe.contentWindow.document.getElementsByClassName('del_btn')[qn_i].click();
        setTimeout(function() { document.querySelector('.qz_dialog_layer_btn').click() }, 500);
    } else if (iframe_q) {
        var delbtn = iframe_q.contentWindow.document.getElementsByClassName('item');
        for (var i = 0; i < delbtn.length; i++) {
        	if(delbtn[i].getAttribute("data-cmd") == "qz_opr_delete"){
        		var count = 0;
        		var item_arry = new Array();
        		item_arry[count] = delbtn[i];
        		++count;
        	}
        }
         item_arry[qn_i].click();

         setTimeout(function(){document.querySelector('.qz-dark-button').click()},1000);
    }
}


function neglect_q() {
    ++qn_i;
}

function like_q() {
    var iframe = document.querySelector('#QM_Feeds_Iframe');
    if (iframe) {
        var likebtn = iframe.contentWindow.document.getElementsByClassName('qz_like_btn_v3');
        for (var i = 0; i < likebtn.length; i++) {
            if (likebtn[i].getAttribute("data-clicklog") == "like") {
                likebtn[i].click();
            }
        }
    } else {
        var likebtn = document.getElementsByClassName('qz_like_btn_v3');
        for (var i = 0; i < likebtn.length; i++) {
            if (likebtn[i].getAttribute("data-clicklog") == "like") {
                likebtn[i].click();
            }
        }
    }
}

function del_w() {

    document.getElementsByClassName('layer_menu_list')[wn_i+1].getElementsByTagName('a')[0].click();
    setTimeout("yes_w()", de);
}

function yes_w() {
    document.getElementsByClassName('layer_mini_opt')[0].getElementsByTagName('a')[0].click();
    setTimeout("del_w()", delay);
}
function del_wo(){
	document.getElementsByClassName('layer_menu_list')[wn_i+1].getElementsByTagName('a')[0].click();
    setTimeout(function(){document.getElementsByClassName('layer_mini_opt')[0].getElementsByTagName('a')[0].click()}, de);
}
function like_w() {
    var likebtnt = document.getElementsByClassName('WB_feed_handle');
    for (var i = 0; i < likebtnt.length; i++) {
        var likebtn = likebtnt[i].getElementsByTagName('a')[3];
        if (likebtn.getAttribute("action-type") == "fl_like" && !Boolean(likebtn.getElementsByClassName(' UI_ani_praised').length)) {
            likebtn.click();
        }
    }
}
function neglect_w() {
    ++wn_i;
}
console.log('ok');
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message == "delete") {
            del_q();
            sendResponse({ result: "delete success" })
        } else if (request.message == "like") {

            like_q();
            sendResponse({ result: "like success" })
        } else if (request.message == "delete_w") {

            del_w();
            sendResponse({ result: "delete_w success" })
        } else if (request.message == "like_w") {

            like_w();
            sendResponse({ result: "like_w success" })
        } else if (request.message == "skip") {
            neglect_q();
            sendResponse({ result: "neglect_q success" })
        } else if (request.message == "skip_w") {
            neglect_w();
            sendResponse({ result: "neglect_w success" })
        } else if (request.message == "one") {
            del_qo();
            sendResponse({ result: "del_qo success" })
        } else if (request.message == "one_w") {
            del_wo();
            sendResponse({ result: "del_wo success" })
        }

    });
