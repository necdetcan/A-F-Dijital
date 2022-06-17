const oran = [0, 1, 8, 18, 18, 1];
const tutar = [10, 15, 12, 23, 30, 43];
const kod = ["0071", "0071", "0073", "0073", "0071", "0071"];
const yeniDizi = [];

console.log("------------------------GİRDİ----------------------")
    console.log(oran)
    console.log(tutar)
    console.log(kod)

for(let i=0;i<kod.length;i++){
    yeniDizi.push([oran[i], kod[i]]); 
}
for(let i=0;i<yeniDizi.length;i++){ 
    for(let j=i+1;j<yeniDizi.length;j++){ 
        if(JSON.stringify(yeniDizi[i])==JSON.stringify(yeniDizi[j])){
            tutar[i]+=tutar[j]  
            oran.splice(j, 1);
            tutar.splice(j, 1);
            kod.splice(j, 1);
        }
        else
        {}}}
    console.log("------------------------ÇIKTI----------------------")
    console.log(oran)
    console.log(tutar)
    console.log(kod)






