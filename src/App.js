import React from "react"
import Card from "./components/Card"
import './App.css'
const cardInfo = {
  bankName: "Big Bank, Inc.",
  fullName: "Max Mustermann",
  cardNumber: "1234 5678 8765 4321",
  expirationDate: "08/19"
}
function App() {
  return (
    <div className="App">
      <Card 
        bank={cardInfo.bankName} 
        iban={cardInfo.cardNumber} 
        date={cardInfo.expirationDate}
        name={cardInfo.fullName}
      />
    </div>
  );
}

export default App;
