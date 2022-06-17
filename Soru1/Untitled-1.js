var url2012 = "https://www.tcmb.gov.tr/kurlar/201204/16042012.xml";
var url2013 = "https://www.tcmb.gov.tr/kurlar/201304/16042013.xml";
var url2014 = "https://www.tcmb.gov.tr/kurlar/201404/16042014.xml";
var url2015 = "https://www.tcmb.gov.tr/kurlar/201504/16042015.xml";
var url2016 = "https://www.tcmb.gov.tr/kurlar/201604/18042016.xml";
var url2017 = "https://www.tcmb.gov.tr/kurlar/201704/18042017.xml";
var url2018 = "https://www.tcmb.gov.tr/kurlar/201804/18042018.xml";
var url2019 = "https://www.tcmb.gov.tr/kurlar/201904/18042019.xml";
var url2020 = "https://www.tcmb.gov.tr/kurlar/202004/16042020.xml";
var url2021 = "https://www.tcmb.gov.tr/kurlar/202104/16042021.xml";
var url2022 = "https://www.tcmb.gov.tr/kurlar/202204/18042022.xml";

const veri2012 = [];
const veri2013 = [];
const veri2014 = [];
const veri2015 = [];
const veri2016 = [];
const veri2017 = [];
const veri2018 = [];
const veri2019 = [];
const veri2020 = [];
const veri2021 = [];
const veri2022 = [];

const artis2013=[];
const artis2014=[];
const artis2015=[];
const artis2016=[];
const artis2017=[];
const artis2018=[];
const artis2019=[];
const artis2020=[];
const artis2021=[];
const artis2022=[];



function kurVerisiCek(url,gelenVeri) {
   var XMLHttpRequest = require('xhr2');

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/xml");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      
      //console.log("zoooorrrtt");
      
      

      var xpath = require('xpath')
      , dom = require('xmldom').DOMParser
      
      var xml = xhr.responseText;
      var doc = new dom().parseFromString(xml)
      var nodes = xpath.select("//Isim", doc)

      var ForexSelling = xpath.select("//ForexSelling", doc)
      //console.log(gelenVeri);
     diziyeEkle(nodes,ForexSelling,url,gelenVeri);

   }};

    
   xhr.send();
};



