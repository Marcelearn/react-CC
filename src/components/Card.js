import './card.css';
function Card({bank, iban, date, name}){
    return(
        <div className='card'>
            <h1 className='bankName'>{bank}</h1>
            <h1 className='iban'>{iban}</h1>
            <h1 className='date'>{date}</h1>
            <p className='num'>1234</p>
            <p className='valid'>valid</p>
            <p className='thru'>thru</p>
            <h1 className='name'>{name}</h1>

        </div>
    );
    
    
}
export default Card;