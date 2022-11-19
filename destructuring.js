const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam'],
    {name: "Antony"},
    {fullname: { firstName: "Brad", secondName: "Pitt"}}
  ];
  
  // Escreva o seu código aqui
  const [student1, [student2 , student3], [student4, student5], {name}, {fullname} ] = moreStudents;
  const student6=name;
  const {firstName, secondName} = fullname;

  console.log(student1, student2, student3, student4, student5,student6, firstName);
  
  //O valor a ser consolado deve ser o seguinte Chris Ahmad Antigoni Toby Sam Antony Brad