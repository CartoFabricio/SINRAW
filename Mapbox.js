mapboxgl.accessToken = 'pk.eyJ1IjoiZmFicmljaW9hbW9yaW0iLCJhIjoiY2tsaWNsOHRkMmgwaDJucGN0NGJhd3psOSJ9.h665zPxHXNFNVIzh1cJeUQ';

navigator.geolocation.getCurrentPosition( function(position) {
  var lng = position.coords.longitude;
  var lat = position.coords.latitude;
  sessionStorage.setItem("lng", lng);
  sessionStorage.setItem("lat", lat);
  const map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat], //longitude, latitude
    zoom: 16,
    pitch: 80,
    bearing: 0,
    container: 'map',
    antialias: false,
    attributionControl:false,
  });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

  var basemapSelector = document.getElementById('basemap-selector');
  basemapSelector.addEventListener('change', function () {
    var basemap = basemapSelector.value;
    map.setStyle(basemap);
  });


  var pitchSlider = document.getElementById('pitch-slider');
  pitchSlider.addEventListener('input', function () {
    var pitch = Number(pitchSlider.value);
    map.setPitch(pitch);
  });

  var bearingSlider = document.getElementById('bearing-slider');
  bearingSlider.addEventListener('input', function () {
    var bearing = Number(bearingSlider.value);
    map.setBearing(bearing);
  });

 // Create marker arrays for each layer
        var layer1Markers = [ // Bus symbol
            { coordinates: [-49.232580, -25.453163], color: '#000000', size: 15 },
            { coordinates: [-49.232136, -25.449854], color: '#000000', size: 15 },
        ];

        var layer2Markers = [ // School symbol
            { coordinates: [-49.229949, -25.451687], color: '#000000', size: 15, },
            { coordinates: [-49.232931, -25.453522], color: '#000000', size: 15, },
            { coordinates: [-49.230441, -25.449003], color: '#000000', size: 15, },
        ];

        var layer3Markers = [// Food symbol
            { coordinates: [-49.235028, -25.449557], color: '#000000', size: 15 },
        ];

        var layer4Markers = [// Correios symbol
            { coordinates: [-49.234099, -25.44999], color: '#000000', size: 15 },
        ];


          var layer5Markers = [  //glyphicon glyphicon-gbp
            {coordinates: [ -49.233085960737924, -25.453344376797858], color: '#000000',size: 15},
            {coordinates: [ -49.23354358116649,-25.453187921663584], color: '#000000',size: 15},
            {coordinates: [-49.23282382864804,-25.453051524714468], color: '#000000',size: 15},
            {coordinates: [-49.23257058239133, -25.4525661107876], color: '#000000',size: 15},
            {coordinates: [ -49.23213331089232,-25.453098276993444], color: '#000000',size: 15},
            {coordinates: [ -49.23144208152905, -25.451743710824402], color: '#000000',size: 15},
            {coordinates: [ -49.23181972945565, -25.451839992085638], color: '#000000',size: 15},
            {coordinates: [  -49.233814601085186, -25.452473841045702], color: '#000000',size: 15},
            {coordinates: [ -49.233485825243434,  -25.451787838988665], color: '#000000',size: 15},
            {coordinates: [ -49.233112620233754,-25.45097345720221], color: '#000000',size: 15},
            {coordinates: [ -49.23224625146139, -25.451860049915567], color: '#000000',size: 15},
            {coordinates: [ -49.23196634770443,-25.451254279129785], color: '#000000',size: 15},
            {coordinates: [ -49.23080230869519, -25.451559174926842], color: '#000000',size: 15},
            {coordinates: [ -49.232333417311594,-25.45015945481181], color: '#000000',size: 15},
            {coordinates: [  -49.23350634734177, -25.450785289871703], color: '#000000',size: 15},
            {coordinates: [  -49.233712099088876, -25.4498493260068], color: '#000000',size: 15},
            {coordinates: [ -49.234609568278984, -25.450045903260985], color: '#000000',size: 15},
            {coordinates: [ -49.23063575000012, -25.44960241230737], color: '#000000',size: 15},
            {coordinates: [ -49.231398728557224, -25.44807491690277], color: '#000000',size: 15},
            {coordinates: [  -49.231660321594376,-25.447630050165046], color: '#000000',size: 15},
            {coordinates: [ -49.2336527885561, -25.44729147791888], color: '#000000',size: 15},
            {coordinates: [ -49.23665128297114, -25.452082228467205], color: '#000000',size: 15},
            {coordinates: [ -49.236088857942406, -25.45103505227719], color: '#000000',size: 15},
        ];
          var layer6Markers = [  //glyphicon glyphicon-gbp
            {coordinates: [-49.231723, -25.452261], color: '#000000',size: 15},
            {coordinates: [-49.230391, -25.451805], color: '#000000',size: 15},
            {coordinates: [-49.232566, -25.453625], color: '#000000',size: 15},
            {coordinates: [-49.232600, -25.453682], color: '#000000',size: 15},
            {coordinates: [-49.231141, -25.448626], color: '#000000',size: 15},
            {coordinates: [-49.232659, -25.453732], color: '#000000',size: 15},
            {coordinates: [-49.232716, -25.453616], color: '#000000',size: 15},
            {coordinates: [-49.232773, -25.453694], color: '#000000',size: 15},
            {coordinates: [-49.232734, -25.453774], color: '#000000',size: 15},
            {coordinates: [-49.232540, -25.453552], color: '#000000',size: 15},
            {coordinates: [-49.235963, -25.456875], color: '#000000',size: 15},
            {coordinates: [-49.231488, -25.452592], color: '#000000',size: 15},
            {coordinates: [-49.231751, -25.452785], color: '#000000',size: 15},
            {coordinates: [-49.234809, -25.452104], color: '#000000',size: 15},
            {coordinates: [-49.235797, -25.452013], color: '#000000',size: 15},
            {coordinates: [-49.230634, -25.452366], color: '#000000',size: 15},
            {coordinates: [-49.236039, -25.453874], color: '#000000',size: 15},
            {coordinates: [-49.237540, -25.454623], color: '#000000',size: 15},
            {coordinates: [-49.236151, -25.454313], color: '#000000',size: 15},
            {coordinates: [-49.231412, -25.447078], color: '#000000',size: 15},
            {coordinates: [-49.236947, -25.457303], color: '#000000',size: 15},
            {coordinates: [-49.230943, -25.451135], color: '#000000',size: 15},
            {coordinates: [-49.233991, -25.454551], color: '#000000',size: 15},
            {coordinates: [-49.236464, -25.453992], color: '#000000',size: 15},
            {coordinates: [-49.233801, -25.451278], color: '#000000',size: 15},
            {coordinates: [-49.233943, -25.451527], color: '#000000',size: 15},
            {coordinates: [-49.235105, -25.449457], color: '#000000',size: 15},
            {coordinates: [-49.234608, -25.448912], color: '#000000',size: 15},
            {coordinates: [-49.234892, -25.448875], color: '#000000',size: 15},
            {coordinates: [-49.231757, -25.450650], color: '#000000',size: 15},
            {coordinates: [-49.232737, -25.447408], color: '#000000',size: 15},
            {coordinates: [-49.232814, -25.446083], color: '#000000',size: 15},
            {coordinates: [-49.234014, -25.452174], color: '#000000',size: 15},
            {coordinates: [-49.233726, -25.449068], color: '#000000',size: 15},
            {coordinates: [-49.234341, -25.449904], color: '#000000',size: 15},
            {coordinates: [-49.234648, -25.450239], color: '#000000',size: 15},
            {coordinates: [-49.236214, -25.450359], color: '#000000',size: 15},
            {coordinates: [-49.236348, -25.451923], color: '#000000',size: 15},
            {coordinates: [-49.235037, -25.452373], color: '#000000',size: 15},
            {coordinates: [-49.235762, -25.451726], color: '#000000',size: 15},
            {coordinates: [-49.235057, -25.450830], color: '#000000',size: 15},
            {coordinates: [-49.233450, -25.450098], color: '#000000',size: 15},
            {coordinates: [-49.236520, -25.450568], color: '#000000',size: 15},
            {coordinates: [-49.237061, -25.451933], color: '#000000',size: 15},
            {coordinates: [-49.236729, -25.451405], color: '#000000',size: 15},
            {coordinates: [-49.234355, -25.452469], color: '#000000',size: 15},
            {coordinates: [-49.234021, -25.451720], color: '#000000',size: 15},
            {coordinates: [-49.233928, -25.449320], color: '#000000',size: 15},
            {coordinates: [-49.233010, -25.446937], color: '#000000',size: 15},
            {coordinates: [-49.232969, -25.446519], color: '#000000',size: 15},
            {coordinates: [-49.233657, -25.544876], color: '#000000',size: 15},
            {coordinates: [-49.234144, -25.451968], color: '#000000',size: 15},
            {coordinates: [-49.235820, -25.449726], color: '#000000',size: 15},
            {coordinates: [-49.234895, -25.450459], color: '#000000',size: 15},
            {coordinates: [-49.236281, -25.451690], color: '#000000',size: 15},
            {coordinates: [-49.234502, -25.450966], color: '#000000',size: 15},
            {coordinates: [-49.233953, -25.451888], color: '#000000',size: 15},
            {coordinates: [-49.232475, -25.453474], color: '#000000',size: 15},
            {coordinates: [-49.232444, -25.453411], color: '#000000',size: 15},
            {coordinates: [-49.232414, -25.453346], color: '#000000',size: 15},
            {coordinates: [-49.231009, -25.448671], color: '#000000',size: 15},
            {coordinates: [-49.230809, -25.448758], color: '#000000',size: 15},
            {coordinates: [-49.235992, -25.451951], color: '#000000',size: 15},
            {coordinates: [-49.235351, -25.451280], color: '#000000',size: 15},
            {coordinates: [-49.235851, -25.451237], color: '#000000',size: 15},
            {coordinates: [-49.235411, -25.452232], color: '#000000',size: 15},
            {coordinates: [-49.234912, -25.451639], color: '#000000',size: 15},
            {coordinates: [-49.235584, -25.452168], color: '#000000',size: 15},
            {coordinates: [-49.235049, -25.451475], color: '#000000',size: 15},
            {coordinates: [-49.234640, -25.451472], color: '#000000',size: 15},
            {coordinates: [-49.234710, -25.451812], color: '#000000',size: 15},
            {coordinates: [-49.234675, -25.451730], color: '#000000',size: 15},
            {coordinates: [-49.238399, -25.455153], color: '#000000',size: 15},
            {coordinates: [-49.236837, -25.453664], color: '#000000',size: 15},
            {coordinates: [-49.236407, -25.453817], color: '#000000',size: 15},
            {coordinates: [-49.232232, -25.447088], color: '#000000',size: 15},
            {coordinates: [-49.232371, -25.447338], color: '#000000',size: 15},
            {coordinates: [-49.232030, -25.447250], color: '#000000',size: 15},
            {coordinates: [-49.236121, -25.456748], color: '#000000',size: 15},
            {coordinates: [-49.236274, -25.456719], color: '#000000',size: 15},
            {coordinates: [-49.236300, -25.456864], color: '#000000',size: 15},
            {coordinates: [-49.235990, -25.456663], color: '#000000',size: 15},
            {coordinates: [-49.235905, -25.456564], color: '#000000',size: 15},
            {coordinates: [-49.236379, -25.456781], color: '#000000',size: 15},
            {coordinates: [-49.236505, -25.456915], color: '#000000',size: 15},
            {coordinates: [-49.236058, -25.456856], color: '#000000',size: 15},
            {coordinates: [-49.236326, -25.456817], color: '#000000',size: 15},
            {coordinates: [-49.230253, -25.451407], color: '#000000',size: 15},
            {coordinates: [-49.233659, -25.448310], color: '#000000',size: 15},
            {coordinates: [-49.234749, -25.451601], color: '#000000',size: 15},
            {coordinates: [-49.234810, -25.450818], color: '#000000',size: 15},
            {coordinates: [-49.234891, -25.450985], color: '#000000',size: 15},
            {coordinates: [-49.235985, -25.450043], color: '#000000',size: 15},
            {coordinates: [-49.236296, -25.450658], color: '#000000',size: 15},
            {coordinates: [-49.235400, -25.451893], color: '#000000',size: 15},
            {coordinates: [-49.235247, -25.451936], color: '#000000',size: 15},
            {coordinates: [-49.235079, -25.452007], color: '#000000',size: 15},
            {coordinates: [-49.232866, -25.451841], color: '#000000',size: 15},
            {coordinates: [-49.232619, -25.451514], color: '#000000',size: 15},
            {coordinates: [-49.230851, -25.450255], color: '#000000',size: 15},
            {coordinates: [-49.231692, -25.451456], color: '#000000',size: 15},
            {coordinates: [-49.231353, -25.450741], color: '#000000',size: 15},
            {coordinates: [-49.231163, -25.451440], color: '#000000',size: 15},
            {coordinates: [-49.232871, -25.453683], color: '#000000',size: 15},
            {coordinates: [-49.234164, -25.448921], color: '#000000',size: 15},
            {coordinates: [-49.234167, -25.451816], color: '#000000',size: 15},
            {coordinates: [-49.234197, -25.452167], color: '#000000',size: 15},
            {coordinates: [-49.232123, -25.447009], color: '#000000',size: 15},
            {coordinates: [-49.235800, -25.450799], color: '#000000',size: 15},
            {coordinates: [-49.233459, -25.452980], color: '#000000',size: 15},
            {coordinates: [-49.233407, -25.452840], color: '#000000',size: 15},
            {coordinates: [-49.233196, -25.452695], color: '#000000',size: 15},
            {coordinates: [-49.233118, -25.452557], color: '#000000',size: 15},
            {coordinates: [-49.233133, -25.452313], color: '#000000',size: 15},
            {coordinates: [-49.233081, -25.452178], color: '#000000',size: 15},
            {coordinates: [-49.232907, -25.452016], color: '#000000',size: 15},
            {coordinates: [-49.232779, -25.451661], color: '#000000',size: 15},
            {coordinates: [-49.232587, -25.451341], color: '#000000',size: 15},
            {coordinates: [-49.232513, -25.451198], color: '#000000',size: 15},
            {coordinates: [-49.232366, -25.450946], color: '#000000',size: 15},
            {coordinates: [-49.232541, -25.450520], color: '#000000',size: 15},
     ];


        function addMarkerLayer(markers, layerId) {
            markers.forEach(function(marker, index) {
                var el = document.createElement('div');
                el.className = 'marker ' + layerId;
                el.style.color = marker.color;
                el.style.fontSize = marker.size + 'px';
                el.style.lineHeight = marker.size + 'px';
                el.style.cursor = 'pointer';

                // Set marker content based on the layerId
                switch (layerId) {
                    case 'layer1':
                        el.innerHTML = '<i class="fas fa-bus"></i>'; // Bus symbol
                        break;
                    case 'layer2':
                        el.innerHTML = '<i class="fas fa-school"></i>'; // School symbol
                        break;
                    case 'layer3':
                        el.innerHTML = '<i class="fas fa-utensils"></i>'; // Food symbol
                        break;
                     case 'layer4':
                        el.innerHTML = '<i class="fas fa-envelope"></i>'; // Correios symbol
                        break;
                     case 'layer5':
                        el.innerHTML = '<i class="fas fa-car" ></i>'; // Estacionamento symbol
                        break;
                    case 'layer6':
                        el.innerHTML = '<i class="fas fa-building" ></i>'; // Predios symbol
                        break;
                    default:
                        break;
                }

                new mapboxgl.Marker(el)
                    .setLngLat(marker.coordinates)
                    .addTo(map)
                    .getElement()
                    .addEventListener('click', function() {
                        // Handle marker click event if needed
                        console.log('Marker clicked: Layer ' + layerId + ', Index ' + index);
                    });
            });
        }

        addMarkerLayer(layer1Markers, 'layer1');
        addMarkerLayer(layer2Markers, 'layer2');
        addMarkerLayer(layer3Markers, 'layer3');
        addMarkerLayer(layer4Markers, 'layer4');
        addMarkerLayer(layer5Markers, 'layer5');
        addMarkerLayer(layer6Markers, 'layer6');

        // Bind event listeners to layer controls
        var layerSelect = document.getElementById('layer-select');
        var swatches1 = document.getElementById('swatches1');
        var iconSizeInput = document.getElementById('icon-size');
        const rangeLabel = document.getElementById('icon-size-label');

        layerSelect.addEventListener('change', function() {
            var selectedLayer = layerSelect.value;

            // Update marker colors for the selected layer
            var markers = document.getElementsByClassName(selectedLayer);
            Array.from(markers).forEach(function(marker) {
                marker.style.background = layerColorInput.value;
            });

            // Update marker sizes for the selected layer

            iconSizeInput.addEventListener('input', () => {
              rangeLabel.textContent = iconSizeInput.value;
            });
        });


        function changeMarkerColor(color) {
            var selectedLayer = layerSelect.value;

            // Update marker colors for the selected layer
            var markers = document.getElementsByClassName(selectedLayer);
            Array.from(markers).forEach(function(marker) {
                marker.style.color = color;
            });
        }

        // Function to create a color swatch
        function createSwatch(color) {
            const swatch = document.createElement('div');
            swatch.className = 'swatch';
            swatch.style.backgroundColor = color;
            swatch.addEventListener('click', () => {
                changeMarkerColor(color);
            });
            return swatch;
        }

        const colors = ['#ffffff', '#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494','#fed976', '#feb24c', '#fd8d3c', '#f03b20', '#bd0026', '#000000'];


        // Create color swatches and set event listeners
        for (const color of colors) {
            const swatch = createSwatch(color);
            swatches1.appendChild(swatch);
        }

        function handleIconSizeChange() {
            var size = parseFloat(iconSizeInput.value);
            var selectedLayer = layerSelect.value;
            var markers = document.getElementsByClassName(selectedLayer);
            Array.from(markers).forEach(function(marker) {
                marker.style.fontSize = size + 'px';
            });
        }

        iconSizeInput.addEventListener('input', handleIconSizeChange);

        // Update initial marker sizes based on the default layer selection and size
        var initialSelectedLayer = layerSelect.value;
        var initialSize = parseFloat(iconSizeInput.value);
        var initialMarkers = document.getElementsByClassName(initialSelectedLayer);
        Array.from(initialMarkers).forEach(function(marker) {
            marker.style.fontSize = initialSize + 'px';
            });
        var iconSizeInput = document.getElementById('icon-size');
        iconSizeInput.addEventListener('input', () => {
          rangeLabel.textContent = iconSizeInput.value + ' px';
        });