function diziyeEkle(nodes,ForexSelling,url,gelenVeri){

   if(url == url2012){
 
   for(let i=0;i<18;i++){
      
      veri2012.push([nodes[i].firstChild.data, ForexSelling[i].firstChild.data]);
   
      }
      //console.log(gelenVeri[0][1]);
      //console.log(veri2012[0][1]);
      for(let j=0;j<18;j++){
        
        artis2013.push((gelenVeri[j][1] - veri2012[j][1]));
   
      
   }
   

   var maksimumArtanKurAradakiFark = max(artis2013);
   var kurIndex = artis2013.indexOf(maksimumArtanKurAradakiFark);
   var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2012[kurIndex][1])*100);
   //console.log(maksimumArtanKurAradakiFark);
   console.log("2013 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));
   
      
   } 
   if(url == url2013){
 
      for(let s=0;s<18;s++){
         
         veri2013.push([nodes[s].firstChild.data, ForexSelling[s].firstChild.data]);
      
         }


         //console.log(veri2013);
         

         for(let t=0;t<18;t++){
        
            artis2014.push((gelenVeri[t][1] - veri2013[t][1]));
       
          
       }
      var maksimumArtanKurAradakiFark = max(artis2014);
      var kurIndex = artis2014.indexOf(maksimumArtanKurAradakiFark);
      var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2013[kurIndex][1])*100);
      console.log("2014 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));

      kurVerisiCek(url2012,veri2013)

      }
      if(url == url2014){
 
         for(let z=0;z<18;z++){
            
            veri2014.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
         
            }
   
   
            //console.log(veri2013);
            
   
          for(let j=0;j<18;j++){
           
               artis2015.push((gelenVeri[j][1] - veri2014[j][1]));
          
             
          } 
         var maksimumArtanKurAradakiFark = max(artis2015);
         var kurIndex = artis2015.indexOf(maksimumArtanKurAradakiFark);
         var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2014[kurIndex][1])*100);
         console.log("2015 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));
          
         kurVerisiCek(url2013,veri2014)
         }
         if(url == url2015){
 
            for(let z=0;z<18;z++){
               
               veri2015.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
            
               }
      
      
               //console.log(gelenVeri[0][1]);
               
      
             for(let j=0;j<18;j++){
              
                  artis2016.push((gelenVeri[j][1] - veri2015[j][1]));
             
                
             } 
             var maksimumArtanKurAradakiFark = max(artis2016);
            var kurIndex = artis2016.indexOf(maksimumArtanKurAradakiFark);
            var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2015[kurIndex][1])*100);
            console.log("2016 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi)); 
             
            kurVerisiCek(url2014,veri2015)
            }

            if(url == url2016){
 
               for(let z=0;z<18;z++){
                  
                  veri2016.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
               
                  }
         
         
                  //console.log(gelenVeri[0][1]);
                  
         
                for(let j=0;j<18;j++){
                 
                     artis2017.push((gelenVeri[j][1] - veri2016[j][1]));
                
                   
                } 
                 var maksimumArtanKurAradakiFark = max(artis2017);
               var kurIndex = artis2017.indexOf(maksimumArtanKurAradakiFark);
               var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2016[kurIndex][1])*100);
               console.log("2017 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));   
                
               kurVerisiCek(url2015,veri2016)
               }

               if(url == url2017){
 
                  for(let z=0;z<18;z++){
                     
                     veri2017.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
                  
                     }
            
            
                     //console.log(gelenVeri[0][1]);
                     
            
                    for(let j=0;j<18;j++){
                    
                        artis2018.push((gelenVeri[j][1] - veri2017[j][1]));
                   
                      
                   } 
                  var maksimumArtanKurAradakiFark = max(artis2018);
                  var kurIndex = artis2018.indexOf(maksimumArtanKurAradakiFark);
                  var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2017[kurIndex][1])*100);
                  console.log("2018 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));   
                   
                  kurVerisiCek(url2016,veri2017)
                  }
                  if(url == url2018){
 
                     for(let z=0;z<18;z++){
                        
                        veri2018.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
                     
                        }
               
               
                        //console.log(gelenVeri[0][1]);
                        
               
                      for(let j=0;j<18;j++){
                       
                           artis2019.push((gelenVeri[j][1] - veri2018[j][1]));
                      
                         
                      } 
                       var maksimumArtanKurAradakiFark = max(artis2019);
                     var kurIndex = artis2019.indexOf(maksimumArtanKurAradakiFark);
                     var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2018[kurIndex][1])*100);
                     console.log("2019 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));   
                      
                     kurVerisiCek(url2017,veri2018)
                     }
                     if(url == url2019){
 
                        for(let z=0;z<18;z++){
                           
                           veri2019.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
                        
                           }
                  
                  
                           //console.log(gelenVeri[0][1]);
                           
                  
                          for(let j=0;j<18;j++){
                          
                              artis2020.push((gelenVeri[j][1] - veri2019[j][1]));
                         
                            
                         } 
                          var maksimumArtanKurAradakiFark = max(artis2020);
                        var kurIndex = artis2020.indexOf(maksimumArtanKurAradakiFark);
                        var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2019[kurIndex][1])*100);
                        console.log("2020 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));    
                         
                        kurVerisiCek(url2018,veri2019)
                        }
                        if(url == url2020){
 
                           for(let z=0;z<18;z++){
                              
                              veri2020.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
                           
                              }
                     
                     
                              //console.log(gelenVeri[0][1]);
                              
                     
                              for(let j=0;j<18;j++){
                             
                                 artis2021.push((gelenVeri[j][1] - veri2020[j][1]));
                            
                               
                            } 
                           var maksimumArtanKurAradakiFark = max(artis2021);
                           var kurIndex = artis2021.indexOf(maksimumArtanKurAradakiFark);
                           var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2020[kurIndex][1])*100);
                           console.log("2021 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));     
                            
                           kurVerisiCek(url2019,veri2020)
                           }
                           if(url == url2021){
 
                              for(let z=0;z<18;z++){
                                 
                                 veri2021.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
                              
                                 }
                        
                        
                                 //console.log(gelenVeri[0][1]);
                                 
                        
                               for(let j=0;j<18;j++){
                                
                                    artis2022.push((gelenVeri[j][1] - veri2021[j][1]));
                               
                                  
                               } 
                              var maksimumArtanKurAradakiFark = max(artis2022);
                              var kurIndex = artis2022.indexOf(maksimumArtanKurAradakiFark);
                              var artisYuzdesi = ((maksimumArtanKurAradakiFark / veri2021[kurIndex][1])*100);
                              console.log("2022 yılında en çok değer kazanan kur: "+gelenVeri[kurIndex][0]+" - Artis miktari: "+ maksimumArtanKurAradakiFark+ " - Artis yuzdesi: %"+Math.floor(artisYuzdesi));    
                               
                              kurVerisiCek(url2020,veri2021)
                              }
                              if(url == url2022){
 
                                 for(let z=0;z<18;z++){
                                    
                                    veri2022.push([nodes[z].firstChild.data, ForexSelling[z].firstChild.data]);
                                 
                                    }
                           
               
                                  
                                 kurVerisiCek(url2021,veri2022)
                                 }
      
   }
  



   function max(array) {
      return array.reduce((prev, curr) => prev > curr ? prev : curr, undefined)
  }
   
   deneme = [];
   kurVerisiCek(url2022,deneme);











  
  
   
   
   
     

  
 




