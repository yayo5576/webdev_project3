
 function init(){
//add your javascrip between these two lines of code
   document.getElementById("button").addEventListener("click", myAlert); 

   function myAlert(){
     var inputV = document.getElementById('entryinput'); 
     alert ("If you have questions, contact me at:\n\ymartinez2@hawk.illinoistech.edu");
     document.getElementById('textoutput').innerText = `${valueInput}`;
  } 
}

window.addEventListener('load', init);

function myMap() {
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 13,
    center: { lat: 41.8831, lng: -87.6261 },
  });
  
  const wheelImage = {
    url: "https://icons.veryicon.com/png/o/leisure/travel-icon-6/ferris-wheel-4.png",
    scaledSize: new google.maps.Size(100,100),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(40,70)};
  
    const beanImage = {
    url: "https://static.thenounproject.com/png/2055034-200.png",
    scaledSize: new google.maps.Size(50,50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(20,30)};

    const aquariumImage = {
    url: "https://cdn-icons-png.flaticon.com/512/1675/1675814.png",
    scaledSize: new google.maps.Size(50,50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(10,15)};

  const pierMarker = new google.maps.Marker({
    position: { lat: 41.89214463010968, lng: -87.60516415412073 },
    map,
    icon: wheelImage,
    animation: google.maps.Animation.BOUNCE,
    title: "Navy Pier",
    size: new google.maps.Size(10,12),
  });

  const beanMarker = new google.maps.Marker({
    position: { lat: 41.882596124582605, lng: -87.62337388926134 },
    map,
    icon: beanImage,
    animation: google.maps.Animation.BOUNCE,
    title: "The Bean",
    size: new google.maps.Size(10,12),
  });

   const aquariumMarker = new google.maps.Marker({
    position: { lat: 41.86799043314632, lng: -87.61428696513626 },
    map,
    icon: aquariumImage,
    animation: google.maps.Animation.BOUNCE,
    title: "Shedd Aquarium",
    size: new google.maps.Size(10,12),
  });

const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Chicago Loop</h1>' +
    '<div id="bodyContent">' +
    "<p><b>The Loop</b>, is a vibrant area featuring eclectic eateries, " +
    "shops, theaters and parks. Comprised mostly of high-rises, it’s also home to the 108-story Willis Tower. " + 
    "The iconic “Cloud Gate” sculpture sits in Millennium Park.  " +
    "Grant Park features the large, rococo-style Buckingham Fountain and the renowned Art Institute of Chicago, " +
    "and hosts annual events like The Taste of Chicago and Lollapalooza." +
    '<p>Attribution: The Loop, <a href="https://en.wikipedia.org/w/index.php?title=Chicago_Loop&oldid=1323438650">' + 
    "https://en.wikipedia.org/wiki/Chicago_Loop</a>"+
    "(last visited November 25, 2025).</p>" + //
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Chicago Loop",
  });
  
 const marker = new google.maps.Marker({
    position: {lat: 41.88108084659835, lng: -87.63385376767275},
    map,
    title: "The Loop",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map, }); });

   const loopCoordinates = [
    { lat: 41.87679785228458, lng: -87.63371187064831 },
    { lat: 41.88573065585483, lng: -87.63385361578393 },
    { lat: 41.88578799790157, lng: -87.62621052030352 },
    { lat: 41.876982997374434, lng: -87.62601673534698},
    {lat: 41.87679785228458, lng: -87.63371187064831},
  ];

  const loopPath = new google.maps.Polyline({
    path: loopCoordinates,
    geodesic: true,
    strokeColor: "#41B6E6",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  loopPath.setMap(map);
    
}
try{
window.initMap = initMap;
} catch(err) {
  
}



