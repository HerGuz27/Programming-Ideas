function getData(){

    fetch('https://programming-ideas-api.herokuapp.com/datos')
    .then(response=>response.json())
    .then(tabla=>PeñarolTabla(tabla))

    const PeñarolTabla=(tabla)=>{

        document.getElementById('Beginner').addEventListener('click',(event)=>{
            const number=aleatorio(0,9)
            document.getElementById('project').innerHTML='Your Project is : '+tabla[number].titulo
            document.getElementById('description').innerHTML='Short Description: '+tabla[number].descripcion
        })

        document.getElementById('Intermediate').addEventListener('click',(event)=>{
            const number=aleatorio(10,20)
            document.getElementById('project').innerHTML='Your Project is: '+tabla[number].titulo
            document.getElementById('description').innerHTML='Short Description: '+tabla[number].descripcion
            })

            document.getElementById('Advanced').addEventListener('click',(event)=>{
                const number=aleatorio(21,30)
                document.getElementById('project').innerHTML='Your Project is : '+tabla[number].titulo
                document.getElementById('description').innerHTML='Short Description: '+tabla[number].descripcion
                })
    }

}
function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
  }

  window.addEventListener('DOMContentLoaded',(event)=>{
    getData()
 })
 