direction = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  language: 'pt-BR',
  showCompass: true,
  geometry: 'polyline',
  unit: 'metric',
  profile: 'mapbox/walking',
  language: 'pt-BR',
  placeholderOrigin: 'Origem',
  placeholderDestination: 'Destino',
  controls: {
      profileSwitcher: false,
      instructions: false,
  },
});

map.on('load', function() {
  var direction = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  direction.setOrigin([lng,lat]);
});

document.getElementById('direction').appendChild(direction.onAdd(map));

// an arbitrary start will always be the same
// only the end or destination will change
const start = [lng, lat];

// create a function to make a directions request
async function getRoute(end) {
  // make directions request using cycling profile
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    'type': 'Feature',
    'properties': {},
    'geometry': {
      'type': 'LineString',
      'coordinates': route
    }
  };

  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource('route')) {
    map.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      'id': 'route',
      'type': 'line',
      'source': {
        'type': 'geojson',
        'data': geojson
      },
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#3887be',
        'line-width': 0,
        'line-opacity': 0.75
      }
    });
  }

//			document.getElementById("orig").textContent = JSON.stringify(geojson, undefined, 2);

  // get the sidebar and add the instructions
  const instructions = document.getElementById('instructions');
  const steps = data.legs[0].steps;
  let tripInstructions = '';
  for (const step of steps) {
    tripInstructions += `<li>${step.maneuver.instruction}</li>`;
  }
  instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
    data.duration / 60
  )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
}

