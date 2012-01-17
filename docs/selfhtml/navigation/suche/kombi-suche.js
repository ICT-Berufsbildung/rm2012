// Javascript-Suchmaschine, Version SH-8-6 (20.11.2005)
// angepaßt für Selfhtml 8.1.1
// Autor: Oliver García
//
// Dieses Programm ist urheberrechtlich geschützt. Falls Sie Interesse
// haben, eine auf Ihre Datenbestände angepaßte Version dieser Suchmaschine
// in Lizenz zu erwerben, erhalten Sie unter mailto:suchmaschine@ogu.de
// mehr Informationen

kapitelgrafik="src/refkap.gif\""
dokumentgrafik="src/dok.gif\""
Zugriff_verweigert="Zugriff verweigert"
Domain_Problem="Es ist ein Fehler aufgetreten:\n\nDer untere Frame ist nicht in der gleichen Domain wie die Suchmaschine. Sie haben zwei Möglichkeiten, den Fehler zu beheben:\n\nEntweder gehen Sie mit der Rückwärtstaste soweit zurück, bis im unteren Frame wieder eine Selfhtml-Seite angezeigt wird\n\noder\n\nSie laden die Suchmaschine neu, indem Sie mit der Maus das Adressfeld aktivieren und die Eingabetaste drücken.\n\nDieser Fehler tritt meistens dann auf, wenn Sie den Schalter \"Treffer markieren\" betätigen, bevor die Seite vollständig geladen ist."
Allgemeiner_Fehler1="Es ist ein Fehler aufgetreten. Die Fehlerangaben lauten:\n\n"
Allgemeiner_Fehler2="\n\nWenn dieser Fehler häufiger auftritt, so melden Sie ihn bitte unter Angabe der Fehlermeldung und der Umstände, unter denen er auftritt, an die Email-Adresse: suchmaschine@ogu.de"
Phrasensuche_Wort="Phrasensuche"
Treffer_Wort="Treffer"
Ergebnisse_Wort="Ergebnisse"
Suchen_Wort="Suchen"
Treffer_markieren_Txt="Treffer markieren"
Treffer_markieren_Title_Txt="Klicken Sie hier um nach dem Laden einer Ergebnisseite dort die Treffer zu markieren"
Es_wurde_keine_Seite_gef_Txt="<p style=\"margin-top:20px\">Kein Treffer."
Es_wurde_keine_weitere_Seite_gef_Txt="<p>Es wurde kein weiterer Treffer gefunden."
weitere_Txt="weitere "
Suche_abgeschlossen_Txt="Suche abgeschlossen"
Vorherige_Wort="vorherige "
Kein_Suchbegriff_Txt="Es muss mindestens ein positiver Suchbegriff eingegeben werden"
oder_Wort="oder"
und_Wort="und"
nicht_vorkommen_Txt="nicht vorkommen"
nicht_vorkommt_Txt="nicht vorkommt"
Suche_nach_Txt="Suche nach"
Inkompatibler_Browser_Txt="Hinweis: Diese Suchmaschine ist mit dem gegenwärtig verwendeten Browser leider nicht kompatibel. Bitte benutzen Sie stattdessen die Online-Suche."
Suche_laeuft_Txt="Suche läuft..."
Mindestens_ein_Zeichen_Txt="Es muss mindestens ein Zeichen eingegeben werden."
Bitte_warten_Txt="Bitte warten"
Suche_bitte_warten_Txt="Suche läuft, bitte warten"
Einstellungen_ab_naechste_Suche_gueltig_Txt="Die neuen Einstellungen sind ab der nächsten Suche gültig"
Seiten_in_denen_dieser_Ausdruck_vorkommt_Txt="Abschnitte, in denen dieser Ausdruck vorkommt "
Wortanfangsuche_Wort="Wortanfangsuche"
Seiten_in_denen_mindestens_einer_der_Txt="Abschnitte, in denen mindestens einer der "
beiden_Wort="beiden"
beide_Wort="beide"
ausdruecke_vorkommt_Txt=" Ausdrücke vorkommt "
ausdruecke_vorkommen_Txt=" Ausdrücke vorkommen "
zsg_ausdruck_vorkommt_Txt="&raquo;<BR>(Seiten, in denen dieser zusammengesetzte Ausdruck vorkommt "
Seiten_in_denen_Txt="Abschnitte, in denen "
Wortanfaenge_Txt=" - Wortanfänge)"
alle_Wort="alle "
exakte_Suche_Txt=" - exakte Suche)"
Hilfe_Wort="Hilfe"
Cookie_Name="Selfhtml8"
Bereichsnamen = new Array("Editorial", "Einführung", "HTML/XHTML", "CSS", "XML", "JavaScript", "DHTML", "Perl", "PHP", "Internationalisierung", "Grafik", "Projektverwaltung", "Webserver/CGI", "Div. Ergänzungen", "Fertige Layouts", "", "", "Häufige Fragen")

archiv = "../../"
ie4 = (document.all)? true:false
ie5 = ((document.getElementById) && (document.all))
nc4 = (document.layers)? true:false
nc45 = (nc4 && navigator.appVersion.substr(2).match(/^[1-9]|^0[5-9]/))? true:false
mz5 = ((document.getElementById) && (!document.all) && (document.documentElement))
ie4mz = (ie4 || mz5)
zeigedetails=true
bildschirm=50
bunt=0
aktiv= new Array()
UrlZwischenspeicherung= new Array()
for (x=0; x<i.length; x++) aktiv[x]=(i[x] ? true : false)
aktuellerindex=1
interneansicht=0
oeffnen=0
vordatei=""
f1="<B>"
f2="</B>"
farbe = new Array("#FCE463","#FFA500","#D2B48C","#66CDAA","#8FBC8F")
//if (nc45 && top.window.name.match(/0s$/)) window.setTimeout("Konfigurieren()",500)

if (document.cookie) {
   cook=document.cookie
   if (cook.indexOf(Cookie_Name+"=")>-1) {
      cook=cook.substr(cook.indexOf(Cookie_Name+"=")+10)
      cook=cook.replace(/;.*/,"")
      ck=cook.split("_")
      ck2=ck[0].split("+")
      aktiv= new Array()
      for (x=0; x<ck2.length-1; x++) {
         aktiv[ck2[x].split("-")[0]]=(i[ck2[x].split("-")[0]] && parseInt(ck2[x].split("-")[1]))
      }
      abfolge()
      zeigedetails=(ck[0] == 1)
      bildschirm=parseInt(ck[1])
      oeffnen=parseInt(ck[2])
      if (parseInt(ck[3]) == 0) {
         f1=""
         f2=""
      }
      if (ie4mz) bunt=parseInt(ck[4])
      if (isNaN(bunt)) bunt=0
   }
}

