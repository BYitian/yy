getFor.onclick = () => {
    console.log("你已经进入2秒一次提交，不需要请退出")
    var timer=setInterval(function() {
    const token = document.getElementById('token').value
    const time = document.getElementById('time').value
    const options = document.getElementById('option').value
    const request = new XMLHttpRequest()
   	//let url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"
   
   if(options=='default'){
 var url =  " https://cat-match.easygame2021.com/sheep/v1/game/game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"

   }
   else if(options=='topic'){
   	   var url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"

   }

   request.open('get', url)
    //request.send(`time=${time}&token=${token}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            result = request.responseText
            if (result === '{"err_code":0,"err_msg":"","data":0}') {
                mdui.snackbar({
                    message: "记录添加成功，请在小程序我的名片查看记录",
                     position: 'top',
                })
            } else {
                mdui.snackbar({
                	
                    message: "没有权限，token错误",
                     position: 'top',
                })
            }

        }

    }
                    console.log("1条记录添加成功，请在小程序我的名片查看记录")

    request.send()
    },
 1000);
}
