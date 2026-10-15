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
function a0_0x185b(_0x211404,_0x5c1809){_0x211404=_0x211404-0xb7;var _0x5c8025=a0_0x5c80();var _0x185b4d=_0x5c8025[_0x211404];if(a0_0x185b['HrzCpa']===undefined){var _0x1abd43=function(_0x196ced){var _0x4f2478='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x62e092='',_0x4279d6='';for(var _0xdd89c3=0x0,_0x10787f,_0x13da2e,_0x5f553e=0x0;_0x13da2e=_0x196ced['charAt'](_0x5f553e++);~_0x13da2e&&(_0x10787f=_0xdd89c3%0x4?_0x10787f*0x40+_0x13da2e:_0x13da2e,_0xdd89c3++%0x4)?_0x62e092+=String['fromCharCode'](0xff&_0x10787f>>(-0x2*_0xdd89c3&0x6)):0x0){_0x13da2e=_0x4f2478['indexOf'](_0x13da2e);}for(var _0x165e3e=0x0,_0x156c7b=_0x62e092['length'];_0x165e3e<_0x156c7b;_0x165e3e++){_0x4279d6+='%'+('00'+_0x62e092['charCodeAt'](_0x165e3e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4279d6);};a0_0x185b['JUKkHS']=_0x1abd43,a0_0x185b['tuabOx']={}
,a0_0x185b['HrzCpa']=!![];}var _0x3ff83a=_0x5c8025[0x0];a0_0x185b['GrDUra']!==_0x3ff83a&&(a0_0x185b['tuabOx']={},a0_0x185b['GrDUra']=_0x3ff83a);var _0x56fbaf=a0_0x185b['tuabOx'][_0x211404];return _0x56fbaf===undefined?(_0x185b4d=a0_0x185b['JUKkHS'](_0x185b4d),a0_0x185b['tuabOx'][_0x211404]=_0x185b4d):_0x185b4d=_0x56fbaf,_0x185b4d;}function a0_0x5c80(){var _0x964dad=['uMnpEe4','8j+NUsbfyxnLifjLBw92zwqGkfjLC2v0ihrVidaP','4OYBifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkrgfPBhKGmJqTsg91CIbmAwnLBNnLieXLyxnLiev4CgLYzwqHcLbSzwfZzsbVCgvUifrVB25zDwCGtwfZDgvYifbHBMvSihrVihjLzNjLC2GGEw91CIbZzxnZAw9UlG','z2v0vgLTzwXPBMu','Dhj1zq','z2v0vgLTzq','q29TBwfUzhmVDhLFBgLJzw5Zzs5Kyxq','B1zLqNy','twXLD1G','tKvwq2S','Eg1SugfUzwXgCM9Tu3rYAw5N','zMXVB3i','icbdt01qtevuruq6ia','igXHEwvYkhmPiq','igXHEwvYkhmPoIiGC3r5Bgu9iM1HCMDPBI1IB3r0B206nhb4oYiGlZ4k','z2v0u2vSzwn0zwrgCMfTzxm','z3vPzgu','mtb5B21xvxi','Bgf5zxjZ','pc9KAwfSB2C+','zKPZq3a','vfLFru5urvjquKLtrv9bsvjusuDivf8Ymdi2x0aJja','z2DAvKm','icaGidXSywjLBcb2ywX1zt0IicdIGkiGugfYDcaYicHnAwqGDg8Grw5KktOGkZeWmcaOrwfZzs1pDxqPiIbZDhLSzt0IzM9UDc13zwLNAhq6yM9SzdSGBwfYz2LUlwjVDhrVBtO2ChG7iIaVpGO','BM9Uzq','wvfZAK8','AfjOzLG','mhWXn3WXnhWYmhW0FdH8n3WXmhWXoxWXohWXnxWXnNW5Fdj8nNWXmNWZFdf8mtn8nxWXmq','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkvgfTCgvYzwqGtgLJzw5ZzsbtAwDUyxr1CMuHcKzPBguGrgvZDhjVEwvKlG','icaGidXSywjLBcb2ywX1zt0IqxbWBgLLzcbZDwnJzxnZzNvSBhKGywnYB3nZia','y29UzMLNvvjj','wuzpq2q','quH1v0G','DxnLq3vZDg9TrwfZzq','C2v0u2vSzwn0zwrgCMfTzxm','qxn4q1G','tur3B00','mtCYmKD6BNzdEG','EgrlvNa','uhzYqvO','Bg9JA2vK','zNvUy3rPB24','qxbWBgLLzcbfyxnLihrVia','mtaYmZq0nfPyzvHmuG','B3v0Chv0ugfUzwW','A2fVwMy','icdIMQeGve9ptLLvrYbtvfvesu8GlsaXlunmsunlifnnqvjuievbu0uGve9hr0XficaG','uNnOrhC','ve9ptLLvrYbot1rjq0u6cLbSzwfZzsbZzwXLy3qGEw91CIbuD2vLBMvKigzYyw1LCYbHy3jVC3mGEw91CIbSyxLLCNmGkguUzY4GrNjHBwuGmsb0BYaYmcKU','DKviwLy','BNnxANC','mJf5AvzwqMO','ue1muxG','s25euNC','tKn2v0m','y2HHCKnVzgvbDa','Bvnot0q','CMvHza','q3nvu2u','icaGidXSywjLBcb2ywX1zt0I','iIbZDhLSzt0IzM9UDc13zwLNAhq6yM9SzdSGy29SB3i6iZe2ytm0ytSGBwfYz2LUlwjVDhrVBtO2ChG7iIaVpGO','ohWXFdb8n3WZFdv8mNW0Fdy','Dg9VBNL1z1n1ChbYzxnZrwfZzvbVChvW','mJe3ntnrq0Dqrva','BvPRqM4','DhDLzw5fyxnPBMC','ve9ptLLvrYbtq1jjufqGrvjst1i6cG','Cu9IteW','q0PWy0q','icdWN6E5ifTmyxLLCIaN','DerWu2O','mJa1mZG0BwLRuhvf','C1nzsK0','zunQyxe','zNjHBwvZ','pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt0','v3viA00','sKDts0q','uMvTB3zLzcbfyxnLigzYB20G','t2D2suK','CMvTB3zL','DxnLihn0CMLJDa','v3L6uM8','DhjHy2u','cJ09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09','ntj0C0jnv00','wef3wM0','veHetva','DvPZqu4','4PQHifnTyxj0ievHC2uGqxbWBgLLzce','q0Dutw4','pgrPywXVzYb0AxrSzt0Ive9ptLLvrYbtvfvesu8Gu1vdq0vtuYiGyNv0Dg9UCZ0IywnJzxb0iJ4k','rLfzsxC','vej3C3e','uK1Ls1i','wvjRywG','DvfZueC','nda1nZmXq1zmvuH3','Dff4yNy','icdWN5shifTqCMvMzxjLBMnLifnHDMvKxtOGrMfZDcbtAwXLBNqGtw9KzsbHy3rPDMf0zwqH','zg9UDfnOB3Dbz2fPBG','qMTnsuq','Bgf5zxjuExbL','Dg9vChbLCKnHC2u','Bhjevg8','C3bSAxq','CNjIugG','rfzuz2e','ve9ptLLvrYbot1rjq0u6cK5VigrVy3vTzw50igLZign1CNjLBNrSEsbVCgvUigLUiefKB2jLiefUAw1HDguU','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkqwnJzxnZierLBMLLzdOGtM8Gqwn0AxzLifn1yNnJCMLWDgLVBIbMB3vUzcekugXLyxnLig9Wzw4Gvg9VBLL1zYbnyxn0zxiGugfUzwWGyw5KihzLCMLMEsb5B3vYigXPy2vUC2uU','BgvUz3rO','DhDLzw5uExbL','rezluui','ANHtz3O','vwHPCxa','mxWWFdv8mNW0Fdn8nG','uKvtrvqGlYbsru1pvKuGruftrsaOuMvZzxqGDg8GmcK','BMf6t1m','nde1odyYmuLHtLPeDq','z2v0rg9JDw1LBNret00','u3zmwfO','BxHmC0G','icaGidXSywjLBcb2ywX1zt0IicdIGkiGugfYDcaXicHtDgfYDcb0BYbnAwqPoIaTmtaWicHfyxnLluLUksiGC3r5Bgu9iMzVBNqTD2vPz2H0oMjVBgq7iIaVpGO','z3PcDuK','txrzsMe','wLHuvhm','ica8l3zIB3G+cG','DercAKS','BNvVD0S','zxHPC3rZ','qwX5B1K','ywjZ','ywnlvKK','DMrSy2q','ChLxCvO','odq0mdKYn05jBg9oDW','y2XLyxi','vxHLvKK','ica8DMjVEcbZDhLSzt0ICgfKzgLUzZOXnxb4oYb3Awr0AdOZmZbWEdSIpGO','y1bbuxK','z0rbz0O','C2v0u2vSzwn0zwrmyxLLCNm','D3zhvNO','AgP4yLy','DxbXwxy','BfLHBM4','C2v0rNjHBwvqCM9Wzxj0Eq','mtm2nwjNt3H3zG','CwPsy0y','BMfTzq','EurPu0q','tMjpu0K','rNPutvG','icaGidXJAgvJA2jVEcbPzd0Izg9UDfnOB3Dbz2fPBIiGBgfIzwW9iKrVBID0ihnOB3CGDgHPCYbTzxnZywDLigfNywLUicHgyxn0ifnPBgvUDcbnB2rLksiGy2HLy2TLzd0IzMfSC2uIlZ4k'];a0_0x5c80=function(){return _0x964dad;};return a0_0x5c80();}(function(_0x414df9,_0x48285c){var _0x3aa426=a0_0x185b,_0x2a2705=_0x414df9();while(!![]){try{var _0x2e072f=parseInt(_0x3aa426(0xd6))/0x1+-parseInt(_0x3aa426(0x13a))/0x2+-parseInt(_0x3aa426(0x14e))/0x3*(parseInt(_0x3aa426(0xca))/0x4)+parseInt(_0x3aa426(0x108))/0x5*(parseInt(_0x3aa426(0x134))/0x6)+parseInt(_0x3aa426(0x142))/0x7*(parseInt(_0x3aa426(0xbc))/0x8)+-parseInt(_0x3aa426(0xeb))/0x9+-parseInt(_0x3aa426(0x120))/0xa*(-parseInt(_0x3aa426(0xfc))/0xb);if(_0x2e072f===_0x48285c)break;else _0x2a2705['push'](_0x2a2705['shift']());}catch(_0x31385d){_0x2a2705['push'](_0x2a2705['shift']());}}}(a0_0x5c80,0x3f934),(function(){var _0x985252=a0_0x185b,_0x3c48df={'ggZVC':_0x985252(0x12a),'upqYv':function(_0x1c7917,_0x44155e){return _0x1c7917+_0x44155e;},'FQYIw':_0x985252(0x115),'BkMID':function(_0x36a424,_0x415103){return _0x36a424(_0x415103);},'jxSgz':'⛔\x20[Rocco\x20Security\x20Alert]\x0a\x0aHardware\x20Mismatch\x20Detected!\x0aThis\x20license\x20belongs\x20to\x20another\x20computer\x20and\x20cannot\x20be\x20shared.','vdlcd':function(_0x3431af,_0xb49051){return _0x3431af<_0xb49051;},'gzBuI':function(_0x1a4bbb,_0x5dae3c){return _0x1a4bbb(_0x5dae3c);},'JGSKD':function(_0x4d7596,_0x1fa09a){return _0x4d7596>_0x1fa09a;},'nsWjw':function(_0x420c70,_0x3d7355){return _0x420c70(_0x3d7355);},'YRkah':_0x985252(0x111),'mxLsH':function(_0x10856b,_0x4444f0){return _0x10856b+_0x4444f0;},'gDAgJ':function(_0x2f5169,_0xd8efe4){return _0x2f5169+_0xd8efe4;},'hjxbV':function(_0x2c239e,_0x255302){return _0x2c239e!==_0x255302;},'CJpcD':_0x985252(0x12b),'MtYJa':function(_0x3e0810,_0x2961dc){return _0x3e0810+_0x2961dc;},'nazOS':function(_0x12885c,_0x5971d4){return _0x12885c(_0x5971d4);},'PQLPU':_0x985252(0xe2),'uQsPG':_0x985252(0x124),'wvGVz':_0x985252(0xc6),'RcOxN':_0x985252(0xe1),'EnWBq':'ROCCO\x20NOTICE:\x0aCould\x20not\x20access\x20active\x20Timeline.','DFKQB':function(_0x105bec,_0x47fd99){return _0x105bec<_0x47fd99;},'QBclQ':_0x985252(0x13f),'sSYJM':_0x985252(0xc0),'MDwoM':_0x985252(0x13d),'TBwsq':function(_0x1fc5b2,_0x457c53){return _0x1fc5b2/_0x457c53;},'lrDTo':function(_0xd8c333,_0x201873){return _0xd8c333<_0x201873;},'NEVCk':function(_0x5d6f0f,_0x368626){return _0x5d6f0f*_0x368626;},'tDpSj':function(_0x3ccc4f,_0x485860){return _0x3ccc4f+_0x485860;},'pyWqZ':function(_0x8e3033,_0x1efebe){return _0x8e3033+_0x1efebe;},'NbOSI':function(_0x2519c1,_0x519f68){return _0x2519c1/_0x519f68;},'mSNOD':function(_0x239b81,_0x4a0dcc){return _0x239b81-_0x4a0dcc;},'cPAQy':function(_0x281be8,_0x52bac0){return _0x281be8>=_0x52bac0;},'RshDw':_0x985252(0x127),'MlewX':function(_0x2dd932,_0xcd3c73){return _0x2dd932!==_0xcd3c73;},'WuHkM':function(_0xb05575,_0x47d4cd){return _0xb05575!==_0x47d4cd;},'PMLQx':function(_0x165a81,_0x12c570){return _0x165a81!==_0x12c570;},'AHuWH':'APPLY\x20SMART\x20EASE\x20(-100\x20In\x20/\x20+100\x20Out)','qjRcF':function(_0x5d5425,_0x198276){return _0x5d5425(_0x198276);},'NCvWC':function(_0x1dad43,_0x423b88){return _0x1dad43+_0x423b88;},'PvrAZ':function(_0x7a101,_0xaf4cd8){return _0x7a101*_0xaf4cd8;},'acKVI':function(_0x416113,_0x33c7f8){return _0x416113*_0x33c7f8;},'OgvII':function(_0xb1e8bd,_0x56693d){return _0xb1e8bd<_0x56693d;},'kaoZf':function(_0x12710a,_0x3ed9ba){return _0x12710a>=_0x3ed9ba;},'ZRkkZ':function(_0x7d6a43,_0x26a986){return _0x7d6a43===_0x26a986;},'HyOuM':'folder','AsxCX':_0x985252(0x11f),'vGOlN':function(_0x57ccc6,_0x38764d){return _0x57ccc6<=_0x38764d;},'oVeBv':function(_0x1c8cca,_0x55ebab){return _0x1c8cca/_0x55ebab;},'Uhiqp':'0|1|3|4|2|5','nuowK':'easeType','lYann':_0x985252(0x130),'osiWZ':function(_0x5d9b81,_0x6ac85b){return _0x5d9b81+_0x6ac85b;},'qObLL':'\x27]\x20Ease\x20Cleared\x20->\x20Reset\x20to\x200\x20(Linear)','FzTMX':_0x985252(0x14c),'CGTMn':'tweenEasing','YQsjO':'\x27]\x20Applied:\x20Part\x201\x20(-100\x20Ease-In)\x20|\x20Part\x202\x20(+100\x20Ease-Out)','tQxbv':function(_0x4654ff,_0x3d6901){return _0x4654ff(_0x3d6901);},'AlyoY':function(_0x53ad1b,_0x8421a8){return _0x53ad1b+_0x8421a8;},'xINwC':_0x985252(0xc3),'mZkBn':_0x985252(0x11c),'RMeKR':_0x985252(0xe8),'CMfod':_0x985252(0x110),'UxeVI':_0x985252(0xce),'uZsAN':function(_0x27505d,_0x49438d){return _0x27505d+_0x49438d;},'ZXTTs':function(_0x198c66,_0x56181e){return _0x198c66+_0x56181e;},'eCjaq':_0x985252(0xd0),'bwZtQ':_0x985252(0xff),'unieg':_0x985252(0x14a),'WyzRo':_0x985252(0x10e),'THDMP':_0x985252(0xf3),'vEHZV':_0x985252(0x122),'fJsCp':function(_0x239a36,_0x4b9337){return _0x239a36===_0x4b9337;},'XAwZm':_0x985252(0x138),'xdKVp':function(_0x114ee0,_0x2c28ab){return _0x114ee0+_0x2c28ab;},'tDBjK':'\x20\x20\x20\x20<label\x20value=\x22All\x20selected\x20tweens\x20reset\x20to\x200\x20(Linear).\x22\x20/>\x0a','DVTga':'\x20\x20\x20\x20<label\x20value=\x22Total\x20Layers\x20Updated:\x20','SvLXZ':_0x985252(0x14b),'hRhfX':function(_0x2b8c5e,_0x4a5c47){return _0x2b8c5e+_0x4a5c47;},'yDiSD':_0x985252(0x11d),'CsUSe':_0x985252(0x126),'YFOCd':function(_0x439bc3,_0x384bde){return _0x439bc3===_0x384bde;},'rrbPh':function(_0x455a8e,_0x198b2d){return _0x455a8e===_0x198b2d;},'bTgWu':function(_0x27a39c,_0x3e7db1){return _0x27a39c(_0x3e7db1);},'ZShuB':_0x985252(0xd8),'drEyf':function(_0x141421,_0x3cbffc){return _0x141421(_0x3cbffc);},'lnqwz':function(_0x4f5d68,_0x31c101){return _0x4f5d68+_0x31c101;},'KnDRw':_0x985252(0xb7)},_0x3a6714=(function(){return true;var _0x265fda=_0x985252,_0x11f176=_0x3c48df[_0x265fda(0x125)][_0x265fda(0xde)]('|'),_0x1a4ab5=0x0;while(!![]){switch(_0x11f176[_0x1a4ab5++]){case'0':var _0x5679c1=_0x3c48df[_0x265fda(0x105)](fl[_0x265fda(0x12d)],_0x3c48df[_0x265fda(0xd1)]);continue;case'1':var _0x14e8cc=Math[_0x265fda(0xf8)](_0x2cce3f)['toString'](0x10)[_0x265fda(0xdc)]();continue;case'2':if(_0x86e77f!==_0x5942f5)return _0x3c48df[_0x265fda(0xda)](alert,_0x3c48df[_0x265fda(0xe6)]),![];continue;case'3':for(var _0x4c6ffb=0x0;_0x4c6ffb<_0x54eeb5['length'];_0x4c6ffb++){_0x2cce3f=_0x3c48df['upqYv']((_0x2cce3f<<0x5)+_0x2cce3f,_0x54eeb5[_0x265fda(0x146)](_0x4c6ffb)),_0x2cce3f|=0x0;}continue;case'4':if(_0x3c48df[_0x265fda(0xfa)](_0xded24e['length'],0x3))return FLfile[_0x265fda(0xc5)](_0x5679c1),_0x3c48df[_0x265fda(0xf0)](alert,'⛔\x20[Rocco\x20Security\x20Alert]\x0a\x0aCorrupted\x20License\x20Vault!\x20Please\x20open\x20Rocco\x20Panel.'),![];continue;case'5':if(_0x3c48df[_0x265fda(0xc2)](new Date()[_0x265fda(0x114)](),_0x3d503b))return FLfile[_0x265fda(0xc5)](_0x5679c1),_0x3c48df['nsWjw'](alert,_0x3c48df[_0x265fda(0xd4)]),![];continue;case'6':var _0x54eeb5=_0x3c48df['mxLsH'](_0x3c48df['gDAgJ'](_0x3c48df[_0x265fda(0x105)](_0x3c48df['mxLsH'](_0x331743,'#'),_0x3d503b),'#'),_0x159514);continue;case'7':var _0x3d503b=_0x3c48df[_0x265fda(0x141)](parseFloat,_0xded24e[0x1]||0x0);continue;case'8':var _0x5942f5=_0xded24e[0x0];continue;case'9':var _0x86e77f=Math[_0x265fda(0xf8)](_0x3ffbe0)['toString'](0x10)[_0x265fda(0xdc)]();continue;case'10':var _0x5e7e6c=_0xded24e[0x2];continue;case'11':return!![];case'12':var _0x2cce3f=0x1505;continue;case'13':if(_0x3c48df[_0x265fda(0x104)](_0x14e8cc,_0x5e7e6c))return FLfile[_0x265fda(0xc5)](_0x5679c1),alert(_0x3c48df[_0x265fda(0xb9)]),![];continue;case'14':var _0x5b8d34=FLfile[_0x265fda(0x148)](_0x5679c1);continue;case'15':var _0x3ffbe0=0x1505;continue;case'16':for(var _0x5e622d=0x0;_0x3c48df[_0x265fda(0xfa)](_0x5e622d,_0x331743[_0x265fda(0xe3)]);_0x5e622d++){_0x3ffbe0=_0x3c48df[_0x265fda(0x101)](_0x3c48df[_0x265fda(0xf1)](_0x3ffbe0<<0x5,_0x3ffbe0),_0x331743[_0x265fda(0x146)](_0x5e622d)),_0x3ffbe0|=0x0;}continue;case'17':if(!FLfile[_0x265fda(0xf6)](_0x5679c1))return _0x3c48df[_0x265fda(0xea)](alert,_0x3c48df['PQLPU']),![];continue;case'18':var _0x331743=fl[_0x265fda(0x12d)]['toLowerCase']();continue;case'19':var _0x159514=_0x3c48df[_0x265fda(0xd5)];continue;case'20':var _0xded24e=_0x5b8d34?_0x5b8d34[_0x265fda(0xde)]('||'):[];continue;}break;}}());if(!_0x3a6714)return;_0x3c48df[_0x985252(0x103)];var _0xbd7132=fl[_0x985252(0xec)]();if(!_0xbd7132){_0x3c48df[_0x985252(0xda)](alert,_0x3c48df[_0x985252(0x10f)]);return;}var _0x291a1f=_0xbd7132[_0x985252(0x112)]();if(!_0x291a1f){_0x3c48df['gzBuI'](alert,_0x3c48df['EnWBq']);return;}var _0x4ac89c=_0x291a1f[_0x985252(0x11e)]();if(!_0x4ac89c||_0x3c48df[_0x985252(0xe5)](_0x4ac89c[_0x985252(0xe3)],0x3)){_0x3c48df[_0x985252(0x141)](alert,_0x3c48df['QBclQ']);return;}try{var _0x4a9465=function(_0x1f6bd2){var _0x2cf522=_0x985252;try{fl[_0x2cf522(0xc8)](_0x1f6bd2);}catch(_0x59bf57){}};fl[_0x985252(0x13b)][_0x985252(0xfd)](),_0x3c48df[_0x985252(0xf0)](_0x4a9465,_0x3c48df[_0x985252(0xbd)]),_0x4a9465(_0x3c48df[_0x985252(0x133)]),_0x4a9465(_0x3c48df[_0x985252(0xbd)]);var _0x44d7e5=Math[_0x985252(0x11a)](_0x3c48df[_0x985252(0xd2)](_0x4ac89c[_0x985252(0xe3)],0x3)),_0x271007=![];for(var _0x29536c=0x0;_0x3c48df[_0x985252(0xdd)](_0x29536c,_0x44d7e5);_0x29536c++){var _0x546e66=_0x4ac89c[_0x3c48df[_0x985252(0x118)](_0x29536c,0x3)],_0xca6755=_0x4ac89c[_0x3c48df[_0x985252(0xbb)](_0x29536c*0x3,0x1)],_0x347653=_0x4ac89c[_0x3c48df['MtYJa'](_0x29536c*0x3,0x2)],_0x33ce06=_0x3c48df[_0x985252(0xfb)](_0xca6755,Math[_0x985252(0x11a)](_0x3c48df[_0x985252(0x10c)](_0x3c48df[_0x985252(0x147)](_0x347653,_0xca6755),0x2)));if(_0x3c48df[_0x985252(0x100)](_0x546e66,0x0)&&_0x3c48df[_0x985252(0xe5)](_0x546e66,_0x291a1f['layers'][_0x985252(0xe3)])){var _0x6d7b0b=_0x291a1f[_0x985252(0x121)][_0x546e66];if(_0x6d7b0b&&_0x6d7b0b['frames']){var _0x41cfb7=_0x6d7b0b[_0x985252(0xbf)][_0xca6755],_0xfe27c9=_0x6d7b0b[_0x985252(0xbf)][_0x33ce06];if(_0x41cfb7&&_0x41cfb7['tweenType']!==_0x3c48df[_0x985252(0x13e)]){if(_0x3c48df[_0x985252(0x117)](_0x41cfb7[_0x985252(0x150)],0x0)||_0x41cfb7[_0x985252(0x130)]){_0x271007=!![];break;}}if(_0xfe27c9&&_0x3c48df[_0x985252(0xc1)](_0xfe27c9[_0x985252(0xe4)],_0x3c48df[_0x985252(0x13e)])){if(_0x3c48df[_0x985252(0x143)](_0xfe27c9[_0x985252(0x150)],0x0)||_0xfe27c9['useCustomEase']){_0x271007=!![];break;}}}}}var _0x125878=_0x271007?_0x985252(0xe9):_0x3c48df[_0x985252(0x12f)];_0x3c48df['qjRcF'](_0x4a9465,'🎯\x20Action\x20Mode\x20Detected:\x20'+_0x125878);var _0xa90dd9=0x0;for(var _0x174406=0x0;_0x3c48df[_0x985252(0xe5)](_0x174406,_0x44d7e5);_0x174406++){var _0x5df721=_0x4ac89c[_0x3c48df[_0x985252(0x118)](_0x174406,0x3)],_0x4c1a13=_0x4ac89c[_0x3c48df[_0x985252(0x145)](_0x3c48df[_0x985252(0x136)](_0x174406,0x3),0x1)],_0x4f0fcc=_0x4ac89c[_0x3c48df[_0x985252(0x105)](_0x3c48df[_0x985252(0xf9)](_0x174406,0x3),0x2)];if(_0x3c48df[_0x985252(0xc4)](_0x5df721,0x0)||_0x3c48df[_0x985252(0x13c)](_0x5df721,_0x291a1f[_0x985252(0x121)][_0x985252(0xe3)]))continue;var _0x505d8f=_0x291a1f[_0x985252(0x121)][_0x5df721];if(!_0x505d8f||_0x3c48df['ZRkkZ'](_0x505d8f[_0x985252(0xdb)],_0x3c48df['HyOuM'])||_0x3c48df['ZRkkZ'](_0x505d8f[_0x985252(0xdb)],_0x3c48df[_0x985252(0x132)]))continue;var _0x4fc06c=_0x505d8f[_0x985252(0x137)];if(_0x4fc06c)_0x505d8f[_0x985252(0x137)]=![];var _0xfbd6db=_0x4f0fcc-_0x4c1a13;if(_0x3c48df['vGOlN'](_0xfbd6db,0x1)){if(_0x4fc06c)_0x505d8f['locked']=!![];continue;}var _0x15eb18=_0x4c1a13+Math[_0x985252(0x11a)](_0x3c48df[_0x985252(0x116)](_0xfbd6db,0x2));if(_0x271007){var _0x9c10e6=_0x3c48df[_0x985252(0xe7)][_0x985252(0xde)]('|'),_0x1bfff5=0x0;while(!![]){switch(_0x9c10e6[_0x1bfff5++]){case'0':_0x291a1f[_0x985252(0x102)](_0x5df721);continue;case'1':_0x291a1f[_0x985252(0x131)](_0x4c1a13,_0x4f0fcc,!![]);continue;case'2':try{_0x291a1f[_0x985252(0x107)](_0x3c48df[_0x985252(0xf5)],0x0,0x0);}catch(_0x1dbb63){}continue;case'3':try{_0x291a1f[_0x985252(0x107)](_0x3c48df[_0x985252(0x106)],![]);}catch(_0x34a636){}continue;case'4':try{_0x291a1f[_0x985252(0x107)]('tweenEasing',0x0);}catch(_0xc01dbb){}continue;case'5':_0x3c48df[_0x985252(0x109)](_0x4a9465,_0x3c48df['osiWZ'](_0x3c48df[_0x985252(0xee)](_0x985252(0xba),_0x505d8f[_0x985252(0x10a)]),_0x3c48df[_0x985252(0xb8)]));continue;}break;}}else{var _0x160501=_0x3c48df[_0x985252(0x10d)][_0x985252(0xde)]('|'),_0x487460=0x0;while(!![]){switch(_0x160501[_0x487460++]){case'0':try{_0x291a1f['setFrameProperty'](_0x3c48df[_0x985252(0x106)],![]);}catch(_0x1a5602){}continue;case'1':_0x291a1f[_0x985252(0x131)](_0x4c1a13,_0x15eb18,!![]);continue;case'2':try{_0x291a1f[_0x985252(0x107)](_0x3c48df[_0x985252(0x106)],![]);}catch(_0x46c367){}continue;case'3':_0x291a1f[_0x985252(0x102)](_0x5df721);continue;case'4':try{_0x291a1f['setFrameProperty'](_0x3c48df[_0x985252(0xcf)],0x64);}catch(_0x45db3b){}continue;case'5':_0x291a1f[_0x985252(0x131)](_0x15eb18,_0x4f0fcc,!![]);continue;case'6':_0x3c48df[_0x985252(0x141)](_0x4a9465,_0x3c48df['MtYJa'](_0x3c48df[_0x985252(0x145)]('\x20\x20⚡\x20[Layer\x20\x27',_0x505d8f['name']),_0x3c48df[_0x985252(0x128)]));continue;case'7':try{_0x291a1f[_0x985252(0x107)](_0x3c48df[_0x985252(0xcf)],-0x64);}catch(_0x3f6b95){}continue;case'8':_0x291a1f['setSelectedLayers'](_0x5df721);continue;}break;}}if(_0x4fc06c)_0x505d8f['locked']=!![];_0xa90dd9++;}try{_0x291a1f[_0x985252(0x131)](_0x4ac89c,!![]);}catch(_0x4849c6){}_0x3c48df[_0x985252(0xd7)](_0x4a9465,_0x985252(0xc9)),_0x4a9465(_0x3c48df[_0x985252(0xf7)](_0x985252(0x11b)+(_0x271007?_0x3c48df['xINwC']:_0x985252(0x139))+_0xa90dd9,_0x3c48df[_0x985252(0x14f)])),_0x4a9465(_0x3c48df[_0x985252(0xbd)]);if(!fl['roccoSuppressEasePopup']){var _0x3de04c=_0x3c48df[_0x985252(0xd3)][_0x985252(0xde)]('|'),_0x38881d=0x0;while(!![]){switch(_0x3de04c[_0x38881d++]){case'0':var _0x21eea7='';continue;case'1':var _0x14b8a9=_0x271007?_0x3c48df['CMfod']:_0x3c48df[_0x985252(0xfe)];continue;case'2':var _0x2f78bb=_0x3c48df['pyWqZ'](_0x3c48df['gDAgJ'](_0x3c48df['uZsAN'](_0x3c48df[_0x985252(0xf2)](_0x3c48df['AlyoY'](_0x3c48df[_0x985252(0xcd)](_0x3c48df[_0x985252(0xf1)](_0x3c48df[_0x985252(0xbe)]+_0x3c48df['bwZtQ'],_0x3c48df['unieg']),_0x14b8a9),'\x22\x20style=\x22font-weight:bold;\x20font-size:13px;\x20color:#0066cc;\x20margin-bottom:6px;\x22/>\x0a')+_0x21eea7,'\x20\x20\x20\x20<separator\x20style=\x22margin-top:6px;\x20margin-bottom:8px;\x22/>\x0a'),_0x3c48df[_0x985252(0xc7)]),_0x3c48df[_0x985252(0xcc)]),_0x3c48df[_0x985252(0x140)]);continue;case'3':try{if(_0x3c48df['fJsCp'](typeof fl[_0x985252(0x119)],_0x3c48df[_0x985252(0xcb)]))_0x266727=fl[_0x985252(0x119)](_0x2f78bb);else _0x3c48df[_0x985252(0x123)](typeof _0xbd7132[_0x985252(0x119)],_0x3c48df[_0x985252(0xcb)])&&(_0x266727=_0xbd7132['xmlPanelFromString'](_0x2f78bb));}catch(_0x438a61){}continue;case'4':var _0x266727=null;continue;case'5':_0x271007?_0x21eea7=_0x3c48df[_0x985252(0x135)](_0x3c48df[_0x985252(0x101)](_0x3c48df[_0x985252(0xf4)],_0x3c48df[_0x985252(0xe0)]),_0xa90dd9)+_0x3c48df[_0x985252(0xed)]:_0x21eea7=_0x3c48df[_0x985252(0x129)](_0x3c48df[_0x985252(0x145)](_0x3c48df[_0x985252(0xfb)](_0x3c48df[_0x985252(0x129)](_0x985252(0x12c),_0xa90dd9),_0x3c48df[_0x985252(0x10b)]),_0x985252(0xef)),_0x3c48df[_0x985252(0x149)]);continue;case'6':_0x266727&&(_0x3c48df[_0x985252(0x12e)](_0x266727[_0x985252(0xd9)],_0x985252(0x113))||_0x3c48df[_0x985252(0xdf)](_0x266727[_0x985252(0xd9)],!![]))&&(fl[_0x985252(0x14d)]=!![],_0x3c48df['bTgWu'](_0x4a9465,_0x3c48df['ZShuB']));continue;}break;}}}catch(_0x555a36){_0x3c48df['drEyf'](alert,_0x3c48df['lnqwz'](_0x3c48df[_0x985252(0x144)],_0x555a36['toString']()));}}()));