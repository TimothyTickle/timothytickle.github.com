// Created by iWeb 3.0.4 local-build-20130929

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,81),url:'Education_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Education_files/stroke_1.png'},{rect:new IWRect(1,-1,69,2),url:'Education_files/stroke_2.png'},{rect:new IWRect(70,-1,3,2),url:'Education_files/stroke_3.png'},{rect:new IWRect(70,1,3,81),url:'Education_files/stroke_4.png'},{rect:new IWRect(70,82,3,2),url:'Education_files/stroke_5.png'},{rect:new IWRect(1,82,69,2),url:'Education_files/stroke_6.png'},{rect:new IWRect(-1,82,2,2),url:'Education_files/stroke_7.png'}],new IWSize(71,83)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Education_files/EducationMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
