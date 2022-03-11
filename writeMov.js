function writeMov(mlink){
document.write('<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="500" width="640">');
document.write('<param name="src" value="'+mlink+'">');
document.write('<param name="autoplay" value="false">');
document.write('<param name="type" value="video/quicktime" height="500" width="640">');
document.write('<embed src="'+mlink+'" height="500" width="640" autoplay="false" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/">');
document.write('</object>');
}