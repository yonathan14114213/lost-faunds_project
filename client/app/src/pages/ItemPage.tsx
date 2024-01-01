type item = {
  id: number,
  title: string,
  authorID: number,
  authorName:string,
  authorEmail:string,
  createdAt: {
    date:string,
    hour:string
  },
  description: string,
  image: {
    src:string,
    alt:string
  },
  foundAtTime: {
    year:number,
    month:number,
    day:number,
    hour:number
  }
  foundIn: {
    country:string
    city:string,
    street:string,
    house:number,
    longitude:string,
    latitude:string,
  }
  
}
const ItemPage = (object:item)=>{
  return (
    <>
      <div><h4>{object.title}</h4></div>
      <div>
        <div>{object.description}</div>
        <div><img src={object.image.src} alt={object.image.alt}></div>
      </div>
        <div>
          <div>
            <p>
              found at {object.foundIn.city} in {object.foundIn.country} near to street {object.foundIn.street} number {object.foundIn.house} 
              in the {object.foundAtTime.day}/{object.foundAtTime.month}/{object.foundAtTime.year} at {object.foundAtTime.hour} o'clock
            </p>
          </div>
          <div>
            <openLayersMap spot={{longitude: {object.foundIn.longitude}, latitude: {object.foundIn.latitude}}}/>
          </div>
      <div>
        <nav>
          {object.authorName}|{object.authorEmail}
        </nav>
      </div>
    </>
  )
};
