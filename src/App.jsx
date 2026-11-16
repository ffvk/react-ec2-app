import './App.css'

function App() {
  return (
    <div className="container">
      <h1>React EC2 CI/CD Project Hii</h1>
      <p>
        Successfully deployed using GitHub Actions
        and AWS EC2 .
      </p>
      <button onClick={() => alert('Deployment successful!')}>
        Test Application
      </button>
    </div>
  )
}

export default App