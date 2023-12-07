// Import area

//function area
const name = 'Saurabh Dixit' // this is a global variable
// a variable define outside the fuction then it will be a global variable
function Home() {
  // Whenever we define a varable inside a fuction body then it will be local variable;
  const mission = 'OKlabs' // this is a loacal varibale
  return (
    <main>
      <h1>
        Hello {name} {mission}
      </h1>
    </main>
  )
}
//export area
export default Home
