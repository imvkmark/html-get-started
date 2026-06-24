/**
 * Created by likai on 16/3/24.
 */
var url = 'https://'+location.host+location.pathname;
baseurl = url.substring(0,url.lastIndexOf('/')+1);
$.ajax({
    'url':'//h5.ruiccm.com/auth/index.php',
    'data':{'url':location.href.split('#')[0]},
    'dataType':'jsonp',
    success:function(json){
        var wxConfig = {
            debug:false,
            appId: json['appId'],
            timestamp: json['timestamp'],
            nonceStr: json['nonceStr'],
            signature: json['signature'],
            jsApiList: [
                "onMenuShareTimeline",
                "onMenuShareAppMessage",
                "chooseImage",
                "uploadImage",
                "getLocalImgData"
            ]
        }
        wx.config(wxConfig);

    }

});

var wxData = {
    imgUrl: 'https://case.ruiccm.com/2020/szzn/images/share.png',
    link: url,
    title: '深圳40年，一起画下同心圆',
    desc: '探寻深圳奇迹',
    qtitle: '深圳40年，一起画下同心圆',
    share:function(){
        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        wx.onMenuShareTimeline({
            title: wxData.qtitle,
            link: wxData.link,			
            imgUrl: wxData.imgUrl,
            success: function() {
                wxData.success('timeline');
                wxData.callback();
                share();
            },
            cancel: function() {

            }
        });

        //获取“分享给朋友”按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage({
            title: wxData.title,
            desc: wxData.desc,
            link: wxData.link,
            imgUrl: wxData.imgUrl,
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
                wxData.success('appmessage');
                wxData.callback();
                share();
            },
            cancel: function() {

            }
        });
    },
    success:function(type){

    },
    callback:function(){

    }
};

wx.ready(function() {
	wxData.share();
});
wx.error(function(res) {
    //alert(JSON.stringify(res));
});
wxData.success = function(type){
    _hmt.push(['_trackEvent', 'share', type]);
};

    function wxUploadPhoto(){

        return wxChooseImage().then(function(res){
            return Promise.resolve(res.localIds[0]);
        }).then(wxUploadImage).then(function(res){
            return Promise.resolve(res.serverId);
        }).then(ajaxUploadImage);

    }

    function wxChooseImage(){
        return new Promise(function(resolve, reject){
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    resolve(res);
//                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                },
                fail: function (res){
                    reject('网络异常了,请刷新后重试!');
                }
            });

        });
    }

    function wxUploadImage(localId){
        return new Promise(function(resolve, reject){
            wx.uploadImage({
                localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    resolve(res);
//                    var serverId = res.serverId; // 返回图片的服务器端ID
                },
                fail: function (res){
                    reject('网络异常,请刷新后重试！');
                }
            });
        });
    }

    function ajaxUploadImage(serverId){
        return new Promise(function(resolve, reject){
            $.ajax({
                url: 'api/ajax.php?op=upload',
                data: {serverId: serverId},
                type: 'POST',
                dataType: 'json',
                success: function(json){
                    if(json.status==1) {
                        resolve(json.url);
                    }else{
                        reject(json.message);
                    }
                }
            });
        });
    }