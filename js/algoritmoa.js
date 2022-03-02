function weekDay (x){ 
    days= {
        1 : 'Monday',
        2  : 'Tuesday',
        3 : 'Wednesday',
        4 : 'thursday',
        5 : 'Friday',
        6 : 'Saturday', 
        7 : 'Sunday',

    }
 
return days[x] || 'invalid'
}

function printDay(day){
    console.log(`today is ${day}`)
}

let day1 =weekDay(5)
   printDay(day1)

let day2 =weekDay(3)
   printDay(day2)

let day3 =weekDay(9)
   printDay(day3) 
   
  /* ===================Prueba 2===================*/

  console.log('===============================Agencia de viajes==================== ')

  function destinoViaje(x) {
      destinos= {
          1: 'Queretaro',
          2: 'Quito',
          3: 'Barranquilla',
          4: 'Tokyo',
          5: 'Moscu',

      }

      return destinos[x] || 'Lo sentimos, no hay boletos para este destino'
}

function printDestino(destino){
    console.log(`¡listo! Disfruta tu viaje a ${destino}`)
}

let dest1 =destinoViaje(5)
   printDestino(dest1)


let dest2 =destinoViaje(1)
   printDestino(dest2)


let dest3 =destinoViaje(4)
   printDestino(dest3)

   
let dest4 =destinoViaje(9)
printDestino(dest4)