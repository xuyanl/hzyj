/*$(function(){
	$('#fullpage').fullpage();

	var myModule = (function(){
	    var var1 = 1;
	    var var2 = 2;

	    function fn1(){
	    	console.log(1)
	    }
	    function fn2(){

	    }

	    return {
	        fn1: fn1,
	        fn2: fn2
	    };
	})();
	myModule.fn1();
	console.log(myModule)
})*/
nie.define("Index",function(){

	'use strict';

	//初始化fullpage.js
	$('#fullpage').fullpage({
		navigation : true
	});

	var videoModule = nie.require("nie.util.videoV2");
    var shareV5 = nie.require("nie.util.shareV5");

	var Controller = function(){

		//视频配置
		var video = videoModule({
			fat : "#video",
			width : "900",
			height : "510",
			movieUrl : "",
			HDmovieUrl : "",
			SDHmovieUrl : "",
			autoPlay:true
		});

		//视频出现、隐藏
		function videoShow(){
    		$('.video-box').fadeIn();
		}
		function videoHide(){
    		$('.video-box').fadeOut();
		}

		//分享配置
		function shares(){

			var shareUrl = $("#share_url").html();
		    var sharePic = $("#share_pic").attr("data-src");
		    var shareTxt = $("#share_desc").html();
		    var shareTitle = $("#share_title").html();
			
			var share = shareV5({
		        fat:"#NIE-share",
		        type:2,
		        defShow:[23,22,2],
		        title: shareTxt,
		        img: sharePic 
		    });
		};
		shares();

		return {
			video : video,
			videoShow : videoShow,
			videoHide : videoHide
		}

	}();



    
	//分享
	$('#NIE-share').hide();
    $('.share').hover(function(){
    	$('#NIE-share').fadeIn();
    },function(){
    	$('#NIE-share').fadeOut();
    });

    //静音
    $('.mute').click(function(){
    	// console.log($("#audio").get(0).defaultMuted);
    	$("#audio").get(0).muted = !$("#audio").get(0).muted;	
    });

    //视频播放、关闭
    $('.vid-play').click(function(){
    	Controller.videoShow();
    	Controller.video.change($(this).data('src'));
    });
    $('.video-close').click(function(){
    	Controller.videoHide();
    	Controller.video.stop();
    });

    //滚动条插件
    $(".alive>div").niceScroll({
    	cursoropacitymin : 0.6,
    	cursorwidth : 10,
    	cursorborder : "5px solid #f0f",
    	preservenativescrolling : false,
    	railoffset : true,
    	enablemousewheel : true,
    	nativeparentscrolling : true
    });
})