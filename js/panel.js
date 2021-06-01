var panelgroup = [];
function getRamNumber(){
    var result='';
    for(var i=0;i<2;i++){
    result+=Math.floor(Math.random()*16).toString(16);//获取0-15并通过toString转16进制
    }
     
    return '#'+result.toLowerCase()+"aa66";
}
function CreatePanel(context) {
    if(panelgroup[panelgroup.length-1].y >=0){

        var minHeight = panelgroup[panelgroup.length-1].y;
        if(GameData.probability >= Random(0,100)){
            var status = 0;
        }else{
            var status = 1;
        }
        var PanelX = Random(10,400);
        var PanelY = minHeight - Random(GameData.level,140);
        var PanelColor = getRamNumber();

        panelgroup.push({
            x:PanelX,
            y:PanelY,
            status:status,
            pcolor:PanelColor
        });
    }
}