import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, Map, Marker, icon, map, marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges{

  @Input()
  order!:Order;
  @Input()
  readonly=false;
  //static:true helps access in ngoninit
  @ViewChild('map',{static:true})
  mapRef!:ElementRef;

  map!:Map;
  private currentmarker!:Marker;
  private readonly MARKER_ZOOM_LAVEL=16;
  private readonly MARKER_ICON=icon({
    iconUrl:
      'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  })
  private readonly DEFAULT_LATLNG:LatLngTuple=[13.75,21.62];

  constructor(private locationService:LocationService){}

  ngOnChanges(): void {
    if(!this.order) return;
    this.initializeMap();
    if(this.readonly && this.addressLatLng){
      this.showLocationOnReadonlyMode();
    }
  }

  showLocationOnReadonlyMode(){
    const m=this.map;
    this.setMarker(this.addressLatLng);
    m.setView(this.addressLatLng,this.MARKER_ZOOM_LAVEL);
    m.dragging.disable();
    m.touchZoom.disable();
    m.doubleClickZoom.disable();
    m.scrollWheelZoom.disable();
    m.boxZoom.disable();
    m.keyboard.disable();
    m.off('click');
    m.tap?.disable();//for tap screen
    this.currentmarker.dragging?.disable();
  }

  initializeMap(){
    if(this.map)return;
    //this map() is for creating the map;
    this.map=map(this.mapRef.nativeElement,{
      attributionControl:false,
    }).setView(this.DEFAULT_LATLNG,1);// 1 parameter default location and second is zoom label 

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);//it combine all image
    this.map.on('click',(e:LeafletMouseEvent)=>{
      this.setMarker(e.latlng);
    })
  }

  findMyLocation(){
    this.locationService.getCurrentLocation().subscribe({
      next:(latlng)=>{
        this.map.setView(latlng,this.MARKER_ZOOM_LAVEL);
        this.setMarker(latlng);
      }
    });
  }
  setMarker(latlng:LatLngExpression){
    this.addressLatLng=latlng as LatLng;
    if(this.currentmarker){
      this.currentmarker.setLatLng(latlng);
      return;
    }
    this.currentmarker=marker(latlng,{
      draggable:true,
      icon:this.MARKER_ICON,
    }).addTo(this.map);

    //get the latlng when drag ended;
    this.currentmarker.on('dragend',()=>{
      this.addressLatLng=this.currentmarker.getLatLng();
    })
  }

  set addressLatLng(latlng:LatLng){

    if(!latlng.lat.toFixed) return;

    latlng.lat=parseFloat(latlng.lat.toFixed(8));//to fixed is necessary for mongodb;
    latlng.lng=parseFloat(latlng.lng.toFixed(8));
    this.order.addressLatLng=latlng;
    // console.log(this.order.addressLatLng);
  }

  get addressLatLng(){
    return this.order.addressLatLng!;
  }


}
