function StateButton(){
    function sayHello(){
        console.log("You are selected for Amazon")
    }
    return (
         <button onClick={sayHello}>Click me </button>
    )
}
export default StateButton;