let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let input3 = document.querySelector('.input3')
let button = document.querySelector('button')
let paragraph = document.querySelector('p')

button.onclick = function(){
  let age = input1.value
  let playertype = input2.value
  let skill = input3.value
  console.log(age,playertype,skill)
  
  if (age>=21 && age< 1000000 && playertype == 'Forward' && skill == 'Deking'){
    message.innerHTML = 'Your Hockey Player is Nathan MacKinnon 32 goals, 41 assists, 88 points, 22 plus-minus in 65 games in 2021-22 1-time-Stalney Cup Champ 2021-23, Lady Byng Memorial Trophy 2019-20,Calder Memorial Trophy 2013-14, QMJHL Second All-Star Team 2013 NHL All-Rookie Team 2014 NHL Second All-Star Team 2018 2020 Played in NHL All-Star Game 2017 2018 2022, being Draft in 2013 by the  Colorado Avalanche.'
  }
  else if (age>=21 && age< 1000000 && playertype == 'd-man' && skill == 'Power'){
    message.innerHTML = 'Your Hockey Player is Jacob Trouba 11 goals, 28 assists, 39 points, 25 plus-minus in 81 games in 2021-22 named 28th Rangers captain on Aug 9, 2022, CCHA All-Rookie in 2013, CCHA All-Star team in 2013, being Drafted ninth ovrerall in 2012 by the Winnipeg Jets.'
  }
    else if (age>=21 && age< 1000000 && playertype == 'Goalie' && skill == 'Saves')
    message.innerHTML = 'Your Hockey Player is Igor Shesterkin 22 Wins, 8 loss, 7 ot lveoss, 37 goals saved, 92 goals scored, With 37 games played in 2023 with a .917 save %, Vezina Trophy 2021-22,NHL First All-Star Team in 2022, being Drafted in 118 ovrerall in 2014 by the New York Rangers. Close Second is Henrik Lundqvist but he did not make the cut King Henrik 30 New York Rangers.'
  }
  else if(age>=21 && age< 1000000 && playertype == 'Forward' && skill == 'Power'){
    message.innerHTML = 'Your Hockey Player is Nazem Kadri 19 goals, 19 assists, 38 points, 10 plus-miuns in 52 games in 2023, 1-time Stalney Cup Champ in 2021-22, NHL All-Star in 2022, Being Drafted seventh overall in 2014 by the Toronto Maple Leafs.'
  }
  else if (age>=21 && age< 1000000 && playertype == 'd-man' && skill == 'Deking'){
    message.innerHTML = 'Your Hockey Player is Victor Hedman 4 goals, 30 assists, 34 points, 11 plus-miuns in 48 games in 2023, 2-time Stalney Cup Champ in 2019-20 and 2020-21, James Norris Memorial Trophy 2017-18, Conn Smythe Trophy 2019-20, NHL First All-Star Team 2018, NHL Second All-Star Team 2017, 2019, 2020, 2021, 2022, NHL All-Star 2017,2020,2022, Being Draft second ovrerall in 2009 by the Tampa Bay Lighting.'
  }
  else if (age>=21 && age< 1000000 && playertype == 'Goalie' && skill == 'Deking'){
    message.innerHTML = 'Your Hockey Player is Patrick Roy 551 wins, 315 loses 131 ties, 0 ot games, 28,346 shots against, 2,546 goals against, 2.54 Goals Against Average, .910 save percentage, 66 shutouts in his 19 year carrer, won the Vezina Trophy 1988-89 1989-90 1991-92, William M. Jennings Trophy 1987-88 1987-88 1988-89 1991-92 2001-02, Conn Smythe Trophy 1985-86 1992-93 2000-01, Stanley Cup 1985-86 1992-93 1995-96 2000-01, Put in the Hockey Hall of Fame in 2006 and is one of 100 best hockey players.'
  }
  else if (age>=21 && age< 1000000 && playertype == 'd-man' && skill == 'Power'){
    message.innerHTML ='Your Hockey Player is Not Found Please Redo'
  }
  else if (age>=21 && age< 1000000 && playertype == 'Forward' && skill == 'Saves'){
    message.innerHTML ='Your Hockey Player is Not Found Please Redo'
  }  
  else if (age>=21 && age< 1000000 && playertype == 'Goalie' && skill == 'Power'){
     message.innerHTML ='Your Hockey Player is Not Found Please Redo'
}
