// Created by iWeb 3.0.4 local-build-20130929

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,44),url:'Home_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Home_files/stroke_1.png'},{rect:new IWRect(1,-1,44,2),url:'Home_files/stroke_2.png'},{rect:new IWRect(45,-1,2,2),url:'Home_files/stroke_3.png'},{rect:new IWRect(45,1,2,44),url:'Home_files/stroke_4.png'},{rect:new IWRect(45,45,2,2),url:'Home_files/stroke_5.png'},{rect:new IWRect(1,45,44,2),url:'Home_files/stroke_6.png'},{rect:new IWRect(-1,45,2,2),url:'Home_files/stroke_7.png'}],new IWSize(46,46))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
