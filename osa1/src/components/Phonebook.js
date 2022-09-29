const title = "Superadvanced phonebook app"
const contacts =  [
{
  name: "John Doe",
  phonenumber: '358401234567'
},
{
  name: "Jane Doe",
  phonenumber: "44551234567"
},
{
  name: "Foo bar",
  phonenumber: "000"
}
] 


const App = () => {

  return (
    <div>
      <Header title={title} />
      <Contents contacts={contacts}/>
    </div>
  )
}


export default Phonebook;