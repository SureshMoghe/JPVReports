import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rbk-routes-map-component',
  templateUrl: './rbk-routes-map-component.component.html',
  styleUrls: ['./rbk-routes-map-component.component.css']
})
export class RbkRoutesMapComponentComponent implements OnInit {

  mapInput = [];
  lineColors = ['red', 'green', 'blue', 'yellow'];
  map;

  @Input() routeDetailsList = [];

  constructor() {}

  ngOnInit(): void {
    this.initializeMap();
  }

  ngOnChanges(): void {
    this.initializeMap();
  }

  // Map Section //
  initializeMap() {
    if (this.routeDetailsList.length > 0) {
      this.mapInput = this.filterData();
      console.log('mapInput',this.mapInput);
      const latLong = this.mapInput[0][0];
      const initLatLong = new google.maps.LatLng(
        latLong.BUILDING_LAT,
        latLong.BUILDING_LONG
      );

      var myOptions = {
        zoom: 11,
        center: initLatLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      this.map = new google.maps.Map(document.getElementById('map'), myOptions);

      this.drawRoute();
    }
  }

  filterData(): any {
    let result = [];
    if (this.routeDetailsList.length > 0) {
      let lookup = {};
      let items = this.routeDetailsList;
      let uniqueRootList = [];

      for (let item, i = 0; (item = items[i++]); ) {
        let rootId = item.ROUNTE_NOS;
        if (!(rootId in lookup)) {
          lookup[rootId] = 1;
          uniqueRootList.push(rootId);
        }
      }

      for (let i = 0; i < uniqueRootList.length; i++) {
        let temp = [];
        for (let j = 0; j < this.routeDetailsList.length; j++) {
          if (this.routeDetailsList[j].ROUNTE_NOS == uniqueRootList[i]) {
            temp.push({
              ROUNTE_NOS: this.routeDetailsList[j].ROUNTE_NOS,
              BUILDING_LAT: this.routeDetailsList[j].BUILDING_LAT,
              BUILDING_LONG: this.routeDetailsList[j].BUILDING_LONG,
              RBK_NAME: this.routeDetailsList[j].RBK_NAME,
              TOTAL_FARMERS: this.routeDetailsList[j].TOTAL_FARMERS,
              MILK_PRODUCTION_PER_DAY: this.routeDetailsList[j]
                .MILK_PRODUCTION_PER_DAY
            });
          }
        }
        result.push(temp);
      }
    }

    return result;
  }

  getRouteColor(): string {
    let index = Math.floor(Math.random() * this.lineColors.length) + 1;
    return this.lineColors[index - 1];
  }

  drawRoute() {
    let infowindow = new google.maps.InfoWindow();
    var iconBase = 'https://giribhumi.ap.gov.in/imagesnew/A_Agriculture.png';

    for (let i = 0; i < this.mapInput.length; i++) {
      const rootMap = this.mapInput[i];
      let rootPath = [];
      let centerPoint;
      for (let j = 0; j < rootMap.length; j++) {
        if (j < 1) {
          centerPoint = new google.maps.LatLng(
            parseFloat(rootMap[j].BUILDING_LAT),
            parseFloat(rootMap[j].BUILDING_LONG)
          );
        }
        rootPath.push(
          new google.maps.LatLng(
            parseFloat(rootMap[j].BUILDING_LAT),
            parseFloat(rootMap[j].BUILDING_LONG)
          )
        );

        let markerObj = new google.maps.Marker({
          position: new google.maps.LatLng(
            rootMap[j].BUILDING_LAT,
            rootMap[j].BUILDING_LONG
          ),
          icon: iconBase,
          map: this.map,
        });

        google.maps.event.addListener(
          markerObj,
          'click',
          (function (marker) {
            return function () {
              var contentString =
                '<h6>DETAILS : </h6>' +
                '<h6>RBK NAME: ' +
                rootMap[j].RBK_NAME +
                '</h6>' +
                '<h6>NO OF FARMERS: ' +
                rootMap[j].TOTAL_FARMERS +
                '</h6>' +
                '<h6>MILK PRODUCTION CAPACITY: ' +
                rootMap[j].MILK_PRODUCTION_PER_DAY +
                '</h6>';
              infowindow.setContent(contentString);
              infowindow.open(this.map, marker);
            };
          })(markerObj)
        );
      }
      
      let objBackgroundRootPath = new google.maps.Polyline({
        path: rootPath,
        geodesic: true,
        strokeColor: 'black',
        strokeOpacity: 1.0,
        strokeWeight: 6,
      });
      objBackgroundRootPath.setMap(this.map);

      let objRootPath = new google.maps.Polyline({
        path: rootPath,
        geodesic: true,
        strokeColor: this.getRouteColor(),
        strokeOpacity: 1.0,
        strokeWeight: 4,
      });
      objRootPath.setMap(this.map);

      this.map.setCenter(centerPoint);
      this.map.setZoom(11);
    }
  }
  // Map Section End//


}
