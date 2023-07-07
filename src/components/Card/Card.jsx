import "./card.css";

const Card = ({ type }) => {
    let data;
    switch (type) {
        case "white":
            data={
                value:'$ 400,000',
                title:'Total budget you own',
                color:'#ffffff'
            }
            break;
        case "blue":
            data={
                value:'$ 299,762',
                title:'Spent month-to-date',
                color:'#CFE2F3'
            }
            break;
        case "green":
            data={
                value:'$ 2,874,582',
                title:'Forecasted till month end',
                color:'#D6EAD1'
            }
            break;
    
        default:
            break;
    }
  return (
    <div style={{background:`${data.color}`}} className="card">
        <h2 className="value">{data.value}</h2>
        <span className="title">{data.title}</span>
    </div>
  )
}

export default Card;