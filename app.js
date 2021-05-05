//template literals

const namer  = 'andreas';
const age = 30;
const job  = 'web dev';
const city = 'miami';

//without template literals

htmlline = '<ul><li>Name:' + namer + '</li><li>Name:' + job + '</li><li>Name:' + city + '</li></ul>' ;

htmlline = '<ul>' + 
'<li>Name:' + namer + '</li>' + 
'<li>age:' + age + '</li>' + 
'<li>job:' + job + '</li>' + 
'<li>city:' + city + '</li>' + 
'<ul>';

function hello(){
  return 'hello';
}

//template string  this is gold

//conditionals inside the variable is possible 
htmlline = `
<ul>
<li> Name:  ${namer} </li>
<li> age:  ${age} </li>
<li> job: ${job} </li>
<li> city: ${city} </li>
<li> ${2+2}</li>
<li> ${hello()}</li>
<ul> `;

 document.body.innerHTML = htmlline;
