const myForm=document.getElementById('myForm');
const inpOne=document.getElementById('inpOne');
const inpTwo=document.getElementById('inpTwo');
const inpThree=document.getElementById('inpThree');
const inpFour=document.getElementById('inpFour');
const inpFive=document.getElementById('inpFive');

myForm.addEventListener('submit',function(event){
    event.preventDefault();
    axios.post("https://northwind.vercel.app/api/customers",{
    name:inpOne.value,
    surname:inpTwo.value,
    Fathername:inpThree.value,
    fin:inpFour.value,
    email:inpFive.value,
    })
    .then(response=>{
     console.log(response.data);
    })
});