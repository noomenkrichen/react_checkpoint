function App() {
  let name = "user name";
  return (
    <div className="App">
      <h1>My React JS Checkpoint</h1>
      <h2>Registration Form for : {name}</h2>

      <form>
      <div class="form-floating mb-3">
          <input type="text" class="form-control" id="first-name" placeholder="First name..." />
          <label for="first-name">First name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="last-name" placeholder="Last name..." />
          <label for="last-name">Last name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="name@example.com" />
          <label for="email">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="password" placeholder="Password" />
          <label for="password">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="confirm-password" placeholder="Confirm Password" />
          <label for="confirm-password">Confirm password</label>
        </div>
        
        <button type="submit" class="btn btn-primary">Register</button>
        
      </form>
  
    </div>
  );
}

export default App;