window.onerror = Fehler

function Fehler(Nachricht,Datei,Zeile) {
   meinFehler = Nachricht+"\n"+Datei+"\n"+Zeile
   if (ie4 && Nachricht == Zugriff_verweigert) {
      alert(Domain_Problem)
   }
   else {
      alert(Allgemeiner_Fehler1+meinFehler+Allgemeiner_Fehler2)
   }
   return true
}

function datei(temp,ang,ue,det,l,l2) {
   det=""
   if ((zeigedetails && !(exkt && !oder_s)) || zsg) {
      if (!indokg[temp]) indokg[temp]=indok[temp].replace(/#$/,"").replace(/~|#/g,", ")
      if (indokg[temp]!="") {
         if (zsg && !exkt) det=" ("+indokg[temp].small()+")"
         else det=" ("+indokg[temp].italics().small()+")"
      }
   }
   alttemp=temp
   titel = new Array()
   titel[1]=parent.d[parent.dz[temp]].split("*")[1]
   if (!parent.dz[temp]) return ""
   uurl=url(parent.dz[temp])
   if (!ang) ang=""
   if (ue) ue="<P><U>"+ue.italics()+"</U><P>"
   else ue=""
   l2=""
   if (oeffnen==2) l2=" target=\"_blank\""
   if (oeffnen==1) l2=" target=\"_Ergebnisse\""

   einruecken=""
   einruecken+=vordatei
   vordatei=""
   ausruecken=""
   tr=parent.dz[temp].split("-")
   tr2=""
   ebausr=0
   for (x=0; x<tr.length-1; x++) {
      tr2+="-"+tr[x]
      tr3=tr2.substr(1)
      abstand=""
      zusatzdd = "<dd><dl>"
      if (x==0) {
         abstand=" class=\"NeuesKapitel\""
         zusatzdd = "<dd class=\"NeuesKapitel\"><dl>"
      }
      if (tr3!=eb[x])  {
         if (x==0) eb= new Array()
          if (EbeneAngezeigt[tr3]) {
            dt--
            einruecken+=dts()+zusatzdd
         }
         else if (itext[tr3]) {
            einruecken+=aausruecken+dts()+zusatzdd+"<dt"+abstand+">"+img(-1, tr3)+zieladresse(archiv+itext[tr3].split("@")[1], f1+parent.d[tr3].split("*")[1]+f2, l2)+itext[tr3].split("@")[0]
         }
         else einruecken+=dts()+zusatzdd+"<dt"+abstand+">"+img(-1, tr3)+f1+parent.d[tr3].split("*")[1]+f2
         dt++
      }
      else altebausr--
      aausruecken=""
      eb[x]=tr3
      ebausr++
   }
   for (x=tr.length; x<7; x++) {
      eb[x]=""
   }
   while (altebausr>0) {
     ausruecken+="</dl></dd>"
      altebausr--
   }
   l=zieladresse(archiv+uurl, f1+titel[1].replace(/^SELFHTML: /,"")+f2, l2)
   altebausr=ebausr
   vordatei=""
   if (parent.dz[temp].split("-").length<3) {
      itext[parent.dz[temp]]=det+"@"+uurl
      aausruecken=ausruecken
      if (parent.dz[z[ergebniszaehler+1]] && !parent.dz[z[ergebniszaehler+1]].indexOf(parent.dz[temp])) {
         if (tr.length == 1) return einruecken
         return ausruecken+einruecken
      }
   }
   EbeneAngezeigt[parent.dz[temp]]=1
   return ue+ausruecken+einruecken+dts()+"<dd><dl><dt>"+img(temp)+l+det+"</dt></dl></dd>"+ang
}

function zieladresse(url, text, target) {
   return "<A HREF=\""+url+"\""+target+">"+text+"</A>"
}

function dts() {
   if (dt>0) {
      dt--
      return "</dt>"
   }
   else return ""
}

function img(temp0, temp,tr) {
   if (temp0 == -1) {
      tr=temp
   }
   else {
      tr=parent.dz[temp0]
   }
   trl=tr.split("-").length
   if (trl > 1 && parent.d[tr+"-0"]) trl=1
   if (trl==1) return "<img src=\""+archiv+kapitelgrafik+" width=16 height=13 border=0 alt=\"\">&nbsp;"
   return "<img src=\""+archiv+dokumentgrafik+" width=15 height=10 border=0 alt=\"\">&nbsp;"
}

function url(temp,temp2,temp3) {
   if (UrlZwischenspeicherung[temp]) return UrlZwischenspeicherung[temp]
   temp2=parent.d[temp].split("*")[0]
   if (temp=="undefined") return ""
   if (temp2.indexOf("#") == 0) {
      temp3=temp.replace(/-[^-]*$/,"")
      temp2=url(temp3)+temp2
   }
   else if (!temp2.match(/^\|/)) {
      temp3=temp.replace(/-[^-]*$/,"")
      if (parent.d[temp3+"-0"].split("*")[0]) {
         temp2=url(temp3+"-0")+temp2
      }
      else {
         temp2=url(temp3)+temp2
      }
   }
   temp2 = temp2.replace(/^\|/,"")
   UrlZwischenspeicherung[temp]= temp2
   return temp2
}

function RF_a(temp,x,treffer,suchein) {
   if (indokg[temp]) return 1
   window.defaultStatus = Phrasensuche_Wort+" ("+(ergebniszaehler+1)+")"
   indok=new Array()
   such2=new Array()
   such3=new Array()
   for (uz=0; uz<und.length; uz++) {
      bs=af[und[uz]].split(",")
      for (aff in bs) {
         suchein="+"+parent.w[bs[aff]].replace(/!\-/g,"-")+"+"
         ssin="/\\+"+temp+"-[^+]*/g"
         sserg=escape(suchein).match(eval(ssin))
         if (sserg) {
            such2[uz]=sserg[0].substr(sserg[0].indexOf("-")+1)
            stl=such2[uz].split("-")
            x=und.length-uz
            for (ss3=0; ss3<stl.length; ss3++) {
               x+=parseInt(stl[ss3])
               such3[x]=(such3[x] ? such3[x]+" " : " ")+html(bs[aff])
            }
         }
      }
   }
   such4=new Array()
   for (d in such3) {
      if ((such3[d]+" ").match(/ /g).length==und.length+1) {
         vh=such3[d].substr(1)
         such4[vh]=(such4[vh] ? such4[vh]+1 : 1)
      }
   }
   treffer=""
   for (d in such4) {
      treffer+=" "+und_Wort+" "+html(d).italics()
      if (such4[d]>1) treffer+=" - "+such4[d]+" "+Treffer_Wort+" -"
   }
   if (treffer>"") {
      indok[temp]=treffer.substr(und_Wort.length+2)
      return 1
   }
   return 0
}

function RF(temp,x,treffer,suchein) {
   if (indokg[temp]) return 1
   window.defaultStatus = Phrasensuche_Wort+" ("+(ergebniszaehler+1)+")"
   indok=new Array()
   such2=new Array()
   such3=new Array()
   for (uz=0; uz<und.length; uz++) {
      suchein="+"+parent.w[und[uz]].replace(/!\-/g,"-")+"+"
      ssin="/\\+"+temp+"-[^+]*/g"
      sserg=escape(suchein).match(eval(ssin))
      if (sserg) stl=sserg[0].substr(sserg[0].indexOf("-")+1).split("-")
      else return 0
      x=und.length-uz
      for (ss3=0; ss3<stl.length; ss3++) {
         x+=parseInt(stl[ss3])
         such3[x]=(such3[x] ? such3[x]+"" : "")+"-"
      }
   }
   treffer=0
   for (x in such3) if (such3[x].length==und.length) treffer++
   if (treffer>1) indok[temp]=treffer+" "+Treffer_Wort
   else if (treffer>0) indok[temp]=""
   return treffer
}

function Numsort(a,b) {
   return a-b
}

function vgl(temp,rw) {
   tl=temp.split(",")
   d1=new Array()
   for (tx in tl) {
      if (!parent.w[tl[tx]]) return "---"
      else {
         tl[tx]=escape(parent.w[tl[tx]]).replace(/-[^+]*/g,"")
         d2 = tl[tx].split("+")
         for (d3 in d2) {
            DokNr=DokNrAuswertung(d2[d3])
            d1[DokNr]=(d1[DokNr] ? d1[DokNr] : "")+"-"
         }
      }
   }
   var rueckgabe=""
   if (rw==1) {
      for (x in d1) if (d1[x].length==tl.length) rueckgabe=","+x+rueckgabe
   }
   else {
      for (x in d1) if (d1[x].length==tl.length) rueckgabe+=","+x
   }
   if (rueckgabe>"") return rueckgabe.substr(1)
   else return "---"
}

function kleiner(temp,x,k) {
   x=-1
   tl=temp.split(",")
   d1=new Array()
   as=new Array()
   for (tx in tl) {
      tl[tx]=tl[tx].replace(/^-/,"")
      for (aff in parent.w) {
         if (String(aff).indexOf(tl[tx])==0) af[tl[tx]]=(af[tl[tx]] ? af[tl[tx]] : "")+","+aff
      }
      if (af[tl[tx]]) af[tl[tx]]=af[tl[tx]].substr(1)
      else return "---"
      x++
      bs=af[tl[tx]].split(",")
      as[tl[tx]]=""
      for (aff in bs) as[tl[tx]]+="+"+escape(exakt(bs[aff])).replace(/-[^+]*/g,"")
   }
   va=""
   for (x in as) if (va=="" || as[x].length<va.length) {
      va=as[x]
      k=x
   }
   return "/\\+("+va.substr(1).replace(/\+/g,"|").replace(/%21/g,"")+")(%21|)-/g"
}

function vgl_a_d(temp,x,f,d,y,va,kl,zaehler,ri,DokNr) {
   indok=new Array()
   tl=temp.split(",")
   kl=kleiner(temp)
   if (kl == "---") return "---"
   zaehler=2
   for (x in tl) {
      for (f in parent.w) {
         if (String(f).indexOf(tl[x])==0) {
            ds=escape(parent.w[f]).replace(/-[^+]*/g,"")
            if (kl.length<4000) {
               vat=("+"+ds+"+").replace(/\+/g,"-+").match(eval(kl))
               if (vat) ds=vat.join("").replace(/-\+/g,"+").replace(/^\+/g,"").replace(/-$/g,"")
               else continue
            }
            d=ds.split("+")
            for (y in d) {
               DokNr=DokNrAuswertung(d[y])
               indok[DokNr]=(indok[DokNr] ? indok[DokNr] : "")+html(f)+"~"
            }
         }
      }
      for (y in indok) indok[y]=indok[y].replace(/~$/,"#")
   }
   rueckgabe=new Array()
   ri=0
   for (y in indok) {
      if (indok[y].split("#").length==und.length+1) {
         rueckgabe[ri++]=y
      }
   }
   rueckgabe.sort(Numsort)
   if (ri>0) return rueckgabe.join(",")
   else return "---"
}

function DokNrAuswertung(DokNr) {
   if (DokNr.match(/%21$/)) {
      DokNr=DokNr.replace(/%21$/,"")
      BesteTreffer[BesteTreffer.length]=DokNr
   }
   return DokNr
}

function vgl_a(temp,tmp2,k,tmp3,x) {
   x=-1
   tl=temp.split(",")
   d1=new Array()
   as=new Array()
   for (tx in tl) {
      tl[tx]=tl[tx].replace(/^-/,"")
      if (!af[tl[tx]]) {
         for (aff in parent.w) {
            if (String(aff).indexOf(tl[tx])==0) {
               af[tl[tx]]=(af[tl[tx]] ? af[tl[tx]] : "")+","+aff
            }
         }
         if (af[tl[tx]]) {
            af[tl[tx]]=af[tl[tx]].substr(1)
         }
         else return "---"
         x++
      }
      bs=af[tl[tx]].split(",")
      as[tl[tx]]=""
      for (aff in bs) as[tl[tx]]+="+"+escape(exakt(bs[aff])).replace(/-[^+]*/g,"")
      as[tl[tx]]+="+"
   }
   va=""
   for (x in as) if (va=="" || as[x].length<va.length) {
      va=as[x]
      k=x
   }
   va=va.substr(1)
   as[k]=""
   va2=va.split("+")
   var rueckgabe=""
   enth=false
   for (x in va2) {
      DokNr=DokNrAuswertung(va2[x])
      if (DokNr == "") continue
      enth=true
      for (y in as) {
         if (as[y] == "") continue
         if (as[y].indexOf("+"+DokNr+"+") == -1) {
            enth=false
            break
         }
      }
      if (enth) rueckgabe=rueckgabe+","+DokNr
   }
   tmp3=rueckgabe.substr(1).split(",").sort(Numsort)
   rueckgabe=""
   for (x in tmp3) {
      if (tmp2==tmp3[x]) continue
      rueckgabe+=","+tmp3[x]
      tmp2=tmp3[x]
   }
   rueckgabe=rueckgabe.substr(1)
   if (rueckgabe>"") return rueckgabe
   else return "---"
}

function oder(temp,suchenach,tmp2,k,tmp3) {
   indok=new Array()
   var x=-1
   var zz5=0
   od=new Array()
   as=new Array()
   for (tx in temp) {
      if (parent.w[temp[tx]]) {
         tmp2=escape(parent.w[temp[tx]]).replace(/-[^+]*/g,"")
         tmp3=tmp2.split("+")
         for (x in tmp3) {
            DokNr=DokNrAuswertung(tmp3[x])
            indok[DokNr]=(indok[DokNr] ? indok[DokNr] : "")+html(unescape(temp[tx]))+"~"
         }
      }
   }
   rueckgabe=new Array()
   ri=0
   for (y in indok) {
      rueckgabe[ri++]=y
      indok[y]=indok[y].replace(/~$/,"")
   }
   rueckgabe.sort(Numsort)
   if (ri>0) return rueckgabe.join(",")
   else return "---"
}

function ls(a,b) {
   return b.split(" ").length-a.split(" ").length
}

function n(temp) {
   while (temp.length<3) temp="0"+temp
   return temp
}

function oder_a_d(temp,x,f,d,y,ri) {
   indok=new Array()
   tl=temp.split(",")
   for (x in tl) {
      for (f in parent.w) {
         if (String(f).indexOf(tl[x])==0) {
            ds=escape(parent.w[f]).replace(/-[^+]*/g,"")
            d=ds.split("+")
            for (y in d) {
               DokNr=DokNrAuswertung(d[y])
               indok[DokNr]=(indok[DokNr] ? indok[DokNr] : "")+html(f)+"~"
            }
         }
      }
      for (y in indok) indok[y]=indok[y].replace(/~$/,"#")
   }
   rueckgabe=new Array()
   ri=0
   for (y in indok) {
      if (indok[y].split("#").length>0) {
         rueckgabe[ri++]=y
      }
   }
   rueckgabe.sort(Numsort)
   if (ri>0) return rueckgabe.join(",")
   else return "---"
}

function oder_a(temp,kurz,tmp2,tmp3,x) {
   x=-1
   tl=temp.split(",")
   d1=new Array()
   as=new Array()
   var o_a=""
   for (tx in tl) if (!as[tl[tx]]) for (aff in parent.w) {
      if (String(aff).indexOf(tl[tx])==0) {
         o_a+="+"+escape(parent.w[aff]).replace(/-[^+]*/g,"")
      }
   }
   if (kurz) return o_a+"+"
   if (o_a=="") return "---"
   tmp3=o_a.substr(1).split("+")
   tmp3.sort(Numsort)
   rueckgabe=""
   for (x in tmp3) {
      if (tmp2==tmp3[x]) continue
      rueckgabe+=","+tmp3[x]
      tmp2=tmp3[x]
   }
   return rueckgabe.substr(1)
}

function oder_e(temp) {
   var x=-1
   tl=temp.split(",")
   var o_a=""
   for (tx in tl) o_a+="+"+escape(exakt(tl[tx])).replace(/-[^+]*/g,"")
   return o_a+"+"
}

function exakt(temp) {
   if (parent.w[temp]) return parent.w[temp]
   else return "---"
}

function Dateikopf() {
   if (nc4) document.Suchfeld.Absendeknopf.blur()
}

function ZeigeBesteTreffer(zwischenergebnisse) {
   if (BeschraenkungAufBereich!=0) return ""
   if (zsg || ohne0>"") return ""
   if (BesteTreffer.length == 0) return ""
   else if (BesteTreffer.length == 1) dekl="r"
   else dekl=""
   zwischenergebnisse = ","+zwischenergebnisse+","
   var temp = ""
   var vorher=0
   BesteTreffer.sort().reverse()
   for (x=0; x<BesteTreffer.length; x++) {
      if (zwischenergebnisse.indexOf(","+BesteTreffer[x]+",") == -1) continue
      if (vorher==BesteTreffer[x]) continue
      temp += parent.d[parent.dz[BesteTreffer[x]]].split("*")[1].link(archiv+url(parent.dz[BesteTreffer[x]]))+" &nbsp;|&nbsp; "
      vorher=BesteTreffer[x]
   }
   if (temp == "") return ""
   return "<div class=BesteTreffer id=BesteTreffer><div id=BesteTreffer2><b>Beste"+dekl+" Treffer:</b><br>"+temp.substr(0,temp.length-15)+"</div></div>"
}

function Dateifuss(ausgabe,x) {
   var temp=""
   window.defaultStatus = Suche_abgeschlossen_Txt
   window.setTimeout("window.defaultStatus = ''",2000)
   var sf="<input LANGUAGE='JavaScript' type=button onClick='Pruefe()' value='"+Suchen_Wort+"'>"
   if (!ngf) sf+="&nbsp;<input type=button onClick=\"Aendern(und[0]+'|'+und[1])\" value=\""+Treffer_markieren_Txt+"\" title=\""+Treffer_markieren_Title_Txt+"\">"
   if (ie4mz) {
      if (ie4 && !ie5) document.all.Einblenden_ausblenden.innerHTML=sf
      else document.getElementById("Einblenden_ausblenden").innerHTML=sf
   }
   ausruecken=""
   while (altebausr>0) {
      ausruecken+=dts()+"</dl></dd>"
      altebausr--
   }
   ausruecken+="</dl>"
   if (ngf) {
      if (zngf) ausgabe+=Es_wurde_keine_weitere_Seite_gef_Txt
      else ausgabe+=Es_wurde_keine_Seite_gef_Txt
   }
   if (zwischenergebnis) ausgabe+=ausruecken+temp+"<p align=center><b><a href=\"javascript:parent.frames['Suche'].weiter("+(ergebniszaehler)+")\">"+weitere_Txt+Treffer_Wort+"</a></b>"
   else ausgabe+=ausruecken+temp+"<p align=center><b>"+Suche_abgeschlossen_Txt+"</b>"
   document.Suchfeld.Suchenach.blur()
   if (!nc45) parent.frames['x'].location.href="leer.htm"
   DivErgebnis=ausgabe
   parent.frames['Anzeige'].location.href="ergebnis.htm"
}

function ergebnisfensterbelegen() {
   if (!window.DivErgebnis) return
   with (parent.frames['Anzeige'].document) {
      getElementById("trefferbereich").innerHTML=DivErgebnis
      getElementById("reiterbereich").innerHTML=DivReiterbereich
      getElementById("suchenach").innerHTML=DivSuchenach
   }
   BesteTrefferBereichAnpassen()
}

function BesteTrefferBereichAnpassen() {
   var verlaengerung=0
   if (window.opera) verlaengerung=20
   with (parent.frames['Anzeige'].document) if (getElementById("BesteTreffer")) {
      if (getElementById("BesteTreffer2").offsetHeight < getElementById("BesteTreffer").clientHeight) {
         getElementById("BesteTreffer").style.height=getElementById("BesteTreffer2").clientHeight+verlaengerung
      }
   }
}

function weiter(temp) {
   ergebniszaehler=temp
   seitenbeginn[seiteaktuell]=altergebniszaehler
   seiteaktuell++
   zeige(zwischenergebnisse,vorspann)
   parent.frames['x'].location.reload()
}

function zurueck(temp) {
   seiteaktuell=temp
   ergebniszaehler=seitenbeginn[seiteaktuell]
   zeige(zwischenergebnisse,vorspann)
}

function ReiterErstellen(treffer, x, einzeln) {
   zaehler=0
   if (treffer == "---") return ""
   if (zsg || ohne0>"") return ""
   einzeln = treffer.split(",")
   trefferinbereichen = new Array()
//   if (einzeln.length==1) return ""
   for (x=0; x<einzeln.length; x++) {
      bereich=BereichAusDokNr(einzeln[x])
      if (!trefferinbereichen[bereich]) trefferinbereichen[bereich]=1
      else trefferinbereichen[bereich]++
   }
   reiterzustand="reiteraktiv"
   if (BeschraenkungAufBereich>0) reiterzustand="reiterinaktiv"+" onClick=\"parent.frames['Suche'].NurBereich(0)\""
   reiterbereichVorbereiten="<div id=reiterbereich><span class="+reiterzustand+">Alle Treffer ("+einzeln.length+")</span> "
   for (x in trefferinbereichen) {
      reiterzustand="reiterinaktiv"+" onClick=\"parent.frames['Suche'].NurBereich("+(x)+")\""
      if (BeschraenkungAufBereich == x) reiterzustand="reiteraktiv"
      reiterbereichVorbereiten+="<span class="+reiterzustand+">"+Bereichsnamen[x-1]+" ("+trefferinbereichen[x]+")</span> "
   }
   reiterbereichVorbereiten+="</div>"
   return reiterbereichVorbereiten
}

function BereichAusDokNr(DokNr) {
   return parent.dz[DokNr].replace(/-.*/,"")
}

function NurBereich(temp) {
   BeschraenkungAufBereich=temp
   weiter(0)
}

function zeige(temp,text,zl,ausgabe) {
   zwischenergebnisse=temp
   vorspann=text
   if (text) Dateikopf()
   eb = new Array()
   EbeneAngezeigt = new Array()
   altebausr=0
   zl=0
   ngf=0
   dt=0
   if (ergebniszaehler!=0) ausgabe=""
   else ausgabe=ZeigeBesteTreffer(zwischenergebnisse)
   Reiterbereich=ReiterErstellen(zwischenergebnisse)
   with (parent.frames['Anzeige'].document) {
      z=zwischenergebnisse.split(",")
      if (ergebniszaehler!=0) ausgabe+="<p align=center style=\"margin-top:12pt;\"><b><a href=\"javascript:parent.frames['Suche'].zurueck("+(seiteaktuell-1)+")\">"+Vorherige_Wort+bildschirm+" "+Treffer_Wort+"</a></b>"
      ausgabe+="<dl>"
      while ((zwischenergebnisse=="---" || zwischenergebnisse=="") && nd[aktuellerindex+1]) {
         zwischenergebnisse=nachladen()
         if (zwischenergebnisse == "---") ngf=1
      }
      if (!ngf) {
         temp=z.length
         altergebniszaehler=ergebniszaehler
         while (ergebniszaehler < temp && zl < bildschirm) {
            if (z[ergebniszaehler].search(/^[0-9]*$/)==0) { // NC-Sonderbehandlung
               if (ohne0=="" || ohne1.indexOf("+"+z[ergebniszaehler]+"+")==-1) {
                  if (!zsg || (exkt && RF(z[ergebniszaehler])>0) || (!exkt && RF_a(z[ergebniszaehler])>0)) {
                     if (BeschraenkungAufBereich>0 && BereichAusDokNr(z[ergebniszaehler]) != BeschraenkungAufBereich) {
                     }
                     else {
                        ausgabe+=datei(z[ergebniszaehler])+(interneansicht ? " "+(ergebniszaehler)+" ("+z[ergebniszaehler]+")" : "")
                        zl++
                     }
                  }
               }
            }
            ergebniszaehler++
            if (ergebniszaehler == temp) {
               do {
                  weitereergebnisse=nachladen()
               } while (weitereergebnisse=="---" && nd[aktuellerindex+1])
               if (weitereergebnisse == "---") break
               else {
                  zwischenergebnisse+=","+weitereergebnisse
                  z=zwischenergebnisse.split(",")
                  temp=z.length
               }
            }
         }
         if (zl==0) ngf=1
      }
      minus+=mmm
      mmm=0
      if (zwischenergebnis && ngf) zngf=1
      zwischenergebnis=0
      if (ergebniszaehler<temp) zwischenergebnis=1
      if (BeschraenkungAufBereich>0 && trefferinbereichen[BeschraenkungAufBereich] <= bildschirm) zwischenergebnis=0
         if (text) DivSuchenach=text
         else DivSuchenach=""
         DivReiterbereich=Reiterbereich
         Dateifuss(ausgabe)
   }
}

function Suche(ausdruck0) {
   exkt=parent.frames['Suche'].document.Suchfeld.EXAKT[0].checked
   oder_s=parent.frames['Suche'].document.Suchfeld.UNDODER[1].checked
   ausdruck0=ausdruck0.replace(/%22/g,"\"").replace(/  +/g," ").replace(/("?) ("?)$/g,"$1$2").replace(/[,.;:!?]/g,"")
   zsg=ausdruck0.match(/-?"[^"]*"/g)
   ausdruck0=ausdruck0.replace(/-?"[^"]*"/g,"")
   und0=ausdruck0.split(" ")
   ohne0=""
   for (x in und0) {
      if (und0[x].indexOf("-")==0) {
         ohne0+=",_"+und0[x].substr(1)
      }
      else {
         und_++
         und[und_]="_"+und0[x]
      }
   }
   if (typeof und[0] == "undefined") return
   if (und.length==0) {
      alert(Kein_Suchbegriff_Txt)
      parent.frames['Suche'].document.Suchfeld.Suchenach.focus()
      return
   }
   if (ohne0>"") {
      if (exkt) ohne1=oder_e(ohne0.substr(1))
      else ohne1=oder_a(ohne0.substr(1),true)
   }
   var az = (zsg ? zsg.length : 0)+und.length
   if (ohne0>"") ohne_t=unescape(" "+und_Wort+" "+ohne0.replace(/,/g,"</B> "+oder_Wort+" <B>").substr(6+oder_Wort.length).replace(/_/g,"")+"</B> "+(ohne0.split(",").length>2 ? nicht_vorkommen_Txt : nicht_vorkommt_Txt))
   var zaehler1 = 0
   if (zsg) {
      zsg[0]=zsg[0].replace(/"/g,"")
      und = zsg[0].split(" ")
      for (x=0; x<und.length; x++) {
         und[x] = "_"+und[x]
      }
   }
   if (oder_s && !zsg) {
      var befehl=""
      for (x=0; x<und.length; x++) {
         befehl=befehl+","+html(und[x].replace(/"/g,""))
         suchenach+="</B> "+oder_Wort+" <B>"+html(und[x].replace(/"/g,""))
      }
      if (exkt) to=oder(und)
      else {
         odera=1
         if (zeigedetails) to=oder_a_d(und.join(","))
         else to=oder_a(und.join(","))
      }
      zeige(to,Suche_nach_Txt+": <b>"+suchenach.substr(oder_Wort.length+9)+"</b> "+(az==1 ? (ohne_t == "" ? "" : "<BR>("+Seiten_in_denen_dieser_Ausdruck_vorkommt_Txt+ohne_t+(exkt ? "" : " - "+Wortanfangsuche_Wort+")")) : "<BR>("+Seiten_in_denen_mindestens_einer_der_Txt+(az==2 ? beiden_Wort : az)+ausdruecke_vorkommt_Txt+ohne_t+(exkt ? "" : " - "+Wortanfangsuche_Wort+")")))
      return
   }
   else if (exkt) {
      var befehl=""
      for (x=0; x<und.length; x++) {
         befehl=befehl+","+und[x].replace(/"/g,"")
         suchenach+="</B> "+und_Wort+" <B>"+html(und[x].replace(/"/g,""))
      }
      ueber=Suche_nach_Txt+": <b>"+suchenach.substr(und_Wort.length+9)+"</b> "+(az==1 ? (ohne0>"" ? "<BR>("+Seiten_in_denen_dieser_Ausdruck_vorkommt_Txt+ohne_t+")" : "") : "<BR>("+Seiten_in_denen_Txt+(az==2 ? beide_Wort : alle_Wort+az)+ausdruecke_vorkommen_Txt+ohne_t+exakte_Suche_Txt)
      if (zsg) ueber=Suche_nach_Txt+": &laquo;"+html(zsg[0]).bold()+zsg_ausdruck_vorkommt_Txt+ohne_t+")<P>"
      zeige(vgl(befehl.substr(1)),ueber)
      return
   }
   indzz = new Array()
   for (x=1; x<=und.length; x++) indzz[x]=false
   indz = new Array()
   for (x=0; x<und.length; x++) suchenach+="</B> "+und_Wort+" <B>"+html(und[x].replace(/"/g,""))
   ueber=Suche_nach_Txt+": <b>"+suchenach.substr(und_Wort.length+9)+"</b> "+(az==1 ? (ohne0>"" ? "<BR>("+Seiten_in_denen_dieser_Ausdruck_vorkommt_Txt+ohne_t+Wortanfaenge_Txt : "") : "<BR>("+Seiten_in_denen_Txt+(az==2 ? beide_Wort : alle_Wort+az)+ausdruecke_vorkommen_Txt+ohne_t+Wortanfaenge_Txt)
   if (zsg) ueber=Suche_nach_Txt+": &laquo;"+html(zsg[0]).bold()+zsg_ausdruck_vorkommt_Txt+ohne_t+Wortanfaenge_Txt+"<P>"
   vgla=1
   if (zeigedetails && !zsg) {
      to=vgl_a_d(und.join(","))
   }
   else to=vgl_a(und.join(","))
   zeige(to,ueber)
}

function Pruefe() {
   window.defaultStatus = Suche_laeuft_Txt
   suche0=document.Suchfeld.Suchenach.value
   if (suche0.length < 1) {
      alert(Mindestens_ein_Zeichen_Txt)
      document.Suchfeld.Suchenach.focus()
   }
   else {
      formular_auswerten(suche0)
   }
}

function formular_auswerten(suche0) {
   if (mz5 || window.location.protocol == "http:" || window.opera) {
      parent.frames['Anzeige'].location.href="warten.htm"
   }
   suche=""
   af= new Array()
   if (nc45) document.layers.LadeBereich.w= new Array()
   else parent.w= new Array()
   indokg=new Array()
   itext= new Array()
   und_=-1
   ngf=false
   suchenach=""
   vgla=0
   odera=0
   ergebniszaehler=0
   mmm=0
   minus=0
   zwischenergebnis=0
   zngf=0
   lx=0
   seitenbeginn=new Array()
   seiteaktuell=1
   ohne_t=""
   zld=new Array()
   zldn=0
   nd= new Array()
   nd[1]=2
   aktuellerindex=1
   suche = escape(suche0.toLowerCase().replace(/<\//g,"_st_").replace(/\$_/g,"_di_")).replace(/\.|%2C|%3B|%21|%3A|@|\/|\*/g," ").replace(/(%20)+/g," ").replace(/_st_/g,"</").replace(/_di_/g,"%24_")
   suche=suche.replace(/  +/g," ")
   suche=suche.replace(/ $/,"").replace(/^ /,"")
   und = suche.split(" ")
   und.sort()
   bergel=","
   BesteTreffer = new Array
   BesteTreffer2 = new Array
   BeschraenkungAufBereich=0
   if (!nc45) parent.frames['x'].document.open()
   for (t in und) {
      und[t]=und[t].replace(/(%22)|^-/g,"")
      if (und[t] != "%20") indexladen(nd[aktuellerindex],und[t])
   }
   if (nc4) {
      if (nc45) document.layers.LadeBereich.hinauf()
      und= new Array()
      Suche(suche)
   }
   else {
      if (zldn>0) {
         hl=zld[0].split("@")
         zldn2=1
         laden(hl[0],hl[1],hl[2])
      }
   }
}

function indexladen(teil,temp,x) {
   if (nc4) {
      indexladen_nc4(teil,temp)
      return
   }
   temp=temp.replace(/^[-_]/,"")
   temp2=temp.substr(0,1)
   if (!i[teil][temp2]) return
   indx=i[teil][temp2].split(",")
   if (indx[1] == "%22") {  //Netscape-Fehler
      erstes=indx.shift()
      indx.shift()
      indx.unshift(erstes)
   }
   insg=0
   for (x in indx) {
      if (temp.replace(/_/g,"~") < indx[x]) {
         if (x==0) x=1
         zld[zldn++]=teil+"@"+temp2+"@"+x
         if (temp != indx[x].substr(0,temp.length)) {
            insg=1
            break
         }
      }
   }
   if (insg==0) zld[zldn++]=teil+"@"+temp2+"@"+indx.length
}

function laden(teil,temp,temp2,hin) {
   lx++
   if (temp=="_") temp="__"
   if (temp=="%") temp="_"
   if (bergel.indexOf(","+temp+temp2+",")==-1) {
      ini="\""
      ini+="index"+nd[aktuellerindex]+"\/"+temp+temp2+".js\""
      parent.frames['x'].document.writeln("<script language=\"JavaScript\" src="+ini+" type=\"text\/javascript\"><\/script><p>&nbsp;<p><script language=\"JavaScript\" src=\"index2/w.js\" type=\"text\/javascript\"><\/script>")
      bergel+=temp+temp2+","
   }
   else parent.frames['x'].document.writeln("<script language=\"JavaScript\" src=\"index2/w.js\" type=\"text\/javascript\"><\/script>")
}

function indexladen_nc4(teil,temp,x) {
   temp=temp.replace(/^-/,"")
   temp2=temp.substr(0,1)
   if (!i[teil][temp2]) return
   indx=i[teil][temp2].split(",")
   if (indx[1] == "%22") {  //Netscape-Fehler
      erstes=indx.shift()
      indx.shift()
      indx.unshift(erstes)
   }
   insg=0
   for (x in indx) {
      if (temp.replace(/_/g,"~") < indx[x]) {
         if (x==0) x=1
         laden_nc4(teil,temp2,x)
         if (temp != indx[x].substr(0,temp.length)) {
            insg=1
            break
         }
      }
   }
   if (insg==0) laden_nc4(teil,temp2,indx.length-1)
}

function laden_nc4(teil,temp,temp2,hin) {
   lx++
   if (temp=="_") temp="__"
   if (temp=="%") temp="_"
   if (bergel.indexOf(","+temp+temp2+",")==-1) {
      ini="\""
      ini+="index"+nd[aktuellerindex]+"\/"+temp+temp2+".js\""
      if (nc45) {
         with (document.layers.LadeBereich) {
            hole("<script language=\"JavaScript\" src="+ini+" type=\"text\/javascript\"><\/script>")
            src="leer.htm"
         }
      }
      else parent.frames['x'].document.writeln("<script language=\"JavaScript\" src="+ini+" type=\"text\/javascript\"><\/script>")
      bergel+=temp+temp2+","
   }
}

function Eingabe() {
   Pruefe()
   return false
}

function neusuche(temp) {
   document.forms[0].elements[0].value=temp
   top.frames['Suche'].document.Suchfeld.Suchenach.focus()
}

function Sprung(temp) {
   if (temp.match(/^"[^"]*"$/)) {
      return temp.replace(/"$|^"/g,"")
   }
   else {
      return temp.replace(/ .*|"/g,"")
   }
}

function Aendern(zwt,y) {
   ausdr=""
   if (ie4 && !ie5) zwt=parent.frames['Anzeige'].document.all.tags("body")[0].innerHTML
   else zwt=parent.frames['Anzeige'].document.getElementsByTagName("body")[0].innerHTML
   if (bunt) {
      for (x=0; x<und.length; x++) {
         ausdr="/\\b("+unescape(und[x].replace(/^_/,"").replace(/%3[CE]/g,"").replace(/a/g,"[aáàâ]").replace(/e/g,"[eéèê]").replace(/i/g,"[iíìî]").replace(/o/g,"[oóòô]").replace(/u/g,"[uúùû]").replace(/ß/g,"[ßs]+"))+")/gi"
         zwt=zwt.replace(eval(ausdr),"<SPAN STYLE=\"background-color:"+farbe[x % 5]+"; color:black\">$1</SPAN>")
      }
   }
   else {
      for (x=0; x<und.length; x++) if (und[x]>"") ausdr+="|"+und[x].replace(/^_/,"")
      ausdr="/\\b("+unescape(ausdr.replace(/%3[CE]/g,"").replace(/a/g,"[aáàâ]").replace(/e/g,"[eéèê]").replace(/i/g,"[iíìî]").replace(/o/g,"[oóòô]").replace(/u/g,"[uúùû]").replace(/ß/g,"[ßs]+").substr(1))+")/gi"
      zwt=zwt.replace(eval(ausdr),"<SPAN STYLE=\"background-color:"+farbe[0]+"; color:black\">$1</SPAN>")
   }
   for (y=0; y<2; y++) zwt=zwt.replace(/(<[^>]*)<SPAN STYLE="background-color:[^;]*; color:black">([^<]*)<\/SPAN>/g,"$1$2")
   if (ie4 && !ie5) parent.frames['Anzeige'].document.all.tags("body")[0].innerHTML=zwt
   parent.frames['Anzeige'].document.getElementsByTagName("body")[0].innerHTML=zwt
   if (mz5) parent.frames['Anzeige'].focus()
}

function uo(temp) {
   with (document.Suchfeld) {
      UNDODER[0].checked=temp
      UNDODER[1].checked=(!temp)
   }
}

function ex(temp) {
   with (document.Suchfeld) {
      EXAKT[0].checked=temp
      EXAKT[1].checked=(!temp)
   }
}

function nachladen(to) {
   aktuellerindex++
   if (!nd[aktuellerindex]) return "---"
   af= new Array()
   parent.w= new Array()
   ngf=false

   bergel=","
   if (!nc45) parent.frames['x'].document.open()
   for (t in und) {
      und[t]=und[t].replace(/%22|^-/g,"")
      if (und[t] != "%20") indexladen(nd[aktuellerindex],und[t])
   }
   ohne2=ohne0.substr(1).split(",")
   for (t in ohne2) {
      if (ohne2[t] != "%20") indexladen(nd[aktuellerindex],ohne2[t])
   }
   if (nc45) document.layers.LadeBereich.hinauf()
   window.defaultStatus = Suche_laeuft_Txt
   if (ohne0>"") {
      if (exkt) ohne1+=oder_e(ohne0.substr(1)).replace(/^\+/,"")
      else ohne1+=oder_a(ohne0.substr(1),true).replace(/^\+/,"")
   }

   if (oder_s) {
      if (odera) {
         if (zeigedetails)  to=oder_a_d(und.join(","))
         else to=oder_a(und.join(","))
      }
      else to=oder(und)
   }
   else if (exkt) to=vgl(und.join(","))
   else {
      if (zeigedetails) to=vgl_a_d(und.join(","))
      else to=vgl_a(und.join(","))
   }
   return to
}

function abfolge(x,y) {
   nd= new Array()
   x=20
   y=1
   while (x>1) {
      x--
      if (aktiv[x]) nd[y++]=x
   }
}

function einstellungen_alt(ausf,anzahl,oef,fett,bunt2,bunt3,x) {
   zeigedetails=ausf
   bildschirm=anzahl
   for (x=0; x<3; x++) if (oef[x].checked) oeffnen=x
   if (fett[0].checked) {
      f1="<B>"
      f2="</B>"
   }
   else {
      f1=""
      f2=""
   }
   bunt3=""
   if (ie4mz) {
      bunt=(bunt2[0].checked ? 0 : 1)
      bunt3="_"+bunt
   }
   var cook = (ausf ? 1 : 0)+"_"+anzahl+"_"+oeffnen+"_"+(fett[0].checked ? 1 : 0)+bunt3
   var Verfall = 1000*60*60*24*365
   var jetzt = new Date()
   var Auszeit = new Date(jetzt.getTime() + Verfall);
   document.cookie = Cookie_Name+"="+cook+"; expires="+Auszeit.toGMTString()+";"
   alert(Einstellungen_ab_naechste_Suche_gueltig_Txt)
   if (nc45) parent.frames['Anzeige'].location.href="unten.htm"
   document.Suchfeld.Suchenach.focus()
}

function trefferliste(temp,x) {
   tr = new Array(10,20,30,50,75,100,150)
   temp="<select name=\"Anzeigen\" size=1>"
   for (x=0; x<tr.length; x++) temp+="<option "+(bildschirm==tr[x] ? "selected " : "")+"value='"+tr[x]+"'>"+tr[x]
   return temp+"</select> "+Treffer_Wort
}

function html(temp) {
   return unescape(temp).replace(/^_/,"").replace(/</g,"&lt;").replace(/>/g,"&gt;")
}

function einst_bel() {
   with (parent.frames['Anzeige'].document.Einstellungen) {
      Anzeigen.value=bildschirm
      Detail[0].checked=zeigedetails
      Detail[1].checked=(!Detail[0].checked)
      oef[0].checked=(oeffnen==0)
      oef[1].checked=(oeffnen==1)
      oef[2].checked=(oeffnen==2)
      SFormat[0].checked=(f1=="<B>")
      SFormat[1].checked=(!SFormat[0].checked)
      bunt2[1].checked=(bunt==1)
   }
}

function einstellungen(ausf,anzahl,oef,fett,bunt2,schrift,pfad,bunt3,x) {
   if (ausf !=99) {
      zeigedetails=ausf
      bildschirm=anzahl
      for (x=0; x<3; x++) if (oef[x].checked) oeffnen=x
      if (fett[0].checked) {
         f1="<B>"
         f2="</B>"
      }
      else {
         f1=""
         f2=""
      }
      bunt2[1].checked=(bunt==1)
      if (bunt2[1].checked) {
         bunt="1"
      } else {
         bunt="0"
      }
      bunt3= "_"+bunt
      var cook = (ausf ? 1 : 0)+"_"+anzahl+"_"+oeffnen+"_"+(fett[0].checked ? 1 : 0)+bunt3
      var Verfall = 1000*60*60*24*365
      var jetzt = new Date()
      var Auszeit = new Date(jetzt.getTime() + Verfall)
      document.cookie = Cookie_Name+"="+cook+"; expires="+Auszeit.toGMTString()+";"
   }
   if (nc45) parent.frames['Anzeige'].location.href="unten.htm"
   else parent.frames['Anzeige'].location.href="unten.htm"
   document.Suchfeld.Suchenach.focus()
}

function AutomatischeSuche() {
   var uebergeben=parent.location.hash.replace(/^#/,"")
   var uebergeben2=ParameterKonvertieren(parent.location.search.replace(/^\??Suchanfrage=/,""))
   if (uebergeben != "" && parent.frames['Suche'].document.Suchfeld && parent.frames['Anzeige']) {
      parent.location.hash=""
      parent.frames['Anzeige'].location.replace("warten.htm")
      parent.frames['Suche'].document.Suchfeld.Suchenach.value=uebergeben
      Pruefe()
   }
   else if (uebergeben2 != "" && parent.frames['Suche'].document.Suchfeld  && parent.frames['Anzeige'] && typeof parent.AutomatischeSucheAusgefuehrt == "undefined") {
      parent.AutomatischeSucheAusgefuehrt=1
      parent.frames['Suche'].document.Suchfeld.Suchenach.value=uebergeben2
      Pruefe()
   }
}

function ParameterKonvertieren(temp) {
   return unescape(temp.replace(/\+/g," "))
}