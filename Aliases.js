var objR = {"html template":"//Enter the title of page,Enter the css url or path,Enter the javascript url or path\n<html>\n<head>\n<title>*1</title>\n<link rel=\"stylesheet\" href=*2>\n<script src=*3></script>\n</head>\n<body>\n</body>\n</html>\n","node to device example":"//Content to write in first example file,Content to write in second example file\nconst prom = () => new Promise((resolve) => LiquidCore.on('fileRead',resolve))\n\nmain()\n\nasync function main(){\nwriteFile(\"newFile.txt\",*1,\"false\")\n//You can either read and return as shown below\nawait readFile(\"newFile.txt\").then(res => flash(res))\n//Or you can flash read from the global variable\nwriteFile(\"awe.txt\",*2,\"false\")\nawait readFile(\"awe.txt\")\nflash(read)\nwriteFile(\"mainExample.txt\",\"Use the code this way for it work\",\"false\")\nawait readFile(\"style.css\")\nflash(read)\n}\n\n\nfunction flash(value){\nLiquidCore.emit( 'flash', { flashString: value } )\n}\n\nfunction writeFile(Name, Content, Append){\nLiquidCore.emit( 'writeFile', { writeName: Name, content: Content, append: Append } )\n}\n\nasync function readFile(filename){\nLiquidCore.emit( 'readFile', { fileName: filename} )\nawait prom()\nreturn read\n}\n\n\n\nsetInterval(function() {}, 1000)\nLiquidCore.on( 'fileRead', function(value) {\nread = value.fileContent;\n//flash(read)\n\n})\n","get element by id":"//Type id name or variable containing it\ndocument.getElementById(*1);\n","flash":"","alert":"//Type text or variable\nalert(*1);\n","write file":"","download v8":"//Enter url,Save as\ntk.Download(*1,*2);\n","join":"//Save joined value to a variable called:,Enter list variable:, Join list with:\nvar *1 = *2.join(*3)\n","split":"//Type variable to save the splitted values:,Type input variable with value to split:,Type splitter variable or string \nvar *1 = *2.split(*3);\n","split value between":"Enter variable with your data, Enter first value to split on, Enter the second value to split on\nvar spl = *1;\nspl = spl.split(*2);\nspl = spl[1];\nspl = spl.split(*3)\nvar result = spl[0];\n\n","read file":"","replace all":"//String variable name, Searching for, Replace with\nreplaceAll(*1,\"*2\",\"*3\");\n\nfunction replaceAll(string, search, replace) {\n  return string.split(search).join(replace);\n}\n","replace line":"//String variable name, Replace line number\nreplaceLine(*1,*2);\n\nfunction replaceLine(str,num){\nreturn str.split(\"\\n\").slice(num).join(\"\\n\");\n}\n","run every v8":"//Enter code string, Run after every (milliseconds)\ntk.runEvery(*1,*2)\n","create element":"//Type the variable name referencing element you want to create\ndocument.createElement(*1);\n","for each":"//list variable,function name, item variable, index variable\n*1.forEach(*2);\nfunction *2(*3, *4){\n\n}\n","for in":"//Type the list to iterate, Type the name of object\nfor(*1 in *2){\n\n}\n","is text selected":"//input variable, start position variable, end position variable, document variable, textarea id\nfunction isTextSelected(*1){\n   var *2 = *1.selectionStart;\n   var *3 = *1.selectionEnd;\n   var *4 = document.selection;\n\n   if(*4 && *4.createRange().text.length != 0){\n      return true;\n   }else if (!*4 && *1.value.substring(*2,*3).length != 0){\n      return true;\n   }\n   return false;\n}\n\n//Usage\n\nif(isTextSelected($('#*5')[0])){\n   //text selected\n}\n","on focus":"//Type the reference of the element you'd like to focus on.\n*1.onfocus = function(){\n\n}\n","html scrape":"//Type the url of website you'd like to scrape, Data type text or json\n\nvar response;\n\nasync function get() {\nresponse = await fetch(\"*1\");\nlet data = await response.*2();\nreturn data;\n}\n\nget().then(data => alert(data));\n","tasker global variable":"","set tasker global variable":"","get variable name":"//Enter variable name, Enter variable value\nconst *1 = '*2'\nObject.keys({*1})[0]\n\n","check is in object":"//Name array variable, Enter keys & values this way \"a\" : \"value\" comma \"b\" : \"value2\", Enter text or variable to check\nvar *1 = {\n   *2\n};\n\nObject.keys(*1).forEach(function(key) {\n  if (*1[key] == *3) {\n    alert('exists');\n  }\n});\n","get file name":"var filename = fullPath.replace(/^.*[\\\\\\/]/, '')\n","tk alarmvol":"//Enter level as a int,display? true or falsesound? true or false\nvar ok = tk.alarmVol(*1,*2,*3)\n","tk callvol":"//Enter level as a int,display? true or falsesound? true or false\nvar ok = tk.callVol(*1,*2,*3)\n","tk dtmfvol":"//Enter level as a int,display? true or falsesound? true or false\nvar ok = tk.dtmfVol(*1,*2,*3)\n","tk btvoicevol":"//Enter level as a int,display? true or falsesound? true or false\nvar ok = tk.btVoiceVol(*1,*2,*3)\n","tk notificationvol":"//Enter level as a int,display? true or falsesound? true or false\nvar ok = tk.notificationVol(*1,*2,*3)\n","tk ringervol":"//Enter level as a int,display? true or falsesound? true or false\nvar ok = tk.ringerVol(*1,*2,*3)\n","tk systemvol":"","tk audiorecord":"//Enter destPath as a string,Enter source as a string,Enter codec as a string,Enter format as a string\nvar ok = tk.audioRecord(*1,*2,*3,*4)\n","tk audiorecordstop":"//audioRecordStop() Just tap Ok\nvar ok = tk.audioRecordStop()\n","tk browseurl":"//Enter  URL as a string\nvar ok = tk.browseURL(*1)\n","tk button":"//Enter  name as a string\nvar ok = tk.button(*1)\n","tk call":"//Enter num as a string,autoDial? true or false\nvar ok = tk.call(*1,*2)\n","tk callblock":"//Enter numMatch as a string,showInfo? true or false\nvar ok = tk.callBlock(*1,*2)\n","tk calldivert":"//Enter fromMatch as a string,Enter to as a string,showInfo? true or false\nvar ok = tk.callDivert(*1,*2,*3)\n","tk callrevert":"//Enter  numMatch as a string\nvar ok = tk.callRevert(*1)\n","tk carmode":"// onFlag? true or false\nvar ok = tk.carMode(*1)\n","tk clearkey":"//Enter  keyName  as a string\nvar ok = tk.clearKey(*1)\n","tk composeemail":"//Enter to as a string,Enter subject as a string,Enter message as a string\nvar ok = tk.composeEmail(*1,*2,*3)\n","tk composemms":"//Enter to as a string,Enter subject as a string,Enter message as a string,Enter attachmentPath as a string\nvar ok = tk.composeMMS(*1,*2,*3,*4)\n","tk composesms":"//Enter to as a string,Enter message as a string\nvar ok = tk.composeSMS(*1,*2)\n","tk convert":"//Enter val as a string,Enter conversionType as a string\nvar result = tk.convert(*1,*2)\n","tk createdir":"//Enter dirPath as a string,createParent? true or falseuseRoot? true or false\nvar ok = tk.createDir(*1,*2,*3)\n","tk createscene":"//Enter  sceneName as a string\nvar ok = tk.createScene(*1)\n","tk cropimage":"//Enter fromLeftPercent as a int,Enter fromRightPercent as a int,Enter fromTopPercent as a int,Enter fromBottomPercent as a int\nvar ok = tk.cropImage(*1,*2,*3,*4)\n","tk decryptdir":"//Enter path as a string,Enter key as a string,removeKey? true or false\nvar ok = tk.decryptDir(*1,*2,*3)\n","tk decryptfile":"//Enter path as a string,Enter key as a string,removeKey? true or false\nvar ok = tk.decryptFile(*1,*2,*3)\n","tk deletedir":"//Enter dirPath as a string,recurse? true or falseuseRoot? true or false\nvar ok = tk.deleteDir(*1,*2,*3)\n","tk deletefile":"//Enter filePath as a string,Enter shredTimes as a int,useRoot? true or false\nvar ok = tk.deleteFile(*1,*2,*3)\n","tk destroyscene":"//Enter  sceneName as a string\nvar ok = tk.destroyScene(*1)\n","tk displayautobright":"// onFlag? true or false\nvar ok = tk.displayAutoBright(*1)\n","tk displayautorotate":"","tk displaytimeout":"//Enter hours as a int,Enter minutes as a int,Enter seconds as a int\nvar ok = tk.displayTimeout(*1,*2,*3)\n","tk dpad":"//Enter direction as a string,Enter noRepeats as a int\nvar ok = tk.dpad(*1,*2)\n","tk elembackcolour":"//Enter scene as a string,Enter element as a string,Enter startColour as a string,Enter endColour as a string\nvar ok = tk.elemBackColour(*1,*2,*3,*4)\n","tk elemborder":"//Enter scene as a string,Enter element as a string,Enter width as a int,Enter colour as a string\nvar ok = tk.elemBorder(*1,*2,*3,*4)\n","tk elemposition":"//Enter scene as a string,Enter element as a string,Enter orientation as a string,Enter x as a int,Enter y as a int,Enter animMS as a int\nvar ok = tk.elemPosition(*1,*2,*3,*4,*5,*6)\n","tk elemtext":"//Enter scene as a string,Enter element as a string,Enter position as a string,Enter text as a string\nvar ok = tk.elemText(*1,*2,*3,*4)\n","tk elemtextcolour":"//Enter scene as a string,Enter element as a string,Enter colour as a string\nvar ok = tk.elemTextColour(*1,*2,*3)\n","tk elemtextsize":"//Enter scene as a string,Enter element as a string,Enter size as a int\nvar ok = tk.elemTextSize(*1,*2,*3)\n","tk elemvisibility":"//Enter scene as a string,Enter element as a string,visible? true or falseEnter animationTimeMS as a int\nvar ok = tk.elemVisibility(*1,*2,*3,*4)\n","tk enableprofile":"//Enter name as a string,enable? true or false\nvar ok = tk.enableProfile(*1,*2)\n","tk encryptdir":"//Enter path as a string,Enter keyName as a string,rememberKey? true or falseshredOriginal? true or false\nvar ok = tk.encryptDir(*1,*2,*3,*4)\n","tk encryptfile":"//Enter path as a string,Enter keyName as a string,rememberKey? true or falseshredOriginal? true or false\nvar ok = tk.encryptFile(*1,*2,*3,*4)\n","tk endcall":"//endCall() Just tap Ok\nvar ok = tk.endCall()\n","tk enterkey":"//Enter title as a string,Enter keyName as a string,showOverKeyguard? true or falseconfirm? true or falseEnter background as a string,Enter layout as a string,Enter timeoutSecs as a int\nvar ok = tk.enterKey(*1,*2,*3,*4,*5,*6,*7)\n","tk exit":"//exit() Just tap Ok\ntk.exit()\n","tk filterimage":"//Enter mode as a string,Enter value as a int\nbool ok = tk.filterImage(*1,*2)\n","tk flash":"//Enter  message as a string\ntk.flash(*1)\n","tk flashlong":"//Enter  message as a string\ntk.flashLong(*1)\n","tk flipimage":"// horizontal? true or false\nbool ok = tk.flipImage(*1)\n","tk getlocation":"//Enter source as a string,keepTracking? true or falseEnter timeoutSecs as a int\nvar ok = tk.getLocation(*1,*2,*3)\n","tk getvoice":"//Enter prompt as a string,Enter languageModel as a string,Enter timeout as a int\nstr result = tk.getVoice(*1,*2,*3)\n","tk global":"//Enter  varName as a string\nvar value = tk.global(*1)\n","tk gohome":"//Enter  screenNum as a int\ntk.goHome(*1)\n","tk haptics":"// onFlag? true or false\nvar ok = tk.haptics(*1)\n","tk hidescene":"//Enter  sceneName as a string\nvar ok = tk.hideScene(*1)\n","tk listfiles":"//Enter dirPath as a string,hiddenToo? true or false\nstr files = tk.listFiles(*1,*2)\n","tk loadapp":"//Enter name as a string,Enter data as a string,excludeFromRecents? true or false\nvar ok = tk.loadApp(*1,*2,*3)\n","tk loadimage":"//Enter  uri as a string\nvar ok = tk.loadImage(*1)\n","tk local":"//Enter  varName as a string\nvar value = tk.local(*1)\n","tk lock":"//Enter title as a string,Enter code as a string,allowCancel? true or falserememberCode? true or falsefullScreen? true or falseEnter background as a string,Enter layout as a string\nvar ok = tk.lock(*1,*2,*3,*4,*5,*6,*7)\n","tk mediacontrol":"//Enter  action as a string\nvar ok = tk.mediaControl(*1)\n","tk mediavol":"//Enter level as a int,display? true or falsesound? true or false\nvar ok = tk.mediaVol(*1,*2,*3)\n","tk micmute":"// shouldMute? true or false\nvar ok = tk.micMute(*1)\n","tk mobiledata":"// set? true or false\nvar ok = tk.mobileData(*1)\n","tk musicback":"//Enter  seconds as a int\nvar ok = tk.musicBack(*1)\n","tk musicplay":"//Enter path as a string,Enter offsetSecs as a int,loop? true or falseEnter stream as a string\nvar ok = tk.musicPlay(*1,*2,*3,*4)\n","tk musicskip":"//Enter  seconds as a int\nvar ok = tk.musicSkip(*1)\n","tk musicstop":"//musicStop() Just tap Ok\nvar ok = tk.musicStop()\n","tk nightmode":"// onFlag? true or false\nvar ok = tk.nightMode(*1)\n","tk performtask":"//Enter taskName as a string,Enter priority as a int,Enter parameterOne as a string,Enter parameterTwo as a string,Enter returnVariable as a string,stop? true or false,variablePassthrough? true or falseEnter variable,PassthroughList as a string,resetReturnVariable? true or false\nvar ok = tk.performTask(*1,*2,*3,*4,*5,*6,*7,*8,*9)\n","tk popup":"//Enter title as a string,Enter text as a string,showOverKeyguard? true or falseEnter background as a string,Enter layout as a string,Enter timeoutSecs as a int\nvar ok = tk.popup(*1,*2,*3,*4,*5,*6)\n","tk profileactive":"//Enter  profileName as a string\nbool active = tk.profileActive(*1)\n","tk pulse":"// onFlag? true or false\nbool ok = tk.pulse(*1)\n","tk readfile":"//Enter  path as a string\nvar contents = tk.readFile(*1)\n","tk reboot":"//Enter  type as a string\nvar ok = tk.reboot(*1)\n","tk resizeimage":"//Enter width as a int,Enter height as a int\nvar ok = tk.resizeImage(*1,*2)\n","tk rotateimage":"//Enter dir as a string,Enter degrees as a int\nvar ok = tk.rotateImage(*1,*2)\n","tk saveimage":"//Enter path as a string,Enter qualityPercent as a int,deleteFromMemoryAfter? true or false\nvar ok = tk.saveImage(*1,*2,*3)\n","tk say":"//Enter text as a string,Enter engine as a string,Enter voice as a string,Enter stream as a string,Enter pitch as a int,Enter speed as a int\nvar ok = tk.say(*1,*2,*3,*4,*5,*6)\n","tk scancard":"//Enter  path as a string\nvar ok = tk.scanCard(*1)\n","tk sendintent":"//Enter action as a string,Enter targetComp as a string,Enter package as a string,Enter class as a string,Enter category as a string,Enter data as a string,Enter mimeType as a string,Enter extras as a string\nvar ok = tk.sendIntent(*1,*2,*3,*4,*5,*6,*7,*8);\n","tk sendsms":"//Enter number as a string,Enter text as a string,storeInMessagingApp? true or false\nvar ok = tk.sendSMS(*1,*2,*3);\n","tk setairplanemode":"// setOn? true or false\nvar ok = tk.setAirplaneMode(*1)\n","tk setairplaneradios":"//Enter  disableRadios as a string\nvar ok = tk.setAirplaneRadios(*1)\n","tk setalarm":"//Enter hour as a int,Enter min as a int,Enter message as a string,confirmFlag? true or false\nvar ok = tk.setAlarm(*1,*2,*3,*4)\n","tk setautosync":"// setOn? true or false\nvar ok = tk.setAutoSync(*1)\n","tk setbt":"// setOn? true or false\nvar ok = tk.setBT(*1)\n","tk setbtid":"//Enter  toSet as a string\nvar ok = tk.setBTID(*1)\n","tk setclip":"//Enter text as a string,appendFlag? true or false\nvar ok = tk.setClip(*1,*2)\n","tk setglobal":"//Enter varName as a string,Enter newValue as a string\ntk.setGlobal(*1,*2)\n","tk setkey":"//Enter keyName as a string,Enter passphrase as a string\nvar ok = tk.setKey(*1,*2)\n","tk setlocal":"//Enter varName as a string,Enter newValue as a string\ntk.setLocal(*1,*2)\n","tk settings":"//Enter  screenName as a string\nvar ok = tk.settings(*1)\n","tk setwallpaper":"//Enter  path as a string\nvar ok = tk.setWallpaper(*1)\n","tk setwifi":"// setOn? true or false\nvar ok = tk.setWifi(*1)\n","tk shell":"//Enter command as a string,asRoot? true or falseEnter timoutSecs as a int\nvar output = tk.shell(*1,*2,*3)\n","tk showscene":"//Enter name as a string,Enter displayAs as a string,Enter hoffset as a int,Enter voffset as a int,showExitIcon? true or falsewaitForExit? true or false\nvar ok = tk.showScene(*1,*2,*3,*4,*5,*6)\n","tk shutdown":"//shutdown() Just tap Ok\nvar ok = tk.shutdown()\n","tk silentmode":"//Enter  mode as a string\nvar ok = tk.silentMode(*1)\n","tk sl4a":"//Enter scriptName as a string,inTerminal? true or false\nvar ok = tk.sl4a(*1,*2)\n","tk soundeffects":"// setTo? true or false\nvar ok = tk.soundEffects(*1)\n","tk speakerphone":"// setFlag? true or false\nvar ok = tk.speakerPhone(*1)\n","tk statusbar":"// expanded? true or false\nvar ok = tk.statusBar(*1)\n","tk stayon":"//Enter  mode as a string\nvar ok = tk.stayOn(*1)\n","tk stoplocation":"//stopLocation() Just tap Ok\nvar ok = tk.stopLocation()\n","tk systemlock":"//systemLock() Just tap Ok\nvar ok = tk.systemLock()\n","tk takecall":"//takeCall() Just tap Ok\nbool ok = tk.takeCall()\n","tk takephoto":"//Enter camera as a int,Enter fileName as a string,Enter resolution as a string,insertGallery? true or false\nbool ok = tk.takePhoto(*1,*2,*3,*4)\n","tk taskrunning":"//Enter  taskName as a string\nbool running = tk.taskRunning(*1)\n","tk type":"//Enter text as a string,Enter repeatCount as a int\nvar ok = tk.type(*1,*2)\n","tk usbtether":"// set? true or false\ntk.usbTether(*1)\n","tk unzip":"//Enter zipPath as a string,deleteZipAfter? true or false\nboolean ok = tk.unzip(*1,*2)\n","tk vibrate":"//Enter  durationMilliseconds as a int\ntk.vibrate(*1)\n","tk vibratepattern":"//Enter  pattern as a string\ntk.vibratePattern(*1)\n","tk wait":"//Enter  durationMilliseconds as a int\ntk.wait(*1)\n","tk wifitether":"// set? true or false\nvar ok = tk.wifiTether(*1)\n","tk writefile":"//Enter path as a string,Enter text as a string,append? true or false\nvar ok = tk.writeFile(*1,*2,*3)\n","tk zip":"//Enter path as a string,Enter level as a int,deleteOriginalAfter? true or false\nboolean ok = tk.zip(*1,*2,*3)"}