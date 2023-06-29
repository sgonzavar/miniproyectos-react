import { useState, useEffect } from "react"
import Budget from "./Components/Budget"
import FormBudget from "./Components/FormBudget"
import ListSpend from "./Components/ListSpend"
import BudgetControl from "./Components/BudgetControl"

const App = () => {
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [newSpends, setNewSpends] = useState([])
  const [spend, setSpend] = useState({})
  const [createSpend, setCreateSpend] = useState(false)

  //update remaining
  useEffect(() => {
    if (createSpend) {
      setNewSpends([
        ...newSpends,
        spend
      ])
    }
    setCreateSpend(false)
    setRemaining(remaining - spend.amountSpend)
  }, [spend])
  
  return (
    <div className="app-container">
      <header>
        <h1>weekly expenses</h1>
        <div className="budget-container">
        { showQuestion ? (
            <Budget 
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <FormBudget
                  addNewSpends={setSpend}
                  onCreateSpend={setCreateSpend}
                />
              </div>
              <div className="one-half column">
                <ListSpend 
                  newSpends={newSpends} 
                />
                <BudgetControl 
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
          ) 
        }
        </div>
      </header>
    </div>
  )
}

export default App