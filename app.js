const form = document.querySelector('form');


form.addEventListener('submit' , function(e){
  e.preventDefault() ; 
  
  const height = parseInt(document.querySelector('#height').value) ;
  const weight = parseInt(document.querySelector('#weight').value) ;
  const result = document.querySelector('#results'); 
  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML = `Please enter a valid value of Height ${height}`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML = `Please enter a valid value of Height ${weight}`;
  }
  else {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //show the result 
    if(bmi < 18.60){
    result.innerHTML = `<span>BMI =${bmi}</span>
                        <span>Under Weight</span>`;}
    else if(bmi < 24.9){
    result.innerHTML = `<span>BMI =${bmi}</span>
                        <span>Normal Weight</span>`;}
    else {
    result.innerHTML = `<span>BMI =${bmi}</span>
                        <span>Over Weight</span>`;}
  }
  


})