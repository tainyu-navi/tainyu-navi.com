(function(e){function u(q,a,g,k){var i=a.button||g.button,n=a.url||g.url,o=a.provider_name||g.provider_name,p=a.suggest_notebook||g.suggest_notebook,r=a.content_id||g.content_id,s=a.code||g.code,t=a.title||g.title,m=a.suggest_tags||g.suggest_tags,a=a.styling||g.styling;if("article-clipper"==i||"article-clipper-remember"==i||"article-clipper-jp"==i||"article-clipper-rus"==i||"article-clipper-fr"==i||"article-clipper-es"==i||"article-clipper-de"==i||"article-clipper-vert"==i||"site-mem-32"==i||"site-mem-36"==
			i||"site-mem-22"==i||"site-mem-16"==i)i="http://static.evernote.com/"+i+".png";var d={url:n,providerName:o,suggestNotebook:p,contentId:r,code:s,title:t,suggestTags:m,styling:a};0==k&&e("body").append('<script type="text/javascript" src="http://static.evernote.com/noteit.js"><\/script>');k=e(document.createElement("a")).attr({href:"#"}).click(function(){Evernote&&Evernote.doClip(d);return!1}).append('<img src="'+i+'" alt="Clip to Evernote" style="border: none" />');e(q).html(k)}function n(e){var a=
			"",g;for(g in e)""!=e[g]&&(a+=" "+g+'="'+e[g]+'"');return a}function p(e){var a="",g;for(g in e)""!=e[g]&&(a+=""!=a?"&amp;":"",a+=g+"="+e[g]+"");return a}function k(e){var a=[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/"/g,"&quot;"],[/'/g,"&#039;"]],g;for(g in a)e=e.replace(a[g][0],a[g][1]);return e}function o(e){return encodeURIComponent(e).replace(/[!*'()]/g,function(a){return"%"+a.charCodeAt(0).toString(16)})}e.fn.socialbutton=function(q,a){var a=a||{},g=document.URL,v=document.URL,i=document.URL,
			w={type0_16:58,type0_20:70,type0_23:76,type1_16:58,type1_20:73,type1_23:78,type2_16:58,type2_20:73,type2_23:78,type3_16:49,type3_20:61,type3_23:64,type4_16:16,type4_22:21,type4_32:32},x={button:"article-clipper",url:"",provider_name:"",suggest_notebook:"",content_id:"",code:"",title:"",suggest_tags:"",styling:""},y=document.URL,r=document.title,s=document.URL,t=document.URL,m=this.size()-1;return this.each(function(d){switch(q){case "mixi_check":var b=a.key||"",h=a.button||"button-1",c=a.url||"";
		""!=b&&(b='<a href="http://mixi.jp/share.pl" class="mixi-check-button"'+n({"data-key":b,"data-url":k(c),"data-button":h})+">Check</a>",e(this).html(b),d==m&&e("body").append('<script type="text/javascript" src="http://static.mixi.jp/js/share.js"><\/script>'));break;case "mixi_like":var c=a.key||"",f=a.url||g,d=void 0!=a.width?a.width:0,b=void 0!=a.height?a.height:0,l=void 0!=a.show_faces?a.show_faces:!0,h=a.style||"";""!=c&&(a.url&&(f=decodeURIComponent(f)),f=o(f),0==d&&(d=l?450:140),0==b?b=l?80:
			20:l&&80>b?b=80:!l&&20>b&&(b=20),c=p({href:f,service_key:c,width:d,show_faces:l?"true":"false"}),d="<iframe"+n({src:"http://plugins.mixi.jp/favorite.pl?"+c,scrolling:"no",frameborder:"0",allowTransparency:"true",style:"border:0; overflow:hidden; width:"+d+"px; height:"+b+"px; "+h})+"></iframe>",e(this).html(d));break;case "facebook_like":var d=a.layout||a.button||"standard",b=a.url||v,h=void 0!=a.show_faces?a.show_faces:!0,c=void 0!=a.width?a.width:0,f=void 0!=a.height?a.height:0,l=a.action||"like",
			j=a.locale||"",z=a.font||"",A=a.colorscheme||"light";a.url&&(b=decodeURIComponent(b));b=o(b);switch(d){case "standard":0==c?c=450:225>c&&(c=225);0==f?f=h?80:35:35>f&&(f=35);break;case "button_count":0==c?c=120:90>c&&(c=90);0==f?f=25:25>f&&(f=25);break;case "box_count":0==c?c=80:55>c&&(c=55),0==f?f=70:70>f&&(f=70)}d='<iframe src="http://www.facebook.com/plugins/like.php?'+p({href:b,layout:d,show_faces:h?"true":"false",width:c,action:l,locale:j,font:z,colorscheme:A,height:f})+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:'+
			c+"px; height:"+f+'px;" allowTransparency="true"></iframe>';e(this).html(d);break;case "facebook_share":b=a.text||"";b='<a name="fb_share"'+n({type:a.type||a.button||"button_count",share_url:k(a.url||"")})+">"+b+"</a>";0==d&&(b+='<script type="text/javascript" src="http://static.ak.fbcdn.net/connect.php/js/FB.Share"><\/script>');e(this).html(b);break;case "twitter":b=a.text||"";h=a.lang||"ja";c=a.via||"";f=a.related||"";b='<a href="http://twitter.com/share" class="twitter-share-button"'+n({"data-count":a.count||
			a.button||"vertical","data-url":k(a.url||""),"data-text":b,"data-lang":h,"data-via":c,"data-related":f})+">Tweet</a>";e(this).html(b);d==m&&e("body").append('<script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script>');break;case "gree_sf":d=a.type||a.button||0;b=a.url||i;h=void 0!=a.width?a.width:0;c=void 0!=a.height?a.height:20;a.url&&(b=decodeURIComponent(b));b=o(b);switch(d){case 0:case 1:case 2:case 3:16!=c&&(20!=c&&23!=c)&&(c=20);break;case 4:16!=c&&(22!=c&&32!=c)&&
	(c=22);break;default:h=d=0,c=20}0==h&&(h=w["type"+d+"_"+c]);d='<iframe src="http://share.gree.jp/share?'+p({url:b,type:""+d,height:c})+'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" style="border:none; overflow:hidden; width:'+h+"px; height:"+c+'px;" allowTransparency="true"></iframe>';e(this).html(d);break;case "evernote":u(this,a,x,d,m);break;case "hatena":d=a.layout||a.button||"standard";b=a.url||y;h=a.title||r;b=k(b);h=k(h);d="<a"+n({href:"http://b.hatena.ne.jp/entry/"+b,"class":"hatena-bookmark-button",
		"data-hatena-bookmark-title":h,"data-hatena-bookmark-layout":d,title:"\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0"})+'><img src="http://b.st-hatena.com/images/entry-button/button-only.gif" alt="\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0" width="20" height="20" style="border: none;" /></a><script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"><\/script>';
		e(this).html(d);break;case "hatena_oldstyle":d=a.button||"http://d.hatena.ne.jp/images/b_append.gif";b=a.url||s;h=void 0!=a.height?a.height:13;c=void 0!=a.padding?a.padding:7;b=k(b);e(this).html('<span style="font-size: '+h+'px; line-height: 100%; "><span style="padding-right: '+c+'px"><a href="http://b.hatena.ne.jp/entry/add/'+b+'" target="_blank"><img src="'+d+'" style="border: none; vertical-align: text-bottom" /></a></span><a href="http://b.hatena.ne.jp/entry/'+b+'" target="_blank"><img src="http://b.hatena.ne.jp/entry/image/'+
			b+'" style="border: none; vertical-align: text-bottom" /></a></span>');break;case "google_plusone":j=a;if(!(e.browser.msie&&8>parseInt(e.browser.version,10))){c=j.size||j.button||"";f=j.href||j.url||"";b=j.lang||"";h=j.parsetags||"";l=j.callback||"";j=void 0!=j.count?j.count:!0;switch(c){case "small":case "standard":case "medium":break;case "tall":j=!0;break;default:c="standard",j=!0}c=e("<div>").attr({"data-callback":l,"data-count":j?"true":"false","data-href":f,"data-size":c}).addClass("g-plusone");
		e(this).append(c);d==m&&(d="",""!=b&&(d+='lang: "'+k(b)+'"'),""!=h&&(d=d+(""!=d?",":"")+('parsetags: "'+k(h)+"'")),""!=d&&(d="{"+d+"}"),"undefined"===typeof gapi||"undefined"===typeof gapi.plusone?e("body").append('<script type="text/javascript" src="https://apis.google.com/js/plusone.js">'+d+"<\/script>"):gapi.plusone.go())}break;case "pinterest":b=a.url||t,h=a.button||"horizontal",c=void 0!=a.media?a.media:"",f=void 0!=a.description?a.description:"",b=o(decodeURIComponent(b)),c=o(decodeURIComponent(c)),
			f=decodeURIComponent(f),b='<a href="http://pinterest.com/pin/create/button/?'+p({url:b,media:c,description:f})+'" class="pin-it-button" count-layout="'+h+'"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>',e(this).html(b),d==m&&e("body").append('<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"><\/script>')}return!0})}})(jQuery);
	document.write('<style type="text/css">.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden;}.clearfix{display:inline-block;}/*HidesfromIE-mac\*/*html.clearfix{height:1%;}.clearfix{display:block;}/*EndhidefromIE-mac*/.blockdiv{margin-left:5px;margin-right:0;float:left;}.socialbutton-wrapdiv{display:inline;float:left;}.socialbutton-clear-botn{clear:both;height:0;margin:0;padding:0;border:none;}</style>');
	$(function() {
		var data=[
			{
				type : 'twitter',
				options:{
					button : 'none',
					text:   '関東ＮＯ．１高収入サイト【はじめての体験入店】は、'+
							'未経験の誰にでも出来るトーク倶楽部から高級風俗迄、'+
							'高収入求人や風俗アルバイトを簡単一発検索♪サクッと稼げる♪'+'' +
							'超高収入が即金可能♪【全て営業届出確認書有良店】だから安心安全です。'
				}
			},
			{
				type : 'facebook_like',
				options : {
					button : 'button_count'
				}
			}
		];
		var socialbutton=$('#socialbutton,.socialbutton');
		var elem=$('<div class="socialbutton-wrap"/>');
		var cl=function(a,b){
			console.log(a,b);
		};
		$.each([
			{
				type : 'twitter',
				options:{
					button : 'none',
					text:   '関東ＮＯ．１高収入サイト【はじめての体験入店】は、'+
							'未経験の誰にでも出来るトーク倶楽部から高級風俗迄、'+
							'高収入求人や風俗アルバイトを簡単一発検索♪サクッと稼げる♪'+'' +
							'超高収入が即金可能♪【全て営業届出確認書有良店】だから安心安全です。'
				}
			},
			{
				type : 'facebook_like',
				options : {
					button : 'button_count'
				}
			}
		],function(){
			this.options&&(this.options.url='http://tainyu-navi.com/');
			elem.append($('<div/>').socialbutton(this.type,this.options));
		});
		socialbutton.append(elem).append('<hr class="socialbutton-clear-botn" />');
	})