import React from 'react'
import IAdvertisment from '../state/IAdvertisment'

class Advertisement extends React.Component {
  public static ad:[IAdvertisment];
  constructor(props){
    super(props);
    if(!Advertisement.ad){
      this.select_from_db();
    }
  }
  
  private id:Number;
  private name:String;
  private description:String;
  private date:Date;
    
  add(id: Number, name: String, description: String, date: Date):void{
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;

    let advertisment:IAdvertisment = {
      id: id,
      name: name,
      description: description,
      date: date
    };

    this.add_to_db();

      if(Advertisement.ad){
        Advertisement.ad.push(advertisment);
      }
      else{
        Advertisement.ad = [advertisment];
      }
  };
  
  add_to_db = async () => {
    const res = await fetch('http://localhost:8000/add?name=' + this.name + '&description=' + this.description + '&date=' + this.date);
    const odp = await res.json();
    alert("Adv: " + this.name + " Be added");
  }
  
  select_from_db = async () => {
    const res = await fetch('http://localhost:8000/select');
    const odp = await res.json();
    
    if(odp !== "brak danych")
      odp.forEach(element => {
        if(Advertisement.ad){
          Advertisement.ad.push(element);
        }
        else{
          Advertisement.ad = [element];
        }
      }); 
  }
    
  delete(id:number):void{
    var removeIndex = Advertisement.ad.map(function(item) { return item.id; }).indexOf(id);
    Advertisement.ad.splice(removeIndex, 1);
  };
    
  get():[IAdvertisment]{
    return Advertisement.ad;
  }
}

export default Advertisement