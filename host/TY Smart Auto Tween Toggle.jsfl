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
function a25_0x41a7(_0x1b3efd,_0x398440){_0x1b3efd=_0x1b3efd-0x15a;var _0x223ed9=a25_0x223e();var _0x41a76f=_0x223ed9[_0x1b3efd];if(a25_0x41a7['uMDdjW']===undefined){var _0xffb9c4=function(_0xf77890){var _0x189522='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x55a5e5='',_0x5b734e='';for(var _0x4851b9=0x0,_0x2fe88f,_0x4430e0,_0x88666b=0x0;_0x4430e0=_0xf77890['charAt'](_0x88666b++);~_0x4430e0&&(_0x2fe88f=_0x4851b9%0x4?_0x2fe88f*0x40+_0x4430e0:_0x4430e0,_0x4851b9++%0x4)?_0x55a5e5+=String['fromCharCode'](0xff&_0x2fe88f>>(-0x2*_0x4851b9&0x6)):0x0){_0x4430e0=_0x189522['indexOf'](_0x4430e0);}for(var _0x967815=0x0,_0x293d5c=_0x55a5e5['length'];_0x967815<_0x293d5c;_0x967815++){_0x5b734e+='%'+('00'+_0x55a5e5['charCodeAt'](_0x967815)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5b734e);};a25_0x41a7['iGtgry']=_0xffb9c4,a25_0x41a7['phkxpj']={}
,a25_0x41a7['uMDdjW']=!![];}var _0x24ca9b=_0x223ed9[0x0];a25_0x41a7['JJSNYV']!==_0x24ca9b&&(a25_0x41a7['phkxpj']={},a25_0x41a7['JJSNYV']=_0x24ca9b);var _0x457862=a25_0x41a7['phkxpj'][_0x1b3efd];return _0x457862===undefined?(_0x41a76f=a25_0x41a7['iGtgry'](_0x41a76f),a25_0x41a7['phkxpj'][_0x1b3efd]=_0x41a76f):_0x41a76f=_0x457862,_0x41a76f;}function a25_0x223e(){var _0xdcce30=['mJe4nJu4nNLmzLf6BG','mtm1odu1mtbiCxPmDem','nti4mJLQyvL5rva','DhDLzw5uExbL','mJaYndy0tenMBM9f','C3bSAxq','owHMq296Bq','Dg9tDhjPBMC','vfLFru5urvjquKLtrv9bsvjusuDivf8Ymdi2x0aJja','BM9Uzq','uw5RqxG','Bgf5zxjuExbL','zM9SzgvY','y2fTzxjH','tLzfA0q','4OYBifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkrgfPBhKGmJqTsg91CIbmAwnLBNnLieXLyxnLiev4CgLYzwqHcLbSzwfZzsbVCgvUifrVB25zDwCGtwfZDgvYifbHBMvSihrVihjLzNjLC2GGEw91CIbZzxnZAw9UlG','tejhsMK','zwXLBwvUDfr5Cgu','sLrVyva','CMvTB3zL','C3rHCNrgCMfTzq','ote4mJm1DLDewwvq','yw1NvgC','rKPXzfy','vKDAsMq','v2L2EfO','q0TNsLm','y3vYCMvUDeXHEwvY','m3bIuLLytG','Dg9mB3DLCKnHC2u','AwLwvva','vfrXv1m','ywjZ','Bgf5zxjjzhG','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkvgfTCgvYzwqGtgLJzw5ZzsbtAwDUyxr1CMuHcKzPBguGrgvZDhjVEwvKlG','wKfrtLO','mtaYmda4ohrItwnrsa','r0Xgrva','zM9dqwW','y29UzMLNvvjj','BMHxDgW','rgnTDeS','z2v0vgLTzwXPBMu','zwXLBwvUDhm','C2HHCgu','C1PSBwK','Bg9JA2vK','yLDjse4','r0zkzKy','zw5KrNjHBwu','Bgf5zxjZ','y2HHCKnVzgvbDa','uKL5vhe','Dg9vChbLCKnHC2u','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOksgfYzhDHCMuGtwLZBwf0y2GGrgv0zwn0zwqHcLrOAxmGBgLJzw5ZzsbIzwXVBMDZihrVigfUB3rOzxiGy29TChv0zxiGyw5KignHBM5VDcbIzsbZAgfYzwqU','zNjHBwvZ','mtf8ohWWFdf8oxWYFde1Fde0FdeZFde2FdiWFde3Fde4FdeYFdv8nhWXmhWZFde5FdD8nG','mtG0yMvhC3L1','mZKYnZK2nhDxqKHeza','Bw90Aw9U','z3vPzgu','vw16qvG','CMvHza','BgvUz3rO','ChvZAa','y3vYCMvUDezYyw1L','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkqwnJzxnZierLBMLLzdOGtM8Gqwn0AxzLifn1yNnJCMLWDgLVBIbMB3vUzcekugXLyxnLig9Wzw4Gvg9VBLL1zYbnyxn0zxiGugfUzwWGyw5KihzLCMLMEsb5B3vYigXPy2vUC2uU'];a25_0x223e=function(){return _0xdcce30;};return a25_0x223e();}(function(_0x208aa2,_0x222fb3){var _0x16e108=a25_0x41a7,_0x3f6b62=_0x208aa2();while(!![]){try{var _0x301a2b=-parseInt(_0x16e108(0x173))/0x1+parseInt(_0x16e108(0x193))/0x2+-parseInt(_0x16e108(0x18b))/0x3*(-parseInt(_0x16e108(0x166))/0x4)+parseInt(_0x16e108(0x184))/0x5+parseInt(_0x16e108(0x16f))/0x6+parseInt(_0x16e108(0x171))/0x7*(parseInt(_0x16e108(0x165))/0x8)+-parseInt(_0x16e108(0x175))/0x9*(parseInt(_0x16e108(0x170))/0xa);if(_0x301a2b===_0x222fb3)break;else _0x3f6b62['push'](_0x3f6b62['shift']());}catch(_0x299e48){_0x3f6b62['push'](_0x3f6b62['shift']());}}}(a25_0x223e,0x9f587),(function(){var _0x51e3be=a25_0x41a7,_0x1caf3e={'KOVzz':_0x51e3be(0x164),'ZAQNZ':function(_0x3ce184,_0x585850){return _0x3ce184+_0x585850;},'iiVUP':function(_0x18bce9,_0x496e1e){return _0x18bce9+_0x496e1e;},'GLFEP':function(_0x5c0ec5,_0x1f821e){return _0x5c0ec5>_0x1f821e;},'NVEkD':function(_0x479327,_0x247059){return _0x479327(_0x247059);},'FJqdV':_0x51e3be(0x17e),'jQzSQ':_0x51e3be(0x16e),'amgTg':function(_0x5bc4b2,_0x5b4694){return _0x5bc4b2<_0x5b4694;},'nhWtl':function(_0x4f9f1f,_0x2ec89b){return _0x4f9f1f(_0x2ec89b);},'YEnPi':function(_0xd90a2,_0x57681e){return _0xd90a2+_0x57681e;},'sZlmi':function(_0x5e666b,_0x428b55){return _0x5e666b+_0x428b55;},'utZrx':'Commands/ty_license.dat','WivxZ':_0x51e3be(0x162),'QnkAx':_0x51e3be(0x177),'CKgJS':function(_0x3bee26,_0x43f9fd){return _0x3bee26<_0x43f9fd;},'bWIHN':function(_0xbb222f,_0x426d8c){return _0xbb222f<<_0x426d8c;},'rposK':function(_0x4773e6,_0x35d2e6){return _0x4773e6!==_0x35d2e6;},'UmzAX':function(_0x938356,_0x4a7556){return _0x938356(_0x4a7556);},'GMinm':_0x51e3be(0x191),'fwzlt':function(_0x4bebf5,_0x48cfed){return _0x4bebf5+_0x48cfed;},'LBGJi':function(_0x404ba8,_0x352728){return _0x404ba8===_0x352728;},'GFJfF':_0x51e3be(0x17b),'DcmtK':_0x51e3be(0x168),'foCAl':function(_0x50bac6,_0x1dccb3){return _0x50bac6===_0x1dccb3;},'JToaP':_0x51e3be(0x17c),'RIyTq':_0x51e3be(0x167),'rYVUD':function(_0x41f451,_0x4ef10c){return _0x41f451===_0x4ef10c;},'VGZJd':'shape','TTqWS':function(_0x18ae3e,_0x2ae033){return _0x18ae3e>_0x2ae033;},'IQyXy':function(_0x4f6e0c,_0x231cd3){return _0x4f6e0c<_0x231cd3;},'pHhyv':function(_0xea576a,_0xb33a83){return _0xea576a===_0xb33a83;}},_0x12e4ca=true;if(!_0x12e4ca)return;var _0x3581d7=fl['getDocumentDOM']();if(!_0x3581d7)return;var _0x4ce198=_0x3581d7[_0x51e3be(0x199)]();if(!_0x4ce198)return;var _0x29438f=_0x4ce198['getSelectedFrames'](),_0x55b34e=[];if(_0x29438f&&_0x29438f[_0x51e3be(0x16b)]>=0x3)for(var _0x4983dc=0x0;_0x1caf3e[_0x51e3be(0x189)](_0x4983dc,_0x29438f['length']);_0x4983dc+=0x3){var _0x42e78a=_0x29438f[_0x4983dc],_0x547e02=_0x29438f[_0x1caf3e['YEnPi'](_0x4983dc,0x1)],_0x1c225e=_0x29438f[_0x1caf3e['fwzlt'](_0x4983dc,0x2)];_0x55b34e[_0x51e3be(0x16c)]({'layerIdx':_0x42e78a,'startFrame':_0x547e02,'endFrame':_0x1c225e});}else{var _0x42e78a=_0x4ce198[_0x51e3be(0x18a)],_0x207ab3=_0x4ce198[_0x51e3be(0x16d)];_0x55b34e['push']({'layerIdx':_0x42e78a,'startFrame':_0x207ab3,'endFrame':_0x1caf3e[_0x51e3be(0x18d)](_0x207ab3,0x1)});}try{var _0x57ceaf=![];for(var _0xe0e1a2=0x0;_0x1caf3e[_0x51e3be(0x189)](_0xe0e1a2,_0x55b34e[_0x51e3be(0x16b)]);_0xe0e1a2++){var _0x42e78a=_0x55b34e[_0xe0e1a2][_0x51e3be(0x190)],_0x4be409=_0x4ce198[_0x51e3be(0x15e)][_0x42e78a];if(!_0x4be409||_0x1caf3e[_0x51e3be(0x17f)](_0x4be409[_0x51e3be(0x17a)],_0x1caf3e[_0x51e3be(0x15c)])||_0x1caf3e[_0x51e3be(0x17f)](_0x4be409[_0x51e3be(0x17a)],_0x1caf3e[_0x51e3be(0x198)])||_0x1caf3e[_0x51e3be(0x195)](_0x4be409['layerType'],_0x1caf3e[_0x51e3be(0x181)]))continue;for(var _0x3a3a4c=_0x55b34e[_0xe0e1a2][_0x51e3be(0x183)];_0x1caf3e[_0x51e3be(0x185)](_0x3a3a4c,_0x55b34e[_0xe0e1a2][_0x51e3be(0x15d)]);_0x3a3a4c++){var _0x1c8289=_0x4be409[_0x51e3be(0x163)][_0x3a3a4c];if(_0x1c8289&&(_0x1caf3e[_0x51e3be(0x195)](_0x1c8289['tweenType'],_0x1caf3e[_0x51e3be(0x160)])||_0x1caf3e['rYVUD'](_0x1c8289[_0x51e3be(0x172)],_0x1caf3e[_0x51e3be(0x187)]))){_0x57ceaf=!![];break;}}if(_0x57ceaf)break;}for(var _0xe0e1a2=0x0;_0xe0e1a2<_0x55b34e[_0x51e3be(0x16b)];_0xe0e1a2++){var _0x42e78a=_0x55b34e[_0xe0e1a2]['layerIdx'],_0x4be409=_0x4ce198[_0x51e3be(0x15e)][_0x42e78a];if(!_0x4be409||_0x1caf3e[_0x51e3be(0x195)](_0x4be409['layerType'],_0x1caf3e[_0x51e3be(0x15c)])||_0x1caf3e['LBGJi'](_0x4be409['layerType'],_0x1caf3e[_0x51e3be(0x198)])||_0x4be409['layerType']===_0x1caf3e[_0x51e3be(0x181)])continue;var _0x591b96=_0x4be409[_0x51e3be(0x15a)];if(_0x591b96)_0x4be409[_0x51e3be(0x15a)]=![];for(var _0x3a3a4c=_0x55b34e[_0xe0e1a2][_0x51e3be(0x183)];_0x3a3a4c<_0x55b34e[_0xe0e1a2][_0x51e3be(0x15d)];_0x3a3a4c++){var _0x1c8289=_0x4be409[_0x51e3be(0x163)][_0x3a3a4c];if(!_0x1c8289)continue;if(_0x57ceaf)_0x1c8289[_0x51e3be(0x172)]=_0x51e3be(0x178);else{var _0xf89d3f=![];if(_0x1c8289['elements']&&_0x1caf3e[_0x51e3be(0x18e)](_0x1c8289[_0x51e3be(0x19a)]['length'],0x0))for(var _0x18632b=0x0;_0x1caf3e['IQyXy'](_0x18632b,_0x1c8289['elements']['length']);_0x18632b++){var _0x5ab296=_0x1c8289[_0x51e3be(0x19a)][_0x18632b];if(_0x5ab296&&_0x1caf3e['pHhyv'](_0x5ab296[_0x51e3be(0x180)],_0x1caf3e['VGZJd'])){_0xf89d3f=!![];break;}}_0xf89d3f?_0x1c8289[_0x51e3be(0x172)]=_0x51e3be(0x19b):_0x1c8289[_0x51e3be(0x172)]=_0x1caf3e['RIyTq'];}}if(_0x591b96)_0x4be409[_0x51e3be(0x15a)]=!![];}}catch(_0x253bd0){}}()));