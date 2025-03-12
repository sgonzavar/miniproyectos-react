
const App = () => {


  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/users')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }


  return (
    <>
      <div>Hello world</div>
      <button onClick={fetchData}>Fetch User Data</button>
    </>
  )
}

export default App