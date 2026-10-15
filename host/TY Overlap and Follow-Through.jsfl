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
function a21_0xe674(_0x1399e5,_0x899d99){_0x1399e5=_0x1399e5-0x193;var _0x8ef547=a21_0x8ef5();var _0xe67409=_0x8ef547[_0x1399e5];if(a21_0xe674['cgBkJx']===undefined){var _0x49e5a6=function(_0x236446){var _0x3e3495='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2a5b12='',_0xe51cf1='';for(var _0x1e2f3b=0x0,_0x117323,_0x307ef6,_0x4269a0=0x0;_0x307ef6=_0x236446['charAt'](_0x4269a0++);~_0x307ef6&&(_0x117323=_0x1e2f3b%0x4?_0x117323*0x40+_0x307ef6:_0x307ef6,_0x1e2f3b++%0x4)?_0x2a5b12+=String['fromCharCode'](0xff&_0x117323>>(-0x2*_0x1e2f3b&0x6)):0x0){_0x307ef6=_0x3e3495['indexOf'](_0x307ef6);}for(var _0x458fe7=0x0,_0x2719b4=_0x2a5b12['length'];_0x458fe7<_0x2719b4;_0x458fe7++){_0xe51cf1+='%'+('00'+_0x2a5b12['charCodeAt'](_0x458fe7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xe51cf1);};a21_0xe674['SptMXh']=_0x49e5a6,a21_0xe674['GmeBYU']={}
,a21_0xe674['cgBkJx']=!![];}var _0x9b39f4=_0x8ef547[0x0];a21_0xe674['dUATWm']!==_0x9b39f4&&(a21_0xe674['GmeBYU']={},a21_0xe674['dUATWm']=_0x9b39f4);var _0x5b6488=a21_0xe674['GmeBYU'][_0x1399e5];return _0x5b6488===undefined?(_0xe67409=a21_0xe674['SptMXh'](_0xe67409),a21_0xe674['GmeBYU'][_0x1399e5]=_0xe67409):_0xe67409=_0x5b6488,_0xe67409;}function a21_0x8ef5(){var _0x1924c8=['Dg9Wx2rVD24','4OcIiezSDwLKlcbVCMDHBMLJig1VDgLVBIbJCMvHDgvKigLUideGy2XPy2SH','nZa1mZG4Efv3D0HY','nJvvrNHjB0q','sujWAMG','icaGidXYywrPB2DYB3vWigLKpsjZDgfNz2vYrgLYiJ4k','B3nIv1C','m3W0Fdj8mhWX','Exvus2u','vevuuNm','Dg9vChbLCKnHC2u','cJ09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09','mtb8mxW2Fdv8oxWXnNW3FdH8mJb8mtL8mNWXnxWXohWXnhWZFde3Fdr8mtj8mhWXmxWXmW','zeXLr3K','Befjugm','C3rHCNrgCMfTzq','vwPRqLi','pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt0','ohzqDufosa','j10Gu3rHz2DLCMvKigj5icS','tM90AwnLoIbtA2LWCgLUzYbSB2nRzwqGBgf5zxiGjW','rw5OBLy','ywvPrLe','EMzuEwS','y2jsueq','zxHPC3rZ','z2v0vgLTzq','AwvvuwO','icaTpIbuyxnRigvYCM9Yig9UigXHEwvYicC','Bgf5zxjoyw1L','4OcIifrVDgfSieXHEwvYCYbtDgfNz2vYzwq6ia','sLP5AeS','Be9Ovu0','q2vbBeW','B1LNEeC','BgvUz3rO','txHYBLm','otm0ndm5ugrMve1S','uKzVyKm','icaGicaGica8CM93pJXSywjLBcb2ywX1zt0IrNjHBwuGrgvSyxKGCgvYieXHEwvYicHpzMzZzxqGu3rLCcK6iI8+phbVChvWC2XPzgvYigLKpsjKzwXHEvn0zxaIihzHBhvLpsiXiI8+pc9YB3C+cG','wND6zhu','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkvgfTCgvYzwqGtgLJzw5ZzsbtAwDUyxr1CMuHcKzPBguGrgvZDhjVEwvKlG','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOksgfYzhDHCMuGtwLZBwf0y2GGrgv0zwn0zwqHcLrOAxmGBgLJzw5ZzsbIzwXVBMDZihrVigfUB3rOzxiGy29TChv0zxiGyw5KignHBM5VDcbIzsbZAgfYzwqU','uNfTs0u','Bgf5zxjZ','BfPOD3u','pc9KAwfSB2C+','C2v0u2vSzwn0zwrmyxLLCNm','ve9ptLLvrYbtvundrvntiqOk','4OcIierLBgf5ifn0zxaGCgvYieXHEwvYoIaR','t1nwzwy','zNjHBwvZ','yxjcyM0','BMfTzq','zuzyy2e','q01xC3e','qM90Dg9TlxrVlvrVCcaOq2fZy2fKAw5NifvWkq','C3rHz2DLCKrPCG','zw1Rvvm','wvLsrfe','DgrSr0u','svbxwLm','uvH6yxi','C2TTwvC','zM9SzgvY','icaGidXNCMLKpGO','qKL6Cg4','CMvTB3zL','wvvREKm','ChvZAa','tvLMqM0','icaGicaGpc9YB3DZpGO','u2rrweu','mZeZmdK2AxPduLjl','icaTpIbBtgf5zxiGjW','zwPuA3K','DeH5ugC','icaGicaGpgnVBhvTBNm+pgnVBhvTBI8+pgnVBhvTBI8+pc9JB2X1Bw5ZpGO','y2fSy3vSyxrLze9MzNnLDa','BMrJyvO','sKHWAxG','q3bkC1C','u21HzhC','zvboEfi','u3vJy2vZC2z1BgX5igfWCgXPzwqGt3zLCMXHChbPBMCGqwn0Aw9UicyGrM9SBg93lvrOCM91z2GHcGO','jZOG','EfnsAgW','zgLYzwn0Aw9U','zffHsMK','odyXmhDLvxrkAG','z2v0u2vSzwn0zwrgCMfTzxm','igzYyw1LkhmPicHtDgfYDdOGrNjHBwuG','uu5nBKS','ndiZCwT4zNDI','vfLFru5urvjquKLtrv9bsvjusuDivf8Ymdi2x0aJja','BfjNuxe','Eg1SugfUzwXgCM9Tu3rYAw5N','u2Dvqwy','qKLorKe','4OYBifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkrgfPBhKGmJqTsg91CIbmAwnLBNnLieXLyxnLiev4CgLYzwqHcLbSzwfZzsbVCgvUifrVB25zDwCGtwfZDgvYifbHBMvSihrVihjLzNjLC2GGEw91CIbZzxnZAw9UlG','sfvTvNu','ve9ptLLvrYbot1rjq0u6cLbSzwfZzsbZzwXLy3qGysbMCMfTzsbYyw5NzsbHy3jVC3mGmIbVCIbTB3jLigXHEwvYCYbVBIb0AguGvgLTzwXPBMuU','z2v0vgLTzwXPBMu','vvHbrwO','BMn4BNG','ve9ptLLvrYbot1rjq0u6ie9WzxjHDgLVBIbJyw5JzwXSzwqGyNKGDxnLCI4','vfbftKi','vK1zzLu','shbzDKO','C2v0u2vSzwn0zwrgCMfTzxm','icaGicaGphjHzgLVigXHyMvSpsjuB3aTDg8TqM90Dg9TicHuB3aGBgf5zxiGBgvHzhmSigXVD2vYigXHEwvYCYbKzwXHEwvKksiGDMfSDwu9iNrVCf9KB3DUiIbZzwXLy3rLzd0IDhj1zsiVpGO','yxfkvLK','t3P0tLe','v3vJyMq','m21vu1LkqG','ica8DMjVEcbZDhLSzt0ICgfKzgLUzZOXmhb4oYi+cG','AeDSuvG','mxWWFdr8m3WY','mZKWotG0ru1py09w','z2v0rg9JDw1LBNret00','s2jUAeO','Dg9tDhjPBMC','Eg1UtNK','icaGicaGphjHzgLVigXHyMvSpsjcB3r0B20TDg8Tvg9WicHcB3r0B20GBgf5zxiGBgvHzhmSihvWCgvYigXHEwvYCYbKzwXHEwvKksiGDMfSDwu9iMjVDhrVBv91CciVpGO','icaGicaGphjVD3m+cG','mtHLA2z0tfi','zNvUy3rPB24','r1noExe','C3bSAxq','y29UzMLNvvjj','ugTku0W','ywjZ','BK5Pz0S','igXHEwvYkhmP','svzwrK4','ve9ptLLvrYbtq1jjufqGrvjst1i6cG','icbut09owvvhifnuvurjtYbut09ms0LuuYaTie9wrvjmqvaGqu5eiezpteXpvY1usfjpvuDiia','ica8l3zIB3G+cG','C3vUswS','Dg9mB3DLCKnHC2u','q29TBwfUzhmVDhLFBgLJzw5Zzs5Kyxq','v0jTwuK','mtaZm0T1zMvhBW','icaGidXSywjLBcb2ywX1zt0Iq29UzMLNDxjLie92zxjSyxbWAw5NiefJDgLVBIbbtKqGrM9SBg93lvrOCM91z2G6iI8+cG','mNWZFdf8nhWW','CNPmwgW','D3PtEwi','q1zZuhu','BNriAMu','tNDcCxG','zgvSyxLtDgvW','qwXvyvK','Bgf5zxjuExbL','we53BxG','wKzIrKu','t1HtzNG','C0XOy2i','mJGWmdy4EhLlEg1z','zMXVB3i','nunssxfwyG','pgrPywXVzYb0AxrSzt0Ive9ptLLvrYbtvfvesu8Gve9pteTjvfmGlsbpvKvstefqieforcbgt0Xmt1CTveHst1vhsciGyNv0Dg9UCZ0IywnJzxb0lcbJyw5JzwWIpGO','ALvJwLG','uvjKqxy','sfLKzxa','AM53uMO','ve9ptLLvrYbfuLjpuJOGq291BgqGBM90igfJy2vZCYbHy3rPDMuGvgLTzwXPBMuU','4PUuifTuB29UwxvNifnLy3vYAxr5iefSzxj0xqOkq29YCNvWDgvKieXPy2vUC2uGvMf1BhqHifbSzwfZzsbVCgvUifrVB25zDwCGugfUzwWU','y2HHCKnVzgvbDa'];a21_0x8ef5=function(){return _0x1924c8;};return a21_0x8ef5();}(function(_0x2073e3,_0x49f77b){var _0x4a66a8=a21_0xe674,_0x5a1657=_0x2073e3();while(!![]){try{var _0xc81282=-parseInt(_0x4a66a8(0x1e3))/0x1*(parseInt(_0x4a66a8(0x1d2))/0x2)+-parseInt(_0x4a66a8(0x1c7))/0x3*(-parseInt(_0x4a66a8(0x1ff))/0x4)+-parseInt(_0x4a66a8(0x1f4))/0x5*(-parseInt(_0x4a66a8(0x1cb))/0x6)+-parseInt(_0x4a66a8(0x19e))/0x7*(parseInt(_0x4a66a8(0x20f))/0x8)+parseInt(_0x4a66a8(0x1b2))/0x9*(-parseInt(_0x4a66a8(0x1ae))/0xa)+parseInt(_0x4a66a8(0x222))/0xb+-parseInt(_0x4a66a8(0x1f2))/0xc*(parseInt(_0x4a66a8(0x200))/0xd);if(_0xc81282===_0x49f77b)break;else _0x5a1657['push'](_0x5a1657['shift']());}catch(_0x54f753){_0x5a1657['push'](_0x5a1657['shift']());}}}(a21_0x8ef5,0x1c249),(function(){var _0xa5ae11=a21_0xe674,_0x5c2bf2={'aqJVY':_0xa5ae11(0x209),'lOhUM':function(_0xab6f88,_0x20e99a){return _0xab6f88!==_0x20e99a;},'tHyPg':function(_0x2a86d7,_0xd8a307){return _0x2a86d7(_0xd8a307);},'yTkUo':_0xa5ae11(0x226),'ZFbFE':function(_0x5290fc,_0x5e4007){return _0x5290fc+_0x5e4007;},'jUcZX':function(_0x55725e,_0x2e3468){return _0x55725e+_0x2e3468;},'BINFA':function(_0x2beed6,_0x39b27f){return _0x2beed6+_0x39b27f;},'osbWW':function(_0x42f3c9,_0x250af4){return _0x42f3c9+_0x250af4;},'Zwzdu':function(_0x51ab13,_0x15f7fc){return _0x51ab13<_0x15f7fc;},'CiRBH':_0xa5ae11(0x1fb),'JZyhK':_0xa5ae11(0x1e1),'IPWZS':function(_0x406fa2,_0xcafff0){return _0x406fa2>_0xcafff0;},'QXzar':function(_0x168166,_0x46fe11){return _0x168166(_0x46fe11);},'UjkBR':_0xa5ae11(0x1b8),'CeAlL':function(_0xeda6bd,_0x42a827){return _0xeda6bd(_0x42a827);},'tdlGE':_0xa5ae11(0x227),'ieUQj':function(_0x2d6b72,_0x3efcee){return _0x2d6b72+_0x3efcee;},'wzSyb':function(_0x126ff4,_0x272904){return _0x126ff4<<_0x272904;},'WBmYI':_0xa5ae11(0x1b3),'nNigK':_0xa5ae11(0x1e5),'RFobC':function(_0x51652d,_0x404881){return _0x51652d===_0x404881;},'rzLXl':'function','OSVef':function(_0x15bc36,_0x5c2a68){return _0x15bc36+_0x5c2a68;},'BIzpn':function(_0x33780f,_0x4450ac){return _0x33780f+_0x4450ac;},'PkJSL':function(_0x1e3c23,_0xc912f9){return _0x1e3c23+_0xc912f9;},'sunIk':function(_0x2071cf,_0x380350){return _0x2071cf+_0x380350;},'tTlFN':_0xa5ae11(0x1c8),'oYgxG':_0xa5ae11(0x1e4),'ndcaZ':_0xa5ae11(0x1a2),'yaMdm':_0xa5ae11(0x1d1),'IBpjh':_0xa5ae11(0x224),'HpYvJ':'\x20\x20\x20\x20</grid>\x0a','RqmKE':_0xa5ae11(0x202),'SdQXE':_0xa5ae11(0x1c3),'SgUAf':_0xa5ae11(0x1d0),'Abmal':'\x20\x20\x20\x20</radiogroup>\x0a','dOQIG':_0xa5ae11(0x1de),'QNMnK':_0xa5ae11(0x22b),'XNwmx':'accept','TPENB':function(_0x4e3a17,_0x44828d,_0x5abfdf){return _0x4e3a17(_0x44828d,_0x5abfdf);},'CMWsq':_0xa5ae11(0x1fd),'ejTky':function(_0xe3fdf9,_0x5ca4e1){return _0xe3fdf9(_0x5ca4e1);},'yuTKe':'ROCCO\x20ERROR:\x20No\x20document\x20is\x20currently\x20open\x20in\x20Adobe\x20Animate.','CVsPu':function(_0x11420c,_0x17b8c5){return _0x11420c(_0x17b8c5);},'eFXca':_0xa5ae11(0x1fa),'ePNxR':function(_0x4fb5c5,_0x3bbd3a){return _0x4fb5c5(_0x3bbd3a);},'xmnNy':function(_0x1d5a53){return _0x1d5a53();},'tnQAN':function(_0x481962,_0x923cd6){return _0x481962(_0x923cd6);},'Wucbd':'==================================================','lZhwu':_0xa5ae11(0x1dd),'WBbbc':function(_0x4101e0,_0x14f537){return _0x4101e0(_0x14f537);},'dQaJi':function(_0x1e93be,_0x3005c2){return _0x1e93be/_0x3005c2;},'jnwRj':function(_0x33a891,_0x159292){return _0x33a891*_0x159292;},'sLhcb':function(_0x373f4c,_0x511d99){return _0x373f4c<_0x511d99;},'YUkzC':function(_0x54648f,_0xc54eff){return _0x54648f>=_0xc54eff;},'skmYW':function(_0x57097e,_0x2814cc){return _0x57097e(_0x2814cc);},'HUmVu':function(_0x38cfbf,_0x2d9e8d){return _0x38cfbf+_0x2d9e8d;},'JHpix':function(_0x1906c0,_0x5e14fd){return _0x1906c0+_0x5e14fd;},'zfTyk':_0xa5ae11(0x211),'xuzcH':_0xa5ae11(0x195),'NwBqx':'guide','IVVFN':function(_0x107fb4,_0x56ef76){return _0x107fb4===_0x56ef76;},'xXqjv':function(_0x122b53,_0x3aef9b){return _0x122b53(_0x3aef9b);},'ncxnx':'ROCCO\x20NOTICE:\x0aPlease\x20select\x202\x20or\x20more\x20unlocked\x20layers\x20to\x20create\x20Overlapping\x20Action.','ntHje':function(_0x2f0eca,_0x1dca33){return _0x2f0eca<_0x1dca33;},'EnhnV':_0xa5ae11(0x204),'arBbm':function(_0x8cdc5,_0x3eb0cd){return _0x8cdc5>_0x3eb0cd;},'hGlQX':_0xa5ae11(0x1ca),'qXAWr':function(_0x3b9fce,_0x589280){return _0x3b9fce(_0x589280);},'MxrnS':function(_0x23ac8e,_0x433843){return _0x23ac8e+_0x433843;},'UsQPo':function(_0xfeeebc,_0x6ec891){return _0xfeeebc+_0x6ec891;},'lAIPc':function(_0x22c7f1,_0x372172){return _0x22c7f1+_0x372172;},'dLeGy':_0xa5ae11(0x19f),'DBXeo':_0xa5ae11(0x210),'xSRhl':function(_0x48cf2,_0x557bea){return _0x48cf2+_0x557bea;},'TETRs':_0xa5ae11(0x1aa),'OCiPx':function(_0x14a297,_0x52f72f){return _0x14a297(_0x52f72f);},'mOBpc':'\x27]\x20Lead\x20Layer\x20(Offset:\x20+0\x20frames)','UXAEj':function(_0x1e17f0,_0x349c95){return _0x1e17f0*_0x349c95;},'emkUS':function(_0x2c850e,_0x1eac9c){return _0x2c850e*_0x1eac9c;},'KbnhJ':function(_0x750d70,_0x1e0a4d){return _0x750d70-_0x1e0a4d;},'wyKqk':function(_0x52d6c9,_0x2353a5){return _0x52d6c9-_0x2353a5;},'MYfBm':function(_0xec3b53,_0x5e084b){return _0xec3b53+_0x5e084b;},'RBslz':_0xa5ae11(0x235),'OztNQ':function(_0x12c5dd,_0x169611){return _0x12c5dd(_0x169611);},'cguwT':function(_0x44b84b,_0xd4482a){return _0x44b84b+_0xd4482a;},'pPvoO':function(_0xa43202,_0x29cfc4){return _0xa43202+_0x29cfc4;},'Smadw':function(_0x3bba89,_0x39433a){return _0x3bba89+_0x39433a;},'cbRPD':function(_0xe681e,_0x4990f0){return _0xe681e+_0x4990f0;},'HYdep':function(_0x347a54,_0x5a81c0){return _0x347a54+_0x5a81c0;},'aeiFQ':function(_0x26eaad,_0x25630c){return _0x26eaad+_0x25630c;},'AlUaY':_0xa5ae11(0x22d),'GSNyq':_0xa5ae11(0x1a9),'OXSfx':_0xa5ae11(0x21b),'VMYfU':_0xa5ae11(0x22e),'QRdAv':'\x20Frame(s)\x0a','lRgQq':'•\x20Direction:\x20','CpJsW':_0xa5ae11(0x1fe),'YYRDQ':function(_0x4e6a19,_0x75a61a){return _0x4e6a19(_0x75a61a);}},_0xb0ae81=(function(){return true;var _0x2f4f1d=_0xa5ae11,_0xa97e85=_0x5c2bf2[_0x2f4f1d(0x1c4)][_0x2f4f1d(0x1d5)]('|'),_0x252cca=0x0;while(!![]){switch(_0xa97e85[_0x252cca++]){case'0':if(_0x5c2bf2[_0x2f4f1d(0x21d)](_0x23d0e8,_0x48e7f6))return FLfile[_0x2f4f1d(0x198)](_0x4c8c74),_0x5c2bf2[_0x2f4f1d(0x1a1)](alert,_0x5c2bf2['yTkUo']),![];continue;case'1':if(!FLfile[_0x2f4f1d(0x216)](_0x4c8c74))return alert('⛔\x20[Rocco\x20Security\x20Alert]\x0a\x0aAccess\x20Denied:\x20No\x20Active\x20Subscription\x20found!\x0aPlease\x20open\x20Rocco\x20Master\x20Panel\x20and\x20verify\x20your\x20license.'),![];continue;case'2':var _0x448ecb=0x1505;continue;case'3':var _0x430fcf=_0x5c2bf2[_0x2f4f1d(0x1ef)](_0x5c2bf2[_0x2f4f1d(0x1ef)](_0x5c2bf2[_0x2f4f1d(0x1f6)](_0x308a8e,'#')+_0x466d35,'#'),_0x298949);continue;case'4':for(var _0x5c7b79=0x0;_0x5c7b79<_0x430fcf['length'];_0x5c7b79++){_0x146a7e=_0x5c2bf2[_0x2f4f1d(0x1b7)](_0x5c2bf2[_0x2f4f1d(0x203)](_0x146a7e<<0x5,_0x146a7e),_0x430fcf['charCodeAt'](_0x5c7b79)),_0x146a7e|=0x0;}continue;case'5':var _0x1fd5f7=_0x1e1abf?_0x1e1abf[_0x2f4f1d(0x1d5)]('||'):[];continue;case'6':var _0x1e1abf=FLfile['read'](_0x4c8c74);continue;case'7':var _0x466d35=_0x5c2bf2[_0x2f4f1d(0x1a1)](parseFloat,_0x1fd5f7[0x1]||0x0);continue;case'8':var _0x48e7f6=_0x1fd5f7[0x2];continue;case'9':if(_0x5c2bf2[_0x2f4f1d(0x225)](_0x1fd5f7[_0x2f4f1d(0x220)],0x3))return FLfile[_0x2f4f1d(0x198)](_0x4c8c74),_0x5c2bf2[_0x2f4f1d(0x1a1)](alert,_0x5c2bf2['CiRBH']),![];continue;case'10':var _0x4c8c74=_0x5c2bf2[_0x2f4f1d(0x1b7)](fl[_0x2f4f1d(0x1d6)],_0x5c2bf2[_0x2f4f1d(0x21c)]);continue;case'11':if(_0x5c2bf2[_0x2f4f1d(0x23a)](new Date()[_0x2f4f1d(0x217)](),_0x466d35))return FLfile['remove'](_0x4c8c74),_0x5c2bf2[_0x2f4f1d(0x193)](alert,_0x5c2bf2[_0x2f4f1d(0x20d)]),![];continue;case'12':var _0x23d0e8=Math['abs'](_0x146a7e)['toString'](0x10)[_0x2f4f1d(0x207)]();continue;case'13':return!![];case'14':if(_0x15156a!==_0x375075)return _0x5c2bf2[_0x2f4f1d(0x21e)](alert,_0x5c2bf2[_0x2f4f1d(0x239)]),![];continue;case'15':for(var _0x1b1146=0x0;_0x1b1146<_0x308a8e[_0x2f4f1d(0x220)];_0x1b1146++){_0x448ecb=_0x5c2bf2[_0x2f4f1d(0x1f6)](_0x5c2bf2[_0x2f4f1d(0x218)](_0x5c2bf2[_0x2f4f1d(0x1e7)](_0x448ecb,0x5),_0x448ecb),_0x308a8e[_0x2f4f1d(0x1fc)](_0x1b1146)),_0x448ecb|=0x0;}continue;case'16':var _0x375075=_0x1fd5f7[0x0];continue;case'17':var _0x146a7e=0x1505;continue;case'18':var _0x15156a=Math[_0x2f4f1d(0x1d8)](_0x448ecb)[_0x2f4f1d(0x1ce)](0x10)[_0x2f4f1d(0x207)]();continue;case'19':var _0x308a8e=fl[_0x2f4f1d(0x1d6)][_0x2f4f1d(0x1e0)]();continue;case'20':var _0x298949=_0x5c2bf2[_0x2f4f1d(0x1e2)];continue;}break;}}());if(!_0xb0ae81)return;var _0x543905=function(_0x53de2e){try{fl['trace'](_0x53de2e);}catch(_0xfacee5){}},_0x1d11eb=fl[_0xa5ae11(0x1cc)]();if(!_0x1d11eb){_0x5c2bf2[_0xa5ae11(0x1a0)](alert,_0x5c2bf2[_0xa5ae11(0x205)]);return;}var _0x250d3e=_0x1d11eb[_0xa5ae11(0x1bb)]();if(!_0x250d3e){_0x5c2bf2[_0xa5ae11(0x1e8)](alert,_0x5c2bf2[_0xa5ae11(0x233)]);return;}var _0x5b73ab=_0x250d3e[_0xa5ae11(0x1af)]();if(!_0x5b73ab||_0x5c2bf2[_0xa5ae11(0x225)](_0x5b73ab[_0xa5ae11(0x220)],0x3)){_0x5c2bf2[_0xa5ae11(0x1a8)](alert,_0xa5ae11(0x1ba));return;}var _0x48992d=_0x5c2bf2[_0xa5ae11(0x1cf)](_0x3c73dc);if(!_0x48992d){_0x543905(_0xa5ae11(0x1be));return;}var _0x22acde=_0x48992d[_0xa5ae11(0x1eb)],_0x40ace8=_0x48992d[_0xa5ae11(0x1ac)];try{_0x5c2bf2['tnQAN'](_0x543905,_0x5c2bf2[_0xa5ae11(0x1c6)]),_0x5c2bf2[_0xa5ae11(0x1a8)](_0x543905,_0x5c2bf2[_0xa5ae11(0x22a)]),_0x5c2bf2['WBbbc'](_0x543905,_0x5c2bf2['Wucbd']);var _0x550195=Math[_0xa5ae11(0x1f3)](_0x5c2bf2[_0xa5ae11(0x1ad)](_0x5b73ab[_0xa5ae11(0x220)],0x3)),_0x2afc6d=[];for(var _0x1fa053=0x0;_0x1fa053<_0x550195;_0x1fa053++){var _0x3ec3ee=_0x5b73ab[_0x5c2bf2[_0xa5ae11(0x1f9)](_0x1fa053,0x3)],_0x1f22bf=_0x5b73ab[_0x1fa053*0x3+0x1],_0x18c5e0=_0x5b73ab[_0x5c2bf2[_0xa5ae11(0x218)](_0x5c2bf2[_0xa5ae11(0x1f9)](_0x1fa053,0x3),0x2)];if(_0x5c2bf2[_0xa5ae11(0x1f1)](_0x3ec3ee,0x0)||_0x5c2bf2[_0xa5ae11(0x199)](_0x3ec3ee,_0x250d3e[_0xa5ae11(0x229)][_0xa5ae11(0x220)]))continue;var _0xf5b540=_0x250d3e[_0xa5ae11(0x229)][_0x3ec3ee];if(!_0xf5b540||_0xf5b540['locked']){if(_0xf5b540&&_0xf5b540['locked'])_0x5c2bf2[_0xa5ae11(0x194)](_0x543905,_0x5c2bf2[_0xa5ae11(0x1b9)](_0x5c2bf2['JHpix'](_0x5c2bf2[_0xa5ae11(0x214)],_0xf5b540['name']),'\x27.'));continue;}if(_0x5c2bf2[_0xa5ae11(0x223)](_0xf5b540[_0xa5ae11(0x1ed)],_0x5c2bf2['xuzcH'])||_0xf5b540[_0xa5ae11(0x1ed)]===_0x5c2bf2[_0xa5ae11(0x1ea)])continue;if(!_0xf5b540[_0xa5ae11(0x230)]||_0x5c2bf2[_0xa5ae11(0x1db)](_0xf5b540['frames']['length'],0x0))continue;_0x2afc6d[_0xa5ae11(0x19a)]({'layerIdx':_0x3ec3ee,'layerName':_0xf5b540[_0xa5ae11(0x232)],'startFrame':_0x1f22bf,'endFrame':_0x18c5e0});}var _0x3bc2c9=_0x2afc6d[_0xa5ae11(0x220)];if(_0x3bc2c9<0x2){_0x5c2bf2['xXqjv'](alert,_0x5c2bf2[_0xa5ae11(0x1bd)]);return;}var _0x2f331e=0x0;for(var _0x12da49=0x0;_0x5c2bf2[_0xa5ae11(0x1e9)](_0x12da49,_0x3bc2c9);_0x12da49++){var _0xb52bd2=_0x5c2bf2[_0xa5ae11(0x212)][_0xa5ae11(0x1d5)]('|'),_0x30351c=0x0;while(!![]){switch(_0xb52bd2[_0x30351c++]){case'0':_0x222a82[_0xa5ae11(0x1a3)]=_0x1d4189;continue;case'1':if(_0x5c2bf2[_0xa5ae11(0x231)](_0x1d4189,0x0))try{var _0x7771c=_0x5c2bf2[_0xa5ae11(0x1c9)][_0xa5ae11(0x1d5)]('|'),_0x32ddf0=0x0;while(!![]){switch(_0x7771c[_0x32ddf0++]){case'0':_0x250d3e[_0xa5ae11(0x1c2)](_0x222a82[_0xa5ae11(0x20c)],_0x5c2bf2['sunIk'](_0x222a82['startFrame'],0x1),!![]);continue;case'1':_0x250d3e[_0xa5ae11(0x22c)](_0x222a82['layerIdx']);continue;case'2':_0x5c2bf2['qXAWr'](_0x543905,_0x5c2bf2['osbWW'](_0x5c2bf2[_0xa5ae11(0x221)](_0x5c2bf2[_0xa5ae11(0x1a5)](_0x5c2bf2['UsQPo'](_0x5c2bf2[_0xa5ae11(0x20b)](_0x5c2bf2[_0xa5ae11(0x203)](_0x5c2bf2[_0xa5ae11(0x20a)],_0x222a82[_0xa5ae11(0x21a)]),_0x5c2bf2['DBXeo']),_0x1d4189),_0xa5ae11(0x1b0)),_0x5c2bf2[_0xa5ae11(0x1ab)](_0x5c2bf2[_0xa5ae11(0x20b)](_0x222a82['startFrame'],0x1),_0x1d4189)),')'));continue;case'3':_0x2f331e++;continue;case'4':_0x250d3e['insertFrames'](_0x1d4189,![]);continue;}break;}}catch(_0x4cdb15){_0x5c2bf2[_0xa5ae11(0x194)](_0x543905,_0xa5ae11(0x219)+_0x222a82[_0xa5ae11(0x21a)]+_0x5c2bf2[_0xa5ae11(0x206)]+_0x4cdb15[_0xa5ae11(0x1ce)]());}else _0x5c2bf2['OCiPx'](_0x543905,_0x5c2bf2['lAIPc'](_0x5c2bf2[_0xa5ae11(0x1df)](_0x5c2bf2[_0xa5ae11(0x20a)],_0x222a82[_0xa5ae11(0x21a)]),_0x5c2bf2['mOBpc']));continue;case'2':_0x5c2bf2[_0xa5ae11(0x1db)](_0x40ace8,_0x5c2bf2[_0xa5ae11(0x234)])?_0x1d4189=_0x5c2bf2[_0xa5ae11(0x1bc)](_0x12da49,_0x22acde):_0x1d4189=_0x5c2bf2[_0xa5ae11(0x237)](_0x5c2bf2[_0xa5ae11(0x1cd)](_0x5c2bf2['wyKqk'](_0x3bc2c9,0x1),_0x12da49),_0x22acde);continue;case'3':var _0x222a82=_0x2afc6d[_0x12da49];continue;case'4':var _0x1d4189=0x0;continue;}break;}}_0x5c2bf2[_0xa5ae11(0x194)](_0x543905,_0xa5ae11(0x208)),_0x543905(_0x5c2bf2[_0xa5ae11(0x19b)]('\x20\x20SUCCESS:\x20Applied\x20Overlapping\x20Action\x20across\x20'+_0x3bc2c9,_0xa5ae11(0x1da))),_0x5c2bf2[_0xa5ae11(0x21e)](_0x543905,_0xa5ae11(0x20e));var _0x9b14f2=_0x5c2bf2[_0xa5ae11(0x223)](_0x40ace8,_0x5c2bf2[_0xa5ae11(0x234)])?'Top-to-Bottom\x20(Cascading\x20Down)':_0x5c2bf2['RBslz'];_0x5c2bf2[_0xa5ae11(0x1c5)](alert,_0x5c2bf2[_0xa5ae11(0x1b9)](_0x5c2bf2['cguwT'](_0x5c2bf2['pPvoO'](_0x5c2bf2[_0xa5ae11(0x1a7)](_0x5c2bf2[_0xa5ae11(0x1b7)](_0x5c2bf2[_0xa5ae11(0x215)](_0x5c2bf2[_0xa5ae11(0x1f8)](_0x5c2bf2[_0xa5ae11(0x213)](_0x5c2bf2[_0xa5ae11(0x1ec)],_0x5c2bf2[_0xa5ae11(0x1d4)]),_0x5c2bf2[_0xa5ae11(0x1f0)])+_0x3bc2c9,'\x0a')+_0x5c2bf2[_0xa5ae11(0x1c0)],_0x22acde),_0x5c2bf2[_0xa5ae11(0x1f7)])+_0x5c2bf2[_0xa5ae11(0x1b4)],_0x9b14f2),'\x0a\x0a'),_0x5c2bf2[_0xa5ae11(0x1a6)]));}catch(_0x43766f){_0x5c2bf2[_0xa5ae11(0x238)](alert,_0x5c2bf2[_0xa5ae11(0x1b9)](_0xa5ae11(0x1dc),_0x43766f[_0xa5ae11(0x1ce)]()));}function _0x3c73dc(){var _0x168ede=_0xa5ae11,_0x238681=_0x5c2bf2[_0x168ede(0x1d9)]['split']('|'),_0x2d80f1=0x0;while(!![]){switch(_0x238681[_0x2d80f1++]){case'0':return null;case'1':try{if(_0x5c2bf2[_0x168ede(0x223)](typeof fl[_0x168ede(0x1b5)],_0x168ede(0x1d3)))_0x4b03a6=fl['xmlPanelFromString'](_0x37f0bc);else _0x5c2bf2['RFobC'](typeof _0x1d11eb['xmlPanelFromString'],_0x5c2bf2[_0x168ede(0x1e6)])&&(_0x4b03a6=_0x1d11eb['xmlPanelFromString'](_0x37f0bc));}catch(_0x4c4efc){_0x4b03a6=null;}continue;case'2':var _0x37f0bc=_0x5c2bf2[_0x168ede(0x1f6)](_0x5c2bf2[_0x168ede(0x1ef)](_0x5c2bf2[_0x168ede(0x218)](_0x5c2bf2[_0x168ede(0x22f)](_0x5c2bf2[_0x168ede(0x197)](_0x5c2bf2[_0x168ede(0x1d7)](_0x5c2bf2[_0x168ede(0x22f)](_0x5c2bf2['sunIk'](_0x168ede(0x1f5)+_0x5c2bf2['tTlFN']+_0x5c2bf2[_0x168ede(0x21f)],_0x168ede(0x196)),_0x5c2bf2[_0x168ede(0x1a4)])+_0x5c2bf2['yaMdm'],_0x5c2bf2[_0x168ede(0x201)]),_0x168ede(0x19c)),_0x5c2bf2[_0x168ede(0x1c1)])+'\x20\x20\x20\x20<label\x20value=\x22Cascading\x20Stagger\x20Direction:\x22/>\x0a'+_0x5c2bf2[_0x168ede(0x228)]+_0x5c2bf2[_0x168ede(0x19d)],_0x5c2bf2[_0x168ede(0x1b6)])+_0x5c2bf2['Abmal'],_0x5c2bf2['dOQIG']),_0x5c2bf2[_0x168ede(0x1b1)]);continue;case'3':var _0x4b03a6=null;continue;case'4':if(_0x4b03a6&&_0x4b03a6['dismiss']===_0x5c2bf2[_0x168ede(0x1ee)]){var _0x506f0d=_0x5c2bf2[_0x168ede(0x1bf)](parseInt,_0x4b03a6['delayStep'],0xa);if(_0x5c2bf2[_0x168ede(0x1a1)](isNaN,_0x506f0d)||_0x5c2bf2[_0x168ede(0x225)](_0x506f0d,0x1))_0x506f0d=0x1;return{'delayStep':_0x506f0d,'direction':_0x4b03a6[_0x168ede(0x236)]||_0x5c2bf2['CMWsq']};}continue;}break;}}}()));