(function(){var f=jQuery,l=function(f){var a="",i;for(i in f)""!=f[i]&&(a+=" "+i+'="'+f[i]+'"');return a},n=function(f){var a="",i;for(i in f)""!=f[i]&&(a+=""!=a?"&amp;":"",a+=i+"="+f[i]+"");return a},k=function(f){var a=[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/"/g,"&quot;"],[/'/g,"&#039;"]],i;for(i in a)f=f.replace(a[i][0],a[i][1]);return f},m=function(f){return encodeURIComponent(f).replace(/[!*'()]/g,function(a){return"%"+a.charCodeAt(0).toString(16)})};f.fn.socialbutton=function(r,a){var a=
	a||{},i=document.URL,s=document.URL,t=document.URL,u={type0_16:58,type0_20:70,type0_23:76,type1_16:58,type1_20:73,type1_23:78,type2_16:58,type2_20:73,type2_23:78,type3_16:49,type3_20:61,type3_23:64,type4_16:16,type4_22:21,type4_32:32},v=document.URL,w=document.title,x=document.URL,y=document.URL,o=this.size()-1;return this.each(function(d){switch(r){case "mixi_check":var b=a.key||"",e=a.button||"button-1",c=a.url||"";""!=b&&(b='<a href="http://mixi.jp/share.pl" class="mixi-check-button"'+l({"data-key":b,
	"data-url":k(c),"data-button":e})+">Check</a>",f(this).html(b),d==o&&f("body").append('<script type="text/javascript" src="http://static.mixi.jp/js/share.js"><\/script>'));break;case "mixi_like":var c=a.key||"",g=a.url||i,d=void 0!=a.width?a.width:0,b=void 0!=a.height?a.height:0,j=void 0!=a.show_faces?a.show_faces:!0,e=a.style||"";""!=c&&(a.url&&(g=decodeURIComponent(g)),g=m(g),0==d&&(d=j?450:140),0==b?b=j?80:20:j&&80>b?b=80:!j&&20>b&&(b=20),c=n({href:g,service_key:c,width:d,show_faces:j?"true":"false"}),
	d="<iframe"+l({src:"http://plugins.mixi.jp/favorite.pl?"+c,scrolling:"no",frameborder:"0",allowTransparency:"true",style:"border:0; overflow:hidden; width:"+d+"px; height:"+b+"px; "+e})+"></iframe>",f(this).html(d));break;case "facebook_like":var d=a.layout||a.button||"standard",b=a.url||s,e=void 0!=a.show_faces?a.show_faces:!0,c=void 0!=a.width?a.width:0,g=void 0!=a.height?a.height:0,j=a.action||"like",h=a.locale||"",p=a.font||"",q=a.colorscheme||"light";a.url&&(b=decodeURIComponent(b));b=m(b);switch(d){case "standard":0==
	c?c=450:225>c&&(c=225);0==g?g=e?80:35:35>g&&(g=35);break;case "button_count":0==c?c=120:90>c&&(c=90);0==g?g=25:25>g&&(g=25);break;case "box_count":0==c?c=80:55>c&&(c=55),0==g?g=70:70>g&&(g=70)}d='<iframe src="http://www.facebook.com/plugins/like.php?'+n({href:b,layout:d,show_faces:e?"true":"false",width:c,action:j,locale:h,font:p,colorscheme:q,height:g})+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:'+c+"px; height:"+g+'px;" allowTransparency="true"></iframe>';f(this).html(d);
	break;case "facebook_share":b=a.text||"";b='<a name="fb_share"'+l({type:a.type||a.button||"button_count",share_url:k(a.url||"")})+">"+b+"</a>";0==d&&(b+='<script type="text/javascript" src="http://static.ak.fbcdn.net/connect.php/js/FB.Share"><\/script>');f(this).html(b);break;case "twitter":b=a.text||"";e=a.lang||"ja";c=a.via||"";g=a.related||"";b='<a href="http://twitter.com/share" class="twitter-share-button"'+l({"data-count":a.count||a.button||"vertical","data-url":k(a.url||""),"data-text":b,"data-lang":e,
	"data-via":c,"data-related":g})+">Tweet</a>";f(this).html(b);d==o&&f("body").append('<script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script>');break;case "gree_sf":d=a.type||a.button||0;b=a.url||t;e=void 0!=a.width?a.width:0;c=void 0!=a.height?a.height:20;a.url&&(b=decodeURIComponent(b));b=m(b);switch(d){case 0:case 1:case 2:case 3:16!=c&&20!=c&&23!=c&&(c=20);break;case 4:16!=c&&22!=c&&32!=c&&(c=22);break;default:e=d=0,c=20}0==e&&(e=u["type"+d+"_"+c]);d='<iframe src="http://share.gree.jp/share?'+
	n({url:b,type:""+d,height:c})+'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" style="border:none; overflow:hidden; width:'+e+"px; height:"+c+'px;" allowTransparency="true"></iframe>';f(this).html(d);break;case "evernote":var b=a,e=b.button||"article-clipper",c=b.url||"",g=b.provider_name||"",j=b.suggest_notebook||"",h=b.content_id||"",p=b.code||"",q=b.title||"",z=b.suggest_tags||"",b=b.styling||"";if("article-clipper"==e||"article-clipper-remember"==e||"article-clipper-jp"==e||
	"article-clipper-rus"==e||"article-clipper-fr"==e||"article-clipper-es"==e||"article-clipper-de"==e||"article-clipper-vert"==e||"site-mem-32"==e||"site-mem-36"==e||"site-mem-22"==e||"site-mem-16"==e)e="http://static.evernote.com/"+e+".png";var A={url:c,providerName:g,suggestNotebook:j,contentId:h,code:p,title:q,suggestTags:z,styling:b};0==d&&f("body").append('<script type="text/javascript" src="http://static.evernote.com/noteit.js"><\/script>');d=f(document.createElement("a")).attr({href:"#"}).click(function(){Evernote&&
Evernote.doClip(A);return!1}).append('<img src="'+e+'" alt="Clip to Evernote" style="border: none" />');f(this).html(d);break;case "hatena":d=a.layout||a.button||"standard";b=a.url||v;e=a.title||w;b=k(b);e=k(e);d="<a"+l({href:"http://b.hatena.ne.jp/entry/"+b,"class":"hatena-bookmark-button","data-hatena-bookmark-title":e,"data-hatena-bookmark-layout":d,title:"\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0"})+'><img src="http://b.st-hatena.com/images/entry-button/button-only.gif" alt="\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0" width="20" height="20" style="border: none;" /></a><script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"><\/script>';
	f(this).html(d);break;case "hatena_oldstyle":d=a.button||"http://d.hatena.ne.jp/images/b_append.gif";b=a.url||x;e=void 0!=a.height?a.height:13;c=void 0!=a.padding?a.padding:7;b=k(b);f(this).html('<span style="font-size: '+e+'px; line-height: 100%; "><span style="padding-right: '+c+'px"><a href="http://b.hatena.ne.jp/entry/add/'+b+'" target="_blank"><img src="'+d+'" style="border: none; vertical-align: text-bottom" /></a></span><a href="http://b.hatena.ne.jp/entry/'+b+'" target="_blank"><img src="http://b.hatena.ne.jp/entry/image/'+
	b+'" style="border: none; vertical-align: text-bottom" /></a></span>');break;case "google_plusone":h=a;if(!(f.browser.msie&&8>parseInt(f.browser.version,10))){c=h.size||h.button||"";g=h.href||h.url||"";b=h.lang||"";e=h.parsetags||"";j=h.callback||"";h=void 0!=h.count?h.count:!0;switch(c){case "small":case "standard":case "medium":break;case "tall":h=!0;break;default:c="standard",h=!0}c=f("<div>").attr({"data-callback":j,"data-count":h?"true":"false","data-href":g,"data-size":c}).addClass("g-plusone");
	f(this).append(c);d==o&&(d="",""!=b&&(d+='lang: "'+k(b)+'"'),""!=e&&(d=d+(""!=d?",":"")+('parsetags: "'+k(e)+"'")),""!=d&&(d="{"+d+"}"),"undefined"===typeof gapi||"undefined"===typeof gapi.plusone?f("body").append('<script type="text/javascript" src="https://apis.google.com/js/plusone.js">'+d+"<\/script>"):gapi.plusone.go())}break;case "pinterest":b=a.url||y,e=a.button||"horizontal",c=void 0!=a.media?a.media:"",g=void 0!=a.description?a.description:"",b=m(decodeURIComponent(b)),c=m(decodeURIComponent(c)),
	g=decodeURIComponent(g),b='<a href="http://pinterest.com/pin/create/button/?'+n({url:b,media:c,description:g})+'" class="pin-it-button" count-layout="'+e+'"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>',f(this).html(b),d==o&&f("body").append('<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"><\/script>')}return!0})};document.write('<style type="text/css">.socialbutton-content{display:inline;float:left;width:72px;overflow:hidden;}.socialbutton-clear-both{clear:both;height:0;margin:0;padding:0;border:none;}.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden;}.clearfix{display:inline-block;}/*HidesfromIE-mac*/*html.clearfix{height:1%;}.clearfix{display:block;}/*EndhidefromIE-mac*/.blockdiv{margin-left:5px;margin-right:0;float:left;}</style>');
	$(function(){var f=$("#socialbutton,.socialbutton"),a=$('<div class="socialbutton-wrap"/>');$.each([{type:"twitter",options:{button:"none",text:"\u95a2\u6771\uff2e\uff2f\uff0e\uff11\u9ad8\u53ce\u5165\u30b5\u30a4\u30c8\u3010\u306f\u3058\u3081\u3066\u306e\u4f53\u9a13\u5165\u5e97\u3011\u306f\u3001\u672a\u7d4c\u9a13\u306e\u8ab0\u306b\u3067\u3082\u51fa\u6765\u308b\u30c8\u30fc\u30af\u5036\u697d\u90e8\u304b\u3089\u9ad8\u7d1a\u98a8\u4fd7\u8fc4\u3001\u9ad8\u53ce\u5165\u6c42\u4eba\u3084\u98a8\u4fd7\u30a2\u30eb\u30d0\u30a4\u30c8\u3092\u7c21\u5358\u4e00\u767a\u691c\u7d22\u266a\u30b5\u30af\u30c3\u3068\u7a3c\u3052\u308b\u266a\u8d85\u9ad8\u53ce\u5165\u304c\u5373\u91d1\u53ef\u80fd\u266a\u3010\u5168\u3066\u55b6\u696d\u5c4a\u51fa\u78ba\u8a8d\u66f8\u6709\u826f\u5e97\u3011\u3060\u304b\u3089\u5b89\u5fc3\u5b89\u5168\u3067\u3059\u3002"}},
		{type:"facebook_like",options:{button:"button_count"}}],function(){this.options&&(this.options.url="http://tainyu-navi.com/?"+ +new Date);a.append($('<div class="socialbutton-content"/>').socialbutton(this.type,this.options))});f.append(a).append('<hr class="socialbutton-clear-both" />')})})();