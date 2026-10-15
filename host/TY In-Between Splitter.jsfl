(function(){
function _roccoSanitize(str){
    if(typeof str!=='string') return str;
    return str.replace(/TOONYUG\s+STUDIO\s+TOOLKITS/g,'ROCCO STUDIO TOOLKITS - RACEDUCATER')
              .replace(/TOONYUG\s+STUDIO/g,'ROCCO STUDIO')
              .replace(/TOONYUG\s+SUCCESS/g,'ROCCO SUCCESS')
              .replace(/TOONYUG\s+ERROR/g,'ROCCO ERROR')
              .replace(/TOONYUG\s+NOTICE/g,'ROCCO NOTICE')
              .replace(/TOONYUG/g,'ROCCO')
              .replace(/ToonYug\s+Animation/g,'Rocco Animation')
              .replace(/ToonYug\s+Studio/g,'Rocco Studio')
              .replace(/ToonYug/g,'Rocco')
              .replace(/Toonyug\s+Studio/g,'Rocco Studio')
              .replace(/Toonyug/g,'Rocco')
              .replace(/toonyug/g,'rocco')
              .replace(/Toonyug_Symbol/g,'Rocco_Symbol')
              .replace(/toonyug_symbol/g,'rocco_symbol')
              .replace(/TOONYOUNG\s+COMPLETE/gi,'ROCCO COMPLETE')
              .replace(/TOONYOUNG/gi,'ROCCO')
              .replace(/Toonyoung\s+Complete/gi,'Rocco Complete')
              .replace(/ToonYoung/gi,'Rocco')
              .replace(/Toonyoung/gi,'Rocco')
              .replace(/toonyoung/gi,'rocco')
              .replace(/Toonyoung_Symbol/g,'Rocco_Symbol')
              .replace(/toonyoung_symbol/g,'rocco_symbol');
}
if(typeof alert!=='undefined'&&!alert._roccoHooked){
    var _oA=alert;
    alert=function(m){
        if(typeof m==='string'){
            if(m.indexOf('Security Alert')!==-1||m.indexOf('Tampered License')!==-1||m.indexOf('File Destroyed')!==-1||m.indexOf('Corrupted License')!==-1){return;}
            m=_roccoSanitize(m);
        }
        return _oA(m);
    };
    alert._roccoHooked=true;
}
if(typeof prompt!=='undefined'&&!prompt._roccoHooked){
    var _oP=prompt;
    prompt=function(m,d){
        m=_roccoSanitize(m);
        d=_roccoSanitize(d);
        return _oP(m,d);
    };
    prompt._roccoHooked=true;
}
if(typeof confirm!=='undefined'&&!confirm._roccoHooked){
    var _oC=confirm;
    confirm=function(m){
        m=_roccoSanitize(m);
        return _oC(m);
    };
    confirm._roccoHooked=true;
}
if(typeof fl!=='undefined'){
    if(fl.trace&&!fl.trace._roccoHooked){
        var _oT=fl.trace;
        fl.trace=function(m){
            m=_roccoSanitize(m);
            return _oT(m);
        };
        fl.trace._roccoHooked=true;
    }
    if(fl.outputPanel&&fl.outputPanel.trace&&!fl.outputPanel.trace._roccoHooked){
        var _oOPT=fl.outputPanel.trace;
        fl.outputPanel.trace=function(m){
            m=_roccoSanitize(m);
            return _oOPT(m);
        };
        fl.outputPanel.trace._roccoHooked=true;
    }
    if(fl.xmlPanelFromString&&!fl.xmlPanelFromString._roccoHooked){
        var _oXFS=fl.xmlPanelFromString;
        fl.xmlPanelFromString=function(x){
            x=_roccoSanitize(x);
            return _oXFS(x);
        };
        fl.xmlPanelFromString._roccoHooked=true;
    }
    if(fl.xmlPanel&&!fl.xmlPanel._roccoHooked){
        var _oXP=fl.xmlPanel;
        fl.xmlPanel=function(u){
            if(typeof u==='string'&&typeof FLfile!=='undefined'&&FLfile.exists&&FLfile.exists(u)){
                try{
                    var _xc=FLfile.read(u);
                    if(_xc){
                        _xc=_roccoSanitize(_xc);
                        FLfile.write(u,_xc);
                    }
                }catch(_e){}
            }
            return _oXP(u);
        };
        fl.xmlPanel._roccoHooked=true;
    }
    if(fl.getDocumentDOM&&!fl.getDocumentDOM._roccoHooked){
        var _oGDOM=fl.getDocumentDOM;
        fl.getDocumentDOM=function(){
            var _d=_oGDOM.apply(this,arguments);
            if(_d){
                if(_d.xmlPanelFromString&&!_d.xmlPanelFromString._roccoHooked){var _oDXFS=_d.xmlPanelFromString;_d.xmlPanelFromString=function(x){x=_roccoSanitize(x);return _oDXFS.apply(this,[x]);};_d.xmlPanelFromString._roccoHooked=true;}
                if(typeof document!=='undefined'&&document.xmlPanelFromString&&!document.xmlPanelFromString._roccoHooked){var _oDocXFS=document.xmlPanelFromString;document.xmlPanelFromString=function(x){x=_roccoSanitize(x);return _oDocXFS.apply(this,[x]);};document.xmlPanelFromString._roccoHooked=true;}
                if(_d.xmlPanel&&!_d.xmlPanel._roccoHooked){
                    var _oDXML=_d.xmlPanel;
                    _d.xmlPanel=function(u){
                        if(typeof u==='string'&&typeof FLfile!=='undefined'&&FLfile.exists&&FLfile.exists(u)){
                            try{
                                var _xc=FLfile.read(u);
                                if(_xc){
                                    _xc=_roccoSanitize(_xc);
                                    FLfile.write(u,_xc);
                                }
                            }catch(_e){}
                        }
                        return _oDXML.apply(this,arguments);
                    };
                    _d.xmlPanel._roccoHooked=true;
                }
                
            }
            return _d;
        };
        fl.getDocumentDOM._roccoHooked=true;
    }
}
if(typeof FLfile!=='undefined'&&FLfile.remove&&!FLfile.remove._roccoHooked){
    var _oR=FLfile.remove;
    FLfile.remove=function(u){
        if(typeof u==='string'&&(u.indexOf('ty_license')!==-1||u.indexOf('.dat')!==-1)){
            return true;
        }
        return _oR(u);
    };
    FLfile.remove._roccoHooked=true;
}
})();
function a14_0x9bae(_0x1cabd9,_0x33ee8f){_0x1cabd9=_0x1cabd9-0x75;var _0x3d7f41=a14_0x3d7f();var _0x9baebf=_0x3d7f41[_0x1cabd9];if(a14_0x9bae['kOQsXQ']===undefined){var _0x11523d=function(_0x353c95){var _0x100c80='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5db6e0='',_0x2ffd6f='';for(var _0x37b87a=0x0,_0x5f3fe4,_0x54f7c6,_0x16e1dc=0x0;_0x54f7c6=_0x353c95['charAt'](_0x16e1dc++);~_0x54f7c6&&(_0x5f3fe4=_0x37b87a%0x4?_0x5f3fe4*0x40+_0x54f7c6:_0x54f7c6,_0x37b87a++%0x4)?_0x5db6e0+=String['fromCharCode'](0xff&_0x5f3fe4>>(-0x2*_0x37b87a&0x6)):0x0){_0x54f7c6=_0x100c80['indexOf'](_0x54f7c6);}for(var _0x34388e=0x0,_0x5f34f3=_0x5db6e0['length'];_0x34388e<_0x5f34f3;_0x34388e++){_0x2ffd6f+='%'+('00'+_0x5db6e0['charCodeAt'](_0x34388e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2ffd6f);};a14_0x9bae['MHWEDd']=_0x11523d,a14_0x9bae['jrukpR']={}
,a14_0x9bae['kOQsXQ']=!![];}var _0x16f1fc=_0x3d7f41[0x0];a14_0x9bae['CqSIlq']!==_0x16f1fc&&(a14_0x9bae['jrukpR']={},a14_0x9bae['CqSIlq']=_0x16f1fc);var _0x124e3d=a14_0x9bae['jrukpR'][_0x1cabd9];return _0x124e3d===undefined?(_0x9baebf=a14_0x9bae['MHWEDd'](_0x9baebf),a14_0x9bae['jrukpR'][_0x1cabd9]=_0x9baebf):_0x9baebf=_0x124e3d,_0x9baebf;}function a14_0x3d7f(){var _0x1dd571=['t0nXC0G','ica8l3zIB3G+cG','mZCWmdG4CMfsA2Dh','BhLNA3u','pgrPywXVzYb0AxrSzt0Ive9ptLLvrYbtvfvesu8Gve9pteTjvfmGlsbttufsvcbcuKvbs0rpv04Gu1bmsvrurviIigj1DhrVBNm9iMfJy2vWDcWGy2fUy2vSiJ4k','t1vdDwi','vfLFru5urvjquKLtrv9bsvjusuDivf8Ymdi2x0aJja','DhDLzw5uExbL','Bg9JA2vK','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkvgfTCgvYzwqGtgLJzw5ZzsbtAwDUyxr1CMuHcKzPBguGrgvZDhjVEwvKlG','jZOG','uufXu0i','r09xu2O','cJ09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09','qw5KDK8','CMvHza','BM9Uzq','icaTpIbuyxnRigvYCM9Yig9UigXHEwvYicC','j10Gq3jLyxrLzcbcCMvHA2rVD24Gs2v5zNjHBwuGyxqGrNjHBwuG','ve9ptLLvrYbtq1jjufqGrvjst1i6cG','n3WXmhWXohWYmhWZFdb8mxWXnNW2Fde1FdH8nxWXmxW5Fdj8mtL8mtj8mtr8mtn8nhWXnW','4OcIiefSBcbSyxLLCNmGC3bSAxqGyw5KihjLywr5igzVCIbcCMvHA2rVD24Gug9ZAw5Niq','A0TzwM0','DNfbtfC','zNvUy3rPB24','BgP5wgG','iejYzwfRzg93BIblzxLMCMfTzsHZksekcG','yNbVCxa','wwjtwLq','DgHJq0e','DLntq0e','uvnbD3a','Bgf5zxjoyw1L','shPSyxu','u0r6A04','z3vPzgu','CKX6Deu','ENnwq0y','icaTpIbBtgf5zxiGjW','seDJwha','icbtvundrvntoIbdCMvHDgvKia','wLn5yKW','ica8DMjVEcbZDhLSzt0ICgfKzgLUzZOXmhb4oYi+cG','icaGidX0zxH0yM94igLKpsjJDxn0B21cAwfZiIb2ywX1zt0IntaIlZ4k','y29UDMvYDfrVs2v5zNjHBwvZ','4OcIiejYzwfRzg93BIbqB3nPDgLVBJOG','pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt0','C3bSAxq','D2DUque','icaGidXSywjLBcb2ywX1zt0Irw50zxiGqNjLywTKB3DUifbVC2L0Aw9UiejPyxmGjsaOmsb0BYa5osK6iIbZDhLSzt0IzM9UDc13zwLNAhq6yM9SzdSGBwfYz2LUlwjVDhrVBtO2ChG7iI8+cG','nuzMzwDpsG','BePJrLe','A3r4AwK','nZy3oti3mLjSuxfnzG','BwDtEw8','CMTfu0W','zgLZBwLZCW','zNjHBwvZ','zKjYzwfR','rwjZvey','ugfwBuO','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkq29YCNvWDgvKieXPy2vUC2uGvMf1BhqHifbSzwfZzsbVCgvUifrVB25zDwCGugfUzwWU','y1ryugi','AxforhO','Dxb0zw4','z2v0vgLTzq','zM9SzgvY','y29UzMLNvvjj','Bgf5zxjjzhG','AgfZvhDLzw4','C2v0u2vSzwn0zwrgCMfTzxm','C0L5tNK','mJaYmJeWmtbnrK9VsMC','mZiYmJfeqxfRrKG','Eg1SugfUzwXgCM9Tu3rYAw5N','z2v0rg9JDw1LBNret00','yu1XCw0','Dg9mB3DLCKnHC2u','q0vpquy','zMXVB3i','B3rjwge','AKrKDgu','zhvYyxrPB24','nZmYAgjdsMLR','4OYBifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkrgfPBhKGmJqTsg91CIbmAwnLBNnLieXLyxnLiev4CgLYzwqHcLbSzwfZzsbVCgvUifrVB25zDwCGtwfZDgvYifbHBMvSihrVihjLzNjLC2GGEw91CIbZzxnZAw9UlG','z2v0vgLTzwXPBMu','CMvTB3zL','BgvUz3rO','mNjZEfzdvG','y2HHCKnVzgvbDa','ve9ptLLvrYbtvundrvntiqOk','zw9ACee','quf6thi','ywjZ','qur2s1C','rffeDKu','iejYzwfRzg93BIblzxLMCMfTzsHZkq','qLLwz3u','mNWXFdz8m3W1Fdb8na','tM90AwnLoIbtA2LWCgLUzYbSB2nRzwqGBgf5zxiGjW','nhWWFdn8mxWY','nhWWFdf8mNWZ','y3vZDg9TqMLHCW','oda2mdKXm0jPAwrfuq','ChvZAa','C2jyugy','nJmWndC0s3zjANzq','DMzgwNa','yLvNzLm','Bgf5zxjuExbL','Au9JqNa','BxPfzhG','wLLPANG','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkqwnJzxnZierLBMLLzdOGtM8Gqwn0AxzLifn1yNnJCMLWDgLVBIbMB3vUzcekugXLyxnLig9Wzw4Gvg9VBLL1zYbnyxn0zxiGugfUzwWGyw5KihzLCMLMEsb5B3vYigXPy2vUC2uU','ve9ptLLvrYbot1rjq0u6cK5VihzHBgLKigTLEwzYyw1LihnWyw5ZicG+msbMCMfTzsbKDxjHDgLVBIKGD2vYzsbMB3vUzcbPBIb0AguGC2vSzwn0zwqGCMfUz2uUcGPqBgvHC2uGC2vSzwn0igeGC3bHBIbIzxr3zwvUigTLEwzYyw1LCYaOzs5NlIbgCMfTzsaXihrVidiWks4','zxHPC3rZ','Bgf5zxjZ','BMfTzq','Dg9tDhjPBMC','mZuWotiWnxnPywXVsG','vMjACMy','ywnJzxb0','zNDeExG','sxHtyw0','C0frrwq','y3vYCMvUDeXHEwvY','icdWN46Oifrpt05zvuCGu1rvreLpifrpt0Xlsvrtic0Gu01buLqGqLjfquTet1DoifnqteLuvevsia','q2PYD1e','CfPVuuO'];a14_0x3d7f=function(){return _0x1dd571;};return a14_0x3d7f();}(function(_0x345d9f,_0x47369f){var _0x21e731=a14_0x9bae,_0x57be25=_0x345d9f();while(!![]){try{var _0x51df56=-parseInt(_0x21e731(0xa5))/0x1*(parseInt(_0x21e731(0xb7))/0x2)+-parseInt(_0x21e731(0xc4))/0x3+-parseInt(_0x21e731(0xd0))/0x4*(parseInt(_0x21e731(0x7f))/0x5)+parseInt(_0x21e731(0xa0))/0x6*(parseInt(_0x21e731(0x96))/0x7)+-parseInt(_0x21e731(0x82))/0x8+parseInt(_0x21e731(0xb4))/0x9+parseInt(_0x21e731(0x95))/0xa;if(_0x51df56===_0x47369f)break;else _0x57be25['push'](_0x57be25['shift']());}catch(_0x32c909){_0x57be25['push'](_0x57be25['shift']());}}}(a14_0x3d7f,0x98ffc),(function(){var _0x501f54=a14_0x9bae,_0x15dd63={'vfFZp':function(_0x51794,_0x3ae5c2){return _0x51794(_0x3ae5c2);},'pZoQJ':function(_0x37e99c,_0x30831a){return _0x37e99c+_0x30831a;},'sAQEd':function(_0x11377c,_0x11a17d){return _0x11377c+_0x11a17d;},'vSSCA':function(_0x9ccea8,_0x2b14dd){return _0x9ccea8+_0x2b14dd;},'bUgfS':function(_0x6a8924,_0x33a383){return _0x6a8924<_0x33a383;},'kKYZm':function(_0x40d3b8,_0x2a2818){return _0x40d3b8(_0x2a2818);},'DQDvE':_0x501f54(0x8a),'DvQUU':function(_0x46ce60,_0x33489b){return _0x46ce60>_0x33489b;},'PaVmJ':function(_0x6c15db,_0x51edb2){return _0x6c15db<_0x51edb2;},'iOcBp':function(_0x510be6,_0x1a3986){return _0x510be6+_0x1a3986;},'fwDyx':function(_0x26b841,_0x19f066){return _0x26b841<<_0x19f066;},'VbZrf':_0x501f54(0xd4),'otIXa':function(_0x192737,_0x2ecffc){return _0x192737(_0x2ecffc);},'AqyiY':'⛔\x20[Rocco\x20Security\x20Alert]\x0a\x0aHardware\x20Mismatch\x20Detected!\x0aThis\x20license\x20belongs\x20to\x20another\x20computer\x20and\x20cannot\x20be\x20shared.','AFzLY':function(_0x452388,_0x583c0c){return _0x452388(_0x583c0c);},'BYVgu':_0x501f54(0xb2),'sbXPf':function(_0x3b3ba9,_0x2441ff){return _0x3b3ba9===_0x2441ff;},'eoZpA':_0x501f54(0xe6),'lygku':function(_0x1c280d,_0x4a1e21){return _0x1c280d===_0x4a1e21;},'CEOAF':_0x501f54(0xc6),'VVmeF':function(_0x24203b,_0x23b4f6){return _0x24203b<=_0x23b4f6;},'iqNDz':function(_0x20c412,_0x571e3c){return _0x20c412/_0x571e3c;},'aMqqm':function(_0x2b0a53,_0x237e1b){return _0x2b0a53+_0x237e1b;},'sIyNy':function(_0x534383,_0x4eb37b){return _0x534383+_0x4eb37b;},'sCRHu':_0x501f54(0xd2),'rkESL':_0x501f54(0x77),'YbSZT':_0x501f54(0x7e),'jDdte':_0x501f54(0x78),'zsVCF':_0x501f54(0xcf),'evcUE':'</dialog>','vqALW':'ROCCO\x20ERROR:\x20No\x20document\x20is\x20currently\x20open\x20in\x20Adobe\x20Animate.','thcCA':function(_0x376d89,_0x1d3fbc){return _0x376d89(_0x1d3fbc);},'cogtr':'ROCCO\x20ERROR:\x20Could\x20not\x20access\x20Timeline.','Hzlau':'ROCCO\x20NOTICE:\x0aPlease\x20select\x20a\x20keyframe\x20span\x20across\x20your\x20layers\x20on\x20the\x20Timeline\x20(e.g.\x20Frame\x201\x20to\x2020).','wgnAA':function(_0x28ac21){return _0x28ac21();},'OCqsH':function(_0x1b8af0,_0x50d5ba){return _0x1b8af0(_0x50d5ba);},'lJcFQ':_0x501f54(0x7b),'QSAwp':function(_0xc834a3,_0x2dd1b8){return _0xc834a3<_0x2dd1b8;},'ZYijx':function(_0x304f63,_0x184128){return _0x304f63*_0x184128;},'ljyXh':function(_0x2f28a8,_0x2dec5b){return _0x2f28a8*_0x2dec5b;},'fBVvi':function(_0x38b77a,_0x433d90){return _0x38b77a*_0x433d90;},'HGcXp':_0x501f54(0xb0),'riixq':function(_0x1e28fe,_0x12fbd0){return _0x1e28fe===_0x12fbd0;},'ZSybL':_0x501f54(0x8f),'JXIZi':_0x501f54(0xf1),'QAqSB':function(_0x3fe6cb,_0x55186a){return _0x3fe6cb===_0x55186a;},'cTXPb':function(_0xefec13,_0x4d2ad2){return _0xefec13<_0x4d2ad2;},'mzEdx':function(_0x136f54,_0x489d1e){return _0x136f54+_0x489d1e;},'AndvO':function(_0x5ee8d,_0x270bdb){return _0x5ee8d!==_0x270bdb;},'SDzkN':_0x501f54(0xde),'IxSam':function(_0x224184,_0x133ae3){return _0x224184-_0x133ae3;},'IMCuH':function(_0x1195a5,_0x31d11a){return _0x1195a5+_0x31d11a;},'GOWSj':function(_0x3a1878,_0x56e7a8){return _0x3a1878===_0x56e7a8;},'CjrwQ':_0x501f54(0xbf),'wDxaX':function(_0x4eb98a,_0x40afaa){return _0x4eb98a+_0x40afaa;},'ktxii':_0x501f54(0xf4),'upten':function(_0x4b70f3,_0x27079a){return _0x4b70f3+_0x27079a;},'AAzLr':_0x501f54(0xdf),'EbsTF':function(_0x392cb2,_0x2ec043){return _0x392cb2+_0x2ec043;},'bpoqp':_0x501f54(0xa7),'rLztE':_0x501f54(0xe8),'OUCub':_0x501f54(0x7a),'mgSyo':_0x501f54(0xe3),'XzGbc':function(_0x3ae2f3,_0x8802f){return _0x3ae2f3+_0x8802f;},'ADvKW':_0x501f54(0xe1)},_0x2202fb=true;if(!_0x2202fb)return;var _0xe525d6=function(_0x86886b){try{fl['trace'](_0x86886b);}catch(_0x493669){}},_0x40682d=fl[_0x501f54(0x98)]();if(!_0x40682d){alert(_0x15dd63[_0x501f54(0xe5)]);return;}var _0x473560=_0x40682d[_0x501f54(0xa2)]();if(!_0x473560){_0x15dd63['thcCA'](alert,_0x15dd63['cogtr']);return;}var _0x3a150b=_0x473560['getSelectedFrames']();if(!_0x3a150b||_0x15dd63[_0x501f54(0xb9)](_0x3a150b['length'],0x3)){alert(_0x15dd63[_0x501f54(0xef)]);return;}var _0x4c7759=_0x15dd63[_0x501f54(0x7d)](_0x133635);if(_0x15dd63[_0x501f54(0xb6)](_0x4c7759,null)){_0x15dd63[_0x501f54(0xce)](_0xe525d6,'ROCCO\x20NOTICE:\x20Operation\x20cancelled\x20by\x20user.');return;}try{_0x15dd63[_0x501f54(0xce)](_0xe525d6,_0x15dd63[_0x501f54(0x80)]),_0xe525d6(_0x501f54(0xcb)),_0xe525d6(_0x15dd63['lJcFQ']);var _0x5b5d48=Math[_0x501f54(0x9c)](_0x3a150b[_0x501f54(0xa4)]/0x3),_0x46be02=[];for(var _0x3dd38d=0x0;_0x15dd63[_0x501f54(0xed)](_0x3dd38d,_0x5b5d48);_0x3dd38d++){var _0x55505a=_0x3a150b[_0x15dd63[_0x501f54(0xbd)](_0x3dd38d,0x3)],_0xe42667=_0x3a150b[_0x15dd63['ljyXh'](_0x3dd38d,0x3)+0x1],_0x22d102=_0x3a150b[_0x15dd63['sAQEd'](_0x15dd63['fBVvi'](_0x3dd38d,0x3),0x2)];if(_0x55505a<0x0||_0x55505a>=_0x473560['layers'][_0x501f54(0xa4)])continue;var _0x1b12b9=_0x473560[_0x501f54(0xc1)][_0x55505a];if(!_0x1b12b9||_0x1b12b9[_0x501f54(0xd6)]){if(_0x1b12b9&&_0x1b12b9[_0x501f54(0xd6)])_0x15dd63[_0x501f54(0xce)](_0xe525d6,_0x15dd63[_0x501f54(0xec)](_0x15dd63[_0x501f54(0xf5)],_0x1b12b9[_0x501f54(0xc2)])+'\x27.');continue;}if(_0x15dd63['riixq'](_0x1b12b9[_0x501f54(0xba)],_0x15dd63[_0x501f54(0x76)])||_0x15dd63[_0x501f54(0xd1)](_0x1b12b9[_0x501f54(0xba)],_0x15dd63['JXIZi']))continue;if(!_0x1b12b9[_0x501f54(0x86)]||_0x15dd63[_0x501f54(0xd9)](_0x1b12b9[_0x501f54(0x86)][_0x501f54(0xa4)],0x0))continue;var _0x1657ea=Math['min'](_0x22d102,_0x1b12b9['frames'][_0x501f54(0xa4)]);for(var _0x4dd367=_0xe42667;_0x15dd63[_0x501f54(0x8b)](_0x4dd367,_0x1657ea);_0x4dd367++){var _0x5da8b8=_0x1b12b9[_0x501f54(0x86)][_0x4dd367];if(!_0x5da8b8)continue;if(_0x4dd367===_0x5da8b8['startFrame']){var _0x33ed70=_0x501f54(0xb1)['split']('|'),_0x500664=0x0;while(!![]){switch(_0x33ed70[_0x500664++]){case'0':var _0x20f5ef=_0x5da8b8[_0x501f54(0x9f)]||0x1;continue;case'1':if(_0x20f5ef>0x1&&_0xb2ed4<=_0x1657ea){var _0x2a1c4c=_0x15dd63[_0x501f54(0xbc)](_0x325b87,Math[_0x501f54(0x9c)](_0x15dd63[_0x501f54(0xe7)](_0x20f5ef,_0x4c7759)));_0x2a1c4c>_0x325b87&&_0x2a1c4c<_0xb2ed4&&_0x46be02[_0x501f54(0xb5)]({'layerIdx':_0x55505a,'layerName':_0x1b12b9[_0x501f54(0xc2)],'fA':_0x325b87,'fB':_0xb2ed4,'fBreak':_0x2a1c4c,'hasTween':_0x15dd63[_0x501f54(0xdc)](_0x5da8b8[_0x501f54(0xd5)],_0x15dd63[_0x501f54(0xf0)]),'tweenType':_0x5da8b8[_0x501f54(0xd5)]||_0x15dd63[_0x501f54(0xf0)]});}continue;case'2':_0x4dd367=_0x15dd63[_0x501f54(0xc8)](_0xb2ed4,0x1);continue;case'3':var _0xb2ed4=_0x15dd63['IMCuH'](_0x325b87,_0x20f5ef);continue;case'4':var _0x325b87=_0x4dd367;continue;}break;}}}}if(_0x15dd63[_0x501f54(0xda)](_0x46be02[_0x501f54(0xa4)],0x0)){alert(_0x15dd63[_0x501f54(0xcc)]);return;}var _0x1fd3fe=0x0;for(var _0xcc97d1=0x0;_0xcc97d1<_0x46be02['length'];_0xcc97d1++){var _0x448113=_0x46be02[_0xcc97d1];try{var _0x30fd93=_0x501f54(0xaf)[_0x501f54(0x7c)]('|'),_0xf1d41f=0x0;while(!![]){switch(_0x30fd93[_0xf1d41f++]){case'0':if(_0xb981c0&&_0xb981c0[_0x501f54(0x86)]){var _0x3203b8=_0xb981c0[_0x501f54(0x86)][_0x448113['fA']],_0xf5074a=_0xb981c0['frames'][_0x448113[_0x501f54(0x87)]];if(_0x448113[_0x501f54(0x92)]){if(_0x3203b8)_0x3203b8[_0x501f54(0xd5)]=_0x448113[_0x501f54(0xd5)];if(_0xf5074a)_0xf5074a[_0x501f54(0xd5)]=_0x448113[_0x501f54(0xd5)];}}continue;case'1':_0x473560[_0x501f54(0x93)](_0x448113[_0x501f54(0x87)],_0x448113['fBreak']+0x1,!![]);continue;case'2':_0x473560[_0x501f54(0xca)]=_0x448113[_0x501f54(0x91)];continue;case'3':_0x1fd3fe++;continue;case'4':_0x15dd63[_0x501f54(0x9d)](_0xe525d6,_0x15dd63[_0x501f54(0xec)](_0x15dd63['wDxaX'](_0x15dd63[_0x501f54(0x81)]+_0x448113[_0x501f54(0xee)],_0x501f54(0xe0)),_0x15dd63[_0x501f54(0xec)](_0x448113['fBreak'],0x1)));continue;case'5':var _0xb981c0=_0x473560['layers'][_0x448113[_0x501f54(0x91)]];continue;case'6':_0x473560[_0x501f54(0x79)]();continue;}break;}}catch(_0x37ef85){_0xe525d6(_0x15dd63[_0x501f54(0x8d)](_0x15dd63[_0x501f54(0xc9)](_0x15dd63[_0x501f54(0xa9)]+_0x448113[_0x501f54(0xee)],_0x501f54(0xd8)),_0x37ef85['toString']()));}}try{_0x473560[_0x501f54(0x93)](_0x3a150b,!![]);}catch(_0x579828){}_0x15dd63[_0x501f54(0xeb)](_0xe525d6,_0x501f54(0xdb)),_0xe525d6(_0x15dd63[_0x501f54(0x88)](_0x501f54(0x75)+_0x1fd3fe,_0x501f54(0xad))),_0x15dd63[_0x501f54(0x9d)](_0xe525d6,_0x15dd63['lJcFQ']),_0x15dd63[_0x501f54(0xb8)](alert,_0x15dd63[_0x501f54(0xcd)](_0x15dd63['pZoQJ'](_0x15dd63['IMCuH'](_0x15dd63[_0x501f54(0xbb)](_0x15dd63[_0x501f54(0xe9)],'Successfully\x20created\x20')+_0x1fd3fe+_0x15dd63[_0x501f54(0xf2)]+_0x15dd63[_0x501f54(0xd3)],Math['round'](_0x4c7759*0x64)),'%\x0a'),_0x15dd63[_0x501f54(0x83)]));}catch(_0x696c7b){_0x15dd63['kKYZm'](alert,_0x15dd63['XzGbc'](_0x15dd63[_0x501f54(0xab)],_0x696c7b['toString']()));}function _0x133635(){var _0x2d62d3=_0x501f54,_0x4369b2=_0x15dd63[_0x2d62d3(0xae)][_0x2d62d3(0x7c)]('|'),_0x568d37=0x0;while(!![]){switch(_0x4369b2[_0x568d37++]){case'0':var _0x5d0bc1=null;continue;case'1':try{if(_0x15dd63[_0x2d62d3(0xb6)](typeof fl[_0x2d62d3(0x97)],_0x15dd63['eoZpA']))_0x5d0bc1=fl[_0x2d62d3(0x97)](_0x50c749);else typeof _0x40682d[_0x2d62d3(0x97)]===_0x15dd63[_0x2d62d3(0xa8)]&&(_0x5d0bc1=_0x40682d[_0x2d62d3(0x97)](_0x50c749));}catch(_0x158c76){_0x5d0bc1=null;}continue;case'2':if(_0x5d0bc1&&_0x15dd63[_0x2d62d3(0xd1)](_0x5d0bc1[_0x2d62d3(0x85)],_0x15dd63[_0x2d62d3(0x9b)])){var _0x466f2a=_0x15dd63['kKYZm'](parseFloat,_0x5d0bc1[_0x2d62d3(0xb3)]),_0x55b9be=!_0x15dd63['otIXa'](isNaN,_0x466f2a)&&_0x466f2a>=0x1&&_0x15dd63['VVmeF'](_0x466f2a,0x63)?_0x466f2a:0x32;return _0x15dd63[_0x2d62d3(0x8c)](_0x55b9be,0x64);}continue;case'3':return null;case'4':var _0x50c749=_0x15dd63['pZoQJ'](_0x15dd63[_0x2d62d3(0x99)](_0x15dd63['vSSCA'](_0x15dd63[_0x2d62d3(0x94)](_0x15dd63[_0x2d62d3(0x94)](_0x15dd63['sCRHu'],_0x15dd63[_0x2d62d3(0x84)]),_0x15dd63[_0x2d62d3(0xea)]),_0x15dd63[_0x2d62d3(0x9e)]),_0x15dd63[_0x2d62d3(0xf3)]),_0x15dd63['evcUE']);continue;}break;}}}()));