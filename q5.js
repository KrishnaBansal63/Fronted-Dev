
class User{
  constructor(name, rating){
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User{
  constructor(name, rating, vehicle){
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip{
  constructor(fromLocation, toLocation, distance){
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }
  calculateFare(){
    if(!this.distance || this.distance < 0){
      throw new Error("Invalid distance");
    }
    return this.distance * 12;
  }
}

try{
  const trip = new Trip("Delhi","Noida",15);
  console.log(trip.calculateFare());
}catch(e){
  console.error(e.message);
}