map.on('load', () => {
  // make an initial directions request that
  // starts and ends at the same location
  getRoute(start);

  // Add destination to the map
  map.addLayer({
    'id': 'point',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Point',
              'coordinates': start
            }
          }
        ]
      }
    },
    'paint': {
      'circle-radius': 0,
      'circle-color': '#3887be'
    }
  });

  // allow the user to click the map to change the destination
  map.on('click', (event) => {
    const coords = Object.keys(event.lngLat).map(
      (key) => event.lngLat[key]
    );
    const end = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Point',
            'coordinates': coords
          }
        }
      ]
    };
    if (map.getLayer('end')) {
      map.getSource('end').setData(end);
    } else {
      map.addLayer({
        'id': 'end',
        'type': 'circle',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': coords
                }
              }
            ]
          }
        },
        'paint': {
          'circle-radius': 0,
          'circle-color': '#f30'
        }
      });
    }
    getRoute(coords);
  });
});

var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-left');

map.addControl(new mapboxgl.FullscreenControl());

var geolocate = new mapboxgl.GeolocateControl();
map.addControl(
    geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true,
  })
);

  // Add 3D Buildings Layer
  map.on('load', function () {
    map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 10,
      'paint': {
        'fill-extrusion-color': '#aaa',
        'fill-extrusion-height': ["get", "height"],
        'fill-extrusion-base': ["get", "min_height"],
        'fill-extrusion-opacity': 0.6
      }
    });
  });

  // Toggle 3D Buildings
  var toggle = document.getElementById('toggle');
  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      map.setLayoutProperty('3d-buildings', 'visibility', 'visible');
    } else {
      map.setLayoutProperty('3d-buildings', 'visibility', 'none');
    }
  });
});
