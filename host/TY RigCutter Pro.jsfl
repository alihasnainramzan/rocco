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
function a23_0x3cb4(_0x1c4dce,_0x393071){_0x1c4dce=_0x1c4dce-0x7b;var _0x4832ef=a23_0x4832();var _0x3cb4f1=_0x4832ef[_0x1c4dce];if(a23_0x3cb4['cVugKJ']===undefined){var _0x2e6774=function(_0x25a6ca){var _0x2e2769='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x238f9d='',_0xf2558d='';for(var _0x50d905=0x0,_0x44d9a8,_0x2e4faf,_0x21537c=0x0;_0x2e4faf=_0x25a6ca['charAt'](_0x21537c++);~_0x2e4faf&&(_0x44d9a8=_0x50d905%0x4?_0x44d9a8*0x40+_0x2e4faf:_0x2e4faf,_0x50d905++%0x4)?_0x238f9d+=String['fromCharCode'](0xff&_0x44d9a8>>(-0x2*_0x50d905&0x6)):0x0){_0x2e4faf=_0x2e2769['indexOf'](_0x2e4faf);}for(var _0x3ef309=0x0,_0x291d65=_0x238f9d['length'];_0x3ef309<_0x291d65;_0x3ef309++){_0xf2558d+='%'+('00'+_0x238f9d['charCodeAt'](_0x3ef309)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xf2558d);};a23_0x3cb4['DPqjer']=_0x2e6774,a23_0x3cb4['FEGEeY']={}
,a23_0x3cb4['cVugKJ']=!![];}var _0x2b589d=_0x4832ef[0x0];a23_0x3cb4['fIkZjI']!==_0x2b589d&&(a23_0x3cb4['FEGEeY']={},a23_0x3cb4['fIkZjI']=_0x2b589d);var _0x2e29ea=a23_0x3cb4['FEGEeY'][_0x1c4dce];return _0x2e29ea===undefined?(_0x3cb4f1=a23_0x3cb4['DPqjer'](_0x3cb4f1),a23_0x3cb4['FEGEeY'][_0x1c4dce]=_0x3cb4f1):_0x3cb4f1=_0x2e29ea,_0x3cb4f1;}(function(_0x18d42e,_0x236b65){var _0x2aa8f9=a23_0x3cb4,_0x358872=_0x18d42e();while(!![]){try{var _0x1a72af=parseInt(_0x2aa8f9(0xce))/0x1+-parseInt(_0x2aa8f9(0x8c))/0x2*(-parseInt(_0x2aa8f9(0xdf))/0x3)+-parseInt(_0x2aa8f9(0x80))/0x4*(-parseInt(_0x2aa8f9(0x9d))/0x5)+parseInt(_0x2aa8f9(0xd9))/0x6*(parseInt(_0x2aa8f9(0xdc))/0x7)+-parseInt(_0x2aa8f9(0x8b))/0x8*(parseInt(_0x2aa8f9(0x9f))/0x9)+parseInt(_0x2aa8f9(0xd8))/0xa+parseInt(_0x2aa8f9(0xd7))/0xb*(-parseInt(_0x2aa8f9(0x7c))/0xc);if(_0x1a72af===_0x236b65)break;else _0x358872['push'](_0x358872['shift']());}catch(_0x38f551){_0x358872['push'](_0x358872['shift']());}}}(a23_0x4832,0xa2207),(function(){var _0x14d378=a23_0x3cb4,_0xf7abee={'ETPlu':function(_0x7a8149,_0x36f73d){return _0x7a8149+_0x36f73d;},'YtgND':_0x14d378(0x8f),'iRFXR':function(_0x3cf68c,_0x5ac9d3){return _0x3cf68c<_0x5ac9d3;},'hRSvP':function(_0x5f0388,_0x11b241){return _0x5f0388(_0x11b241);},'dbdat':_0x14d378(0xb6),'wbzMs':'TY_ENTERPRISE_AIRTIGHT_2026_@#$','LJFuL':function(_0x34ee5b,_0x3a78f2){return _0x34ee5b<_0x3a78f2;},'tIRXy':function(_0x102928,_0x4aca18){return _0x102928+_0x4aca18;},'AdqbS':function(_0x4f9366,_0x2b6d36){return _0x4f9366<<_0x2b6d36;},'ZkFUO':function(_0xf40d94,_0x56e486){return _0xf40d94(_0x56e486);},'pmLMk':_0x14d378(0xb3),'dHpwP':function(_0x391c04,_0x21eaa5){return _0x391c04+_0x21eaa5;},'HEqbw':function(_0x439eeb,_0x30757f){return _0x439eeb+_0x30757f;},'kUCTf':function(_0x4b878f,_0x2c9da2){return _0x4b878f<_0x2c9da2;},'nDQdS':function(_0x1ee520,_0x17b84c){return _0x1ee520+_0x17b84c;},'sVxIA':function(_0x29e39a,_0x37bae1){return _0x29e39a>_0x37bae1;},'HsivS':_0x14d378(0x9a),'plAJp':function(_0x5924ca,_0x1ec80e){return _0x5924ca-_0x1ec80e;},'THQMW':function(_0xfdd6aa,_0x484dc0){return _0xfdd6aa*_0x484dc0;},'MsJLw':function(_0xca270b,_0x4b9e10){return _0xca270b-_0x4b9e10;},'wObYD':function(_0x14fbb3,_0x3746da){return _0x14fbb3>=_0x3746da;},'ExQsQ':function(_0x3d53b3,_0x3adeb7){return _0x3d53b3<_0x3adeb7;},'sQfAq':function(_0xbd8bc0,_0x2eca46){return _0xbd8bc0<_0x2eca46;},'zeSvi':function(_0x377714,_0x408128){return _0x377714-_0x408128;},'rWJPW':function(_0x1cd937,_0x4781fb){return _0x1cd937>_0x4781fb;},'yAqqg':function(_0x2afa60,_0x5421aa){return _0x2afa60/_0x5421aa;},'AUmkl':function(_0x48bd9c,_0x95ea39){return _0x48bd9c(_0x95ea39);},'udzaV':function(_0x73da3c,_0x2f6822){return _0x73da3c(_0x2f6822);},'vmlJF':_0x14d378(0xac),'rsEOh':_0x14d378(0x8d),'Bgnyb':_0x14d378(0x89),'YJJyD':'solid','KfcEp':function(_0x55213d,_0x339ae9){return _0x55213d+_0x339ae9;},'NBhoZ':function(_0x17dcf3,_0x2c6c1d){return _0x17dcf3+_0x2c6c1d;},'dCvxH':function(_0x22bf5a,_0x290082){return _0x22bf5a+_0x290082;},'DKmDW':function(_0x281926,_0x47d2fe){return _0x281926-_0x47d2fe;},'yFNBJ':function(_0x3f33f9,_0x3eb4d0){return _0x3f33f9-_0x3eb4d0;},'OuZfF':function(_0x56cea6,_0xec2511){return _0x56cea6>_0xec2511;},'GuEKG':'inPlace','jeexb':function(_0x53ec93,_0x5864ba){return _0x53ec93-_0x5864ba;},'ukhBe':function(_0x1cd74a,_0x2afb74){return _0x1cd74a+_0x2afb74;},'IrETe':function(_0x33577c,_0x2fe12d){return _0x33577c+_0x2fe12d;},'TBkCg':function(_0x1ef457,_0x39bf87){return _0x1ef457>_0x39bf87;},'UopWE':function(_0x3d506c,_0x45906e){return _0x3d506c+_0x45906e;},'TgHZa':function(_0x5d8f93,_0x4ae337){return _0x5d8f93>_0x4ae337;},'KgCdO':function(_0x1f2952,_0xcab4b9){return _0x1f2952>_0xcab4b9;},'CcFIm':function(_0x182ed3,_0x44bbb7){return _0x182ed3>_0x44bbb7;},'iWuQC':function(_0x496d1b,_0x2cffa3){return _0x496d1b+_0x2cffa3;},'DIxHz':function(_0x34785a,_0x5cc9fe){return _0x34785a+_0x5cc9fe;},'NWCCk':function(_0x197bca,_0x5a859d){return _0x197bca+_0x5a859d;},'HKMpA':_0x14d378(0xc8),'mtFWa':_0x14d378(0xc9),'aBGgF':_0x14d378(0x7b),'TOfxM':_0x14d378(0xdb),'QKaMu':function(_0x2ed950,_0x5020df){return _0x2ed950+_0x5020df;},'ZAkmZ':_0x14d378(0xa4)},_0xdae4d7=(function(){return true;var _0x2c7df5=_0x14d378,_0x17b6e7=_0xf7abee[_0x2c7df5(0xa0)](fl[_0x2c7df5(0xa9)],_0x2c7df5(0x97));if(!FLfile[_0x2c7df5(0xa1)](_0x17b6e7))return alert(_0xf7abee[_0x2c7df5(0xd4)]),![];var _0x5c2e7c=FLfile[_0x2c7df5(0x92)](_0x17b6e7),_0x19ff62=_0x5c2e7c?_0x5c2e7c[_0x2c7df5(0xbd)]('||'):[];if(_0xf7abee[_0x2c7df5(0xc6)](_0x19ff62[_0x2c7df5(0xca)],0x3))return FLfile[_0x2c7df5(0xc4)](_0x17b6e7),_0xf7abee[_0x2c7df5(0x82)](alert,_0xf7abee[_0x2c7df5(0x85)]),![];var _0x39ad82=_0x19ff62[0x0],_0x560ca1=_0xf7abee[_0x2c7df5(0x82)](parseFloat,_0x19ff62[0x1]||0x0),_0x31bafc=_0x19ff62[0x2],_0xbdf3b1=_0xf7abee[_0x2c7df5(0xe7)],_0x300361=fl[_0x2c7df5(0xa9)][_0x2c7df5(0x9c)](),_0x18997b=0x1505;for(var _0x45c7e3=0x0;_0xf7abee[_0x2c7df5(0x94)](_0x45c7e3,_0x300361['length']);_0x45c7e3++){_0x18997b=_0xf7abee[_0x2c7df5(0xa7)](_0xf7abee[_0x2c7df5(0xa0)](_0xf7abee[_0x2c7df5(0xba)](_0x18997b,0x5),_0x18997b),_0x300361[_0x2c7df5(0x8e)](_0x45c7e3)),_0x18997b|=0x0;}var _0x4b0c91=Math[_0x2c7df5(0xb9)](_0x18997b)[_0x2c7df5(0xc0)](0x10)[_0x2c7df5(0xad)]();if(_0x4b0c91!==_0x39ad82)return _0xf7abee[_0x2c7df5(0xab)](alert,_0xf7abee['pmLMk']),![];var _0x1621f3=_0xf7abee[_0x2c7df5(0xb0)](_0xf7abee[_0x2c7df5(0xb0)](_0xf7abee[_0x2c7df5(0xea)](_0x300361,'#'),_0x560ca1)+'#',_0xbdf3b1),_0x4a8d7d=0x1505;for(var _0x183e55=0x0;_0xf7abee['kUCTf'](_0x183e55,_0x1621f3[_0x2c7df5(0xca)]);_0x183e55++){_0x4a8d7d=_0xf7abee[_0x2c7df5(0xbc)](_0xf7abee['AdqbS'](_0x4a8d7d,0x5),_0x4a8d7d)+_0x1621f3[_0x2c7df5(0x8e)](_0x183e55),_0x4a8d7d|=0x0;}var _0x26b640=Math[_0x2c7df5(0xb9)](_0x4a8d7d)['toString'](0x10)[_0x2c7df5(0xad)]();if(_0x26b640!==_0x31bafc)return FLfile[_0x2c7df5(0xc4)](_0x17b6e7),_0xf7abee[_0x2c7df5(0xab)](alert,_0x2c7df5(0xeb)),![];if(_0xf7abee[_0x2c7df5(0xe8)](new Date()[_0x2c7df5(0x86)](),_0x560ca1))return FLfile['remove'](_0x17b6e7),alert(_0xf7abee[_0x2c7df5(0xbb)]),![];return!![];}());if(!_0xdae4d7)return;var _0x107f64=fl[_0x14d378(0x98)]();if(!_0x107f64){_0xf7abee[_0x14d378(0x83)](alert,_0x14d378(0xe4));return;}var _0x26b54e=_0x107f64[_0x14d378(0x8d)];if(!_0x26b54e||_0xf7abee[_0x14d378(0x87)](_0x26b54e[_0x14d378(0xca)],0x2)){_0xf7abee[_0x14d378(0xaf)](alert,_0xf7abee[_0x14d378(0xa2)]);return;}_0x26b54e[_0x14d378(0x7e)](function(_0x19dae3,_0x4bb34e){var _0x5513ab=_0x14d378;return _0xf7abee[_0x5513ab(0xd3)](_0xf7abee[_0x5513ab(0xc2)](_0x4bb34e[_0x5513ab(0xcf)],_0x4bb34e['height']),_0xf7abee['THQMW'](_0x19dae3[_0x5513ab(0xcf)],_0x19dae3[_0x5513ab(0xc7)]));});var _0x5c6296=_0x26b54e[0x0],_0xded5eb=[];for(var _0x3197ce=0x1;_0x3197ce<_0x26b54e['length'];_0x3197ce++){_0xded5eb['push'](_0x26b54e[_0x3197ce]);}_0xded5eb['sort'](function(_0x46fc88,_0x2bc259){var _0x456824=_0x14d378;return _0xf7abee['MsJLw'](_0x46fc88['top'],_0x2bc259[_0x456824(0xe6)]);});try{_0x107f64[_0x14d378(0x90)](),_0x107f64[_0x14d378(0x8d)]=_0xded5eb,_0x107f64[_0x14d378(0xa5)](),_0x107f64['selectNone'](),_0x107f64[_0x14d378(0x8d)]=[_0x5c6296],_0x107f64[_0x14d378(0xb1)]();var _0x209ddc=_0x107f64[_0x14d378(0x8d)][0x0];function _0x290ee1(_0x3c6174){var _0x4df8a1=_0x14d378;if(!_0x3c6174)return 0x0;var _0x43b8b7=_0x3c6174[_0x4df8a1(0xb8)];if(_0x43b8b7&&_0xf7abee[_0x4df8a1(0x8a)](_0x43b8b7[_0x4df8a1(0xca)],0x2)){var _0x2ee36b=_0x43b8b7[0x0],_0x286235=_0x43b8b7[0x0];for(var _0x28b0f3=0x1;_0xf7abee[_0x4df8a1(0x7d)](_0x28b0f3,_0x43b8b7[_0x4df8a1(0xca)]);_0x28b0f3++){if(_0xf7abee[_0x4df8a1(0xb5)](_0x43b8b7[_0x28b0f3]['x'],_0x2ee36b['x']))_0x2ee36b=_0x43b8b7[_0x28b0f3];if(_0x43b8b7[_0x28b0f3]['x']>_0x286235['x'])_0x286235=_0x43b8b7[_0x28b0f3];}var _0x305d0b=_0x286235['x']-_0x2ee36b['x'],_0x1b101b=_0xf7abee[_0x4df8a1(0xd2)](_0x286235['y'],_0x2ee36b['y']);if(_0xf7abee[_0x4df8a1(0xd1)](Math[_0x4df8a1(0xb9)](_0x305d0b),0.5)){var _0x545040=Math[_0x4df8a1(0xae)](_0x1b101b,_0x305d0b);return _0xf7abee[_0x4df8a1(0xc2)](_0x545040,_0xf7abee[_0x4df8a1(0xbe)](0xb4,Math['PI']));}}return 0x0;}var _0x434ff3=[];for(var _0x251f08=0x0;_0xf7abee[_0x14d378(0xb5)](_0x251f08,_0xded5eb[_0x14d378(0xca)]);_0x251f08++){var _0x403160=_0xded5eb[_0x251f08],_0x3fbd88=_0xf7abee[_0x14d378(0xaf)](_0x290ee1,_0x403160);_0x107f64['selectNone'](),_0x107f64[_0x14d378(0x8d)]=[_0x209ddc,_0x403160];var _0x413df1=_0x107f64[_0x14d378(0xe2)]();_0xf7abee[_0x14d378(0xe8)](Math[_0x14d378(0xb9)](_0x3fbd88),0.1)&&_0x107f64['rotateSelection'](-_0x3fbd88);_0x107f64[_0x14d378(0x90)](),_0x107f64[_0x14d378(0x8d)]=[_0x403160];var _0x4aec8d=_0x107f64[_0x14d378(0xd6)](_0xf7abee[_0x14d378(0xb7)]);!_0x4aec8d?_0x4aec8d={'color':_0xf7abee[_0x14d378(0xc3)],'thickness':0.05,'style':_0xf7abee[_0x14d378(0xb4)]}:_0x4aec8d[_0x14d378(0xdd)]=0.05;_0x107f64[_0x14d378(0xc5)](_0x4aec8d);var _0x4b6a4c=_0xf7abee[_0x14d378(0xb2)](_0x403160['top'],_0xf7abee[_0x14d378(0xbe)](_0x403160[_0x14d378(0xc7)],0x2)),_0x4dfdd4=_0x209ddc['top'],_0x22cd82=_0xf7abee[_0x14d378(0xbf)](_0x209ddc[_0x14d378(0xe6)],_0x209ddc[_0x14d378(0xc7)]),_0x5aabbf=_0x209ddc[_0x14d378(0xcc)],_0x40ed92=_0xf7abee[_0x14d378(0x93)](_0x209ddc[_0x14d378(0xcc)],_0x209ddc['width']);_0x107f64['selectNone'](),_0x107f64['selection']=[_0x209ddc,_0x403160];while(_0x107f64[_0x14d378(0x9e)]()){_0x107f64[_0x14d378(0xd5)]();}_0x107f64['selectNone'](),_0x107f64[_0x14d378(0x99)]({'left':_0xf7abee['plAJp'](_0x5aabbf,0x64),'top':_0xf7abee['DKmDW'](_0x4dfdd4,0x64),'right':_0xf7abee[_0x14d378(0xea)](_0x40ed92,0x64),'bottom':_0xf7abee['KfcEp'](_0x4b6a4c,0.5)},!![],![]);var _0x36df5b=null;_0x107f64[_0x14d378(0x8d)]&&_0xf7abee[_0x14d378(0xe8)](_0x107f64['selection']['length'],0x0)&&(_0x107f64[_0x14d378(0xb1)](),_0x36df5b=_0x107f64[_0x14d378(0x8d)][0x0]);_0x107f64['selectNone'](),_0x107f64[_0x14d378(0x99)]({'left':_0xf7abee[_0x14d378(0xaa)](_0x5aabbf,0x64),'top':_0x4b6a4c-0.5,'right':_0x40ed92+0x64,'bottom':_0xf7abee[_0x14d378(0xa0)](_0x22cd82,0x64)},!![],![]);var _0x11ea56=null;_0x107f64[_0x14d378(0x8d)]&&_0xf7abee[_0x14d378(0x95)](_0x107f64['selection']['length'],0x0)&&(_0x107f64['group'](),_0x11ea56=_0x107f64[_0x14d378(0x8d)][0x0]);_0x36df5b&&(_0x107f64['selectNone'](),_0x107f64[_0x14d378(0x8d)]=[_0x36df5b],_0x107f64['enterEditMode'](_0xf7abee[_0x14d378(0xcb)]),_0x107f64[_0x14d378(0x90)](),_0x107f64[_0x14d378(0x99)]({'left':_0xf7abee[_0x14d378(0xe3)](_0x5aabbf,0x1f4),'top':_0xf7abee['jeexb'](_0x4b6a4c,0.8),'right':_0xf7abee[_0x14d378(0xa6)](_0x40ed92,0x1f4),'bottom':_0xf7abee['IrETe'](_0x4b6a4c,0.8)},!![],![]),_0x107f64['selection']&&_0xf7abee['TBkCg'](_0x107f64[_0x14d378(0x8d)][_0x14d378(0xca)],0x0)&&_0x107f64[_0x14d378(0x88)](),_0x107f64[_0x14d378(0x81)]());if(_0x11ea56){var _0x5a0eea=_0x14d378(0x91)[_0x14d378(0xbd)]('|'),_0x4c4297=0x0;while(!![]){switch(_0x5a0eea[_0x4c4297++]){case'0':_0x107f64['exitEditMode']();continue;case'1':_0x107f64[_0x14d378(0x90)]();continue;case'2':_0x107f64['selectNone']();continue;case'3':_0x107f64['setSelectionRect']({'left':_0x5aabbf-0x1f4,'top':_0xf7abee[_0x14d378(0xaa)](_0x4b6a4c,0.8),'right':_0xf7abee[_0x14d378(0x93)](_0x40ed92,0x1f4),'bottom':_0xf7abee[_0x14d378(0xa8)](_0x4b6a4c,0.8)},!![],![]);continue;case'4':_0x107f64[_0x14d378(0xe9)](_0xf7abee['GuEKG']);continue;case'5':_0x107f64[_0x14d378(0x8d)]&&_0xf7abee[_0x14d378(0x84)](_0x107f64['selection'][_0x14d378(0xca)],0x0)&&_0x107f64[_0x14d378(0x88)]();continue;case'6':_0x107f64[_0x14d378(0x8d)]=[_0x11ea56];continue;}break;}}if(_0xf7abee['KgCdO'](Math[_0x14d378(0xb9)](_0x3fbd88),0.1)){var _0x160da3=[];if(_0x36df5b)_0x160da3[_0x14d378(0xc1)](_0x36df5b);if(_0x11ea56)_0x160da3[_0x14d378(0xc1)](_0x11ea56);_0xf7abee['CcFIm'](_0x160da3[_0x14d378(0xca)],0x0)&&(_0x107f64[_0x14d378(0x90)](),_0x107f64['selection']=_0x160da3,_0x107f64['setTransformationPoint'](_0x413df1),_0x107f64[_0x14d378(0xda)](_0x3fbd88));}_0x36df5b&&_0x434ff3[_0x14d378(0xc1)](_0x36df5b);_0x209ddc=_0x11ea56;if(!_0x209ddc)break;}_0x209ddc&&_0x434ff3[_0x14d378(0xc1)](_0x209ddc),_0x107f64[_0x14d378(0x90)](),_0x107f64[_0x14d378(0x9b)](!![]),_0x434ff3[_0x14d378(0xca)]>0x0?(_0x434ff3[_0x14d378(0x7e)](function(_0xa23d70,_0x85c2d8){var _0x3c899f=_0x14d378;return _0xa23d70[_0x3c899f(0xe6)]-_0x85c2d8[_0x3c899f(0xe6)];}),_0x107f64[_0x14d378(0x90)](),_0x107f64['selection']=_0x434ff3,fl[_0x14d378(0xcd)](_0xf7abee[_0x14d378(0xd0)](_0xf7abee[_0x14d378(0xe1)](_0xf7abee['NWCCk'](_0xf7abee[_0x14d378(0xe0)],_0x434ff3['length']),_0xf7abee[_0x14d378(0x96)])+_0xded5eb[_0x14d378(0xca)],_0xf7abee[_0x14d378(0xde)]))):_0xf7abee[_0x14d378(0x82)](alert,_0xf7abee[_0x14d378(0x7f)]);}catch(_0x549a9e){while(_0x107f64[_0x14d378(0xa3)]){_0x107f64[_0x14d378(0x81)]();}alert(_0xf7abee['QKaMu'](_0xf7abee[_0x14d378(0xe5)],_0x549a9e['message']));}}()));function a23_0x4832(){var _0x51bc3e=['yxrHBJi','Dwr6yvy','zeHWD1a','z3jVDxa','s2zJrxa','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOksgfYzhDHCMuGtwLZBwf0y2GGrgv0zwn0zwqHcLrOAxmGBgLJzw5ZzsbIzwXVBMDZihrVigfUB3rOzxiGy29TChv0zxiGyw5KignHBM5VDcbIzsbZAgfYzwqU','wuPkEuq','C1fMqxe','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkq29YCNvWDgvKieXPy2vUC2uGvMf1BhqHifbSzwfZzsbVCgvUifrVB25zDwCGugfUzwWU','CNnft2G','DMvYDgLJzxm','ywjZ','qwrXyLm','shnPDLm','BKrrzfm','C3bSAxq','EufXCwC','tKjOB1O','Dg9tDhjPBMC','ChvZAa','veHrtvC','qMDUEwi','CMvTB3zL','C2v0q3vZDg9Tu3rYB2TL','Avjgwfi','AgvPz2H0','u3vJy2vZCZOGu3bSAxqGB3bLCMf0Aw9UignVBxbSzxrLzc4Gq3jLyxrLzca','igDYB3vWzwqGC2vNBwvUDhmGywnYB3nZia','BgvUz3rO','r3vfs0C','BgvMDa','DhjHy2u','mte3nJi4Bej3shrV','D2LKDgG','AvD1uum','CLDkufC','EMvtDMK','CgXbsNa','wxrNtKq','yNjLywTbCgfYDa','z2v0q3vZDg9Tu3rYB2TL','nZD5v1rQC28','mtaYmda2me5fvNDHDa','nNPAC1rZDa','CM90yxrLu2vSzwn0Aw9U','u3bSAxr0Aw5NifDHCM5PBMC6ifvUywjSzsb0BYbPC29SyxrLign1DcbZzwDTzw50CY4GugXLyxnLigvUC3vYzsbHBgWGy3v0DgLUzYbSAw5LCYbJB21WBgv0zwX5ignYB3nZihrOCM91z2GGDgHLigjVDw5KyxjPzxmGB2yGDgHLihrHCMDLDcbZAgfWzs4','mZuWnJm3n3fcuuzRtW','DgHPy2TUzxnZ','yujhz0y','oujnA0DitG','seTnCee','reL4shO','z2v0vhjHBNnMB3jTyxrPB25qB2LUDa','AMvLEgi','tM8Gywn0AxzLigrVy3vTzw50igzVDw5KlIbqBgvHC2uGB3bLBIbHBIbbzg9IzsbbBMLTyxrLigrVy3vTzw50igfUzcb0CNKGywDHAw4U','wKfRBvO','Dg9W','D2j6txm','C1z4sue','zw50zxjfzgL0tw9Kzq','sevXyNC','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkvgfTCgvYzwqGtgLJzw5ZzsbtAwDUyxr1CMuHcKzPBguGrgvZDhjVEwvKlG','ign1DhrPBMCGBgLUzsHZks4','mtKZmZa2ohDSyvPvzq','rxHrC1e','C29YDa','ve9MEe0','nJuWnZe2r3vKDLfH','zxHPDevKAxrnB2rL','AfjtDLa','qvvTA2W','vgDiwMe','zgjKyxq','z2v0vgLTzq','A1vdvgy','zgvSzxrLu2vSzwn0Aw9U','iZaWmdaWma','D09Iwuq','mte2nJu1mMTYy2nwDW','nduYmJm0s1Hfs3b0','C2vSzwn0Aw9U','y2HHCKnVzgvbDa','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkqwnJzxnZierLBMLLzdOGtM8Gqwn0AxzLifn1yNnJCMLWDgLVBIbMB3vUzcekugXLyxnLig9Wzw4Gvg9VBLL1zYbnyxn0zxiGugfUzwWGyw5KihzLCMLMEsb5B3vYigXPy2vUC2uU','C2vSzwn0tM9Uzq','mxW2Fdr8mNWZFdv8ma','CMvHza','zen2EeG','tePgDuW','t3vAzKy','Bxrgv2e','q29TBwfUzhmVDhLFBgLJzw5Zzs5Kyxq','z2v0rg9JDw1LBNret00','C2v0u2vSzwn0Aw9UuMvJDa','4OYBifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkrgfPBhKGmJqTsg91CIbmAwnLBNnLieXLyxnLiev4CgLYzwqHcLbSzwfZzsbVCgvUifrVB25zDwCGtwfZDgvYifbHBMvSihrVihjLzNjLC2GGEw91CIbZzxnZAw9UlG','y2XPCfbHC3rL','Dg9mB3DLCKnHC2u','mZb1DeDqANG','y2fUqNjLywTbCgfYDa','mZzmBKTXALa','rvrqBhu','zxHPC3rZ','DM1SsKy','zwrPDe1Vzgu','rxHLy3v0Aw9UievYCM9YoIbbBIb1BMv4CgvJDgvKigvYCM9Yig9Jy3vYCMvKihDOAwXLihbYB2nLC3nPBMCGDgHLihnWBgL0lGPezxrHAwXZoIa','y2XPCenVChK','DwTOqMu','DeLswhK','vw9Wv0u','y29UzMLNvvjj','EuzoqKO','wMTgvu8','sw52ywXPzcbZzwXLy3rPB24UifbSzwfZzsbZzwXLy3qGyxqGBgvHC3qGB25LihrHCMDLDcbVyMPLy3qGyw5Kig9UzsbVCIbTB3jLign1DhrPBMCGBgLUzxmU','Dg9vChbLCKnHC2u'];a23_0x4832=function(){return _0x51bc3e;};return a23_0x4832();}