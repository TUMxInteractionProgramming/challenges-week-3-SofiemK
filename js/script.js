console.log('app is alive')

function switchChannel(channelName){
    console.log('Tuning into channel' + channelName);
    document.getElementById('channelName').innerHTML=channelName;
    //document.getElementById('location').innerHTML='by '+ <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>;
    //document.getElementById('location').innerHTML='by upgrading.never.helps';

    document.getElementById('location').innerHTML = 'upgrading.never.helps';
    document.getElementById('location').href = "http://w3w.co/upgrading.never.helps";
    document.getElementById('location').target = "_blank";
}

function switchStar(){
    $('#starred').attr('src',"http://ip.lfe.mw.tum.de/sections/star-o.png");
}

function swithBackStar(){
    $('#starred').attr('src',"http://ip.lfe.mw.tum.de/sections/star.png");
}

function selectTab(tabId){
    console.log('Changing to tab' + tabId);
    $('.selected').removeClass("selected");
    $('#'+tabId).addClass("selected");
}

function toggleEmoji(){
    $('#emojis').toggle();
}

