const claculation = document.querySelector('.claculation')
const button = document.querySelectorAll('.button')


button.forEach((button)=>{
 button.addEventListener('click',function (e){
     
    if(e.target.id =="SI"){
        e.target.disabled = true;
        const P = document.createElement('h1')
        const P1 = document.createElement('input')
        const R = document.createElement('h1')
        const R1 = document.createElement('input')
        const T = document.createElement('h1')
        const T1 = document.createElement('input')
        const calculate = document.createElement('button')
        const result = document.createElement('h1')
        const break1 = document.createElement('br')
        const clearScreen = document.createElement('button');
        P.innerText = "Enter the Principal amount"
        R.innerText = "Enter the Rate"
        T.innerText = "Enter the Time"
        calculate.innerText = "Calculate"
        clearScreen.innerText="Clear"
        claculation.appendChild(P)
        claculation.appendChild(P1)
        claculation.appendChild(R)
        claculation.appendChild(R1)
        claculation.appendChild(T)
        claculation.appendChild(T1)
        claculation.append(break1)
        claculation.appendChild(calculate)
        claculation.appendChild(clearScreen);


        calculate.addEventListener('click',function (e){
            answer =(P1.value * R1.value * T1.value)/100
            result.innerText = `SI  of $${P1.value} at ${R1.value}% for ${T1.value} years is $${answer}`
            claculation.appendChild(result)
        })

        clearScreen.addEventListener('click',function (e){
            claculation.innerHTML = ""
            e.target.disabled = false
        })
//+++++++++++++++++++adding style++++++++++++++++++++++++++++++++++++ 
        P1.style.width = '200px'
        R1.style.width = '200px'    
        T1.style.width = '200px'
        P1. style.padding = '10px'
        R1.style.padding = '10px'
        T1.style.padding = '10px'
        calculate.style.padding = '12px'
        calculate.style.width = '220px'
        calculate.style.margin = '40px'
        calculate.style.backgroundColor = 'rgb(41, 38, 38)'
        calculate.style.color = 'aliceblue'
        calculate.style.fontSize = '25px'
        calculate.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'
        clearScreen.style.padding = '12px'
        clearScreen.style.width = '220px'
        clearScreen.style.margin = '10px'
        clearScreen.style.backgroundColor = 'rgb(41, 38, 38)'
        clearScreen.style.color = 'aliceblue'
        clearScreen.style.fontSize = '25px'
        clearScreen.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'



    


    }
      
    
    else if(e.target.id =="BMI"){
        e.target.disabled = true;
        const Weight = document.createElement('h1')
        const Weight1 = document.createElement('input')
        const Height = document.createElement('h1')
        const Height1 = document.createElement('input')  
        const calculate = document.createElement('button')
        const result = document.createElement('h1')
        const break1 = document.createElement('br')
        const clearScreen = document.createElement('button');
        Weight.innerText = "Enter the Weight in kilograms"
        Height.innerText = "Enter the Height in meters"
       
        calculate.innerText = "Calculate"
        clearScreen.innerText="Clear"
        claculation.appendChild(Weight)
        claculation.appendChild(Weight1)
        claculation.appendChild(Height)
        claculation.appendChild(Height1)
        claculation.append(break1)
        claculation.appendChild(calculate)
        claculation.appendChild(clearScreen);

        calculate.addEventListener('click',function (e){
            answer =(Weight1.value / ((Height1.value * Height1.value) / 10000)).toFixed(2)
            result.innerText = `BMI  of ${Weight1.value} in KG and ${Height1.value} in M  is ${answer}`
            claculation.appendChild(result)
        })

        clearScreen.addEventListener('click',function (e){
            claculation.innerHTML = ""
            e.target.disabled = false
        })
//+++++++++++++++++++adding style++++++++++++++++++++++++++++++++++++ 
        Weight1.style.width = '200px'
        Height1.style.width = '200px'    
        Weight1. style.padding = '10px'
        Height1.style.padding = '10px'
        calculate.style.padding = '12px'
        calculate.style.width = '220px'
        calculate.style.margin = '40px'
        calculate.style.backgroundColor = 'rgb(41, 38, 38)'
        calculate.style.color = 'aliceblue'
        calculate.style.fontSize = '25px'
        calculate.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'
        clearScreen.style.padding = '12px'
        clearScreen.style.width = '220px'
        clearScreen.style.margin = '10px'
        clearScreen.style.backgroundColor = 'rgb(41, 38, 38)'
        clearScreen.style.color = 'aliceblue'
        clearScreen.style.fontSize = '25px'
        clearScreen.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'



    


    }
    
    else if(e.target.id =="Avg"){
        e.target.disabled = true;
        const Sum = document.createElement('h1')
        const Sum1 = document.createElement('input')
        const Num = document.createElement('h1')
        const Num1 = document.createElement('input')  
        const calculate = document.createElement('button')
        const result = document.createElement('h1')
        const break1 = document.createElement('br')
        const clearScreen = document.createElement('button');
        Sum.innerText = "Enter sum of Observations"
        Num.innerText = "Enter number of Observations"
       
        calculate.innerText = "Calculate"
        clearScreen.innerText="Clear"
        claculation.appendChild(Sum)
        claculation.appendChild(Sum1)
        claculation.appendChild(Num)
        claculation.appendChild(Num1)
        claculation.append(break1)
        claculation.appendChild(calculate)
        claculation.appendChild(clearScreen);

        calculate.addEventListener('click',function (e){
            answer =(Sum1.value / Num1.value).toFixed(2)
            result.innerText = `Average of Sum of Observations = ${Sum1.value} and Number of Observations = ${Num1.value} is ${answer}`
            claculation.appendChild(result)
        })

        clearScreen.addEventListener('click',function (e){
            claculation.innerHTML = ""
            e.target.disabled = false
        })
//+++++++++++++++++++adding style++++++++++++++++++++++++++++++++++++ 
        Sum1.style.width = '200px'
        Num1.style.width = '200px'    
        Sum1. style.padding = '10px'
        Num1.style.padding = '10px'
        calculate.style.padding = '12px'
        calculate.style.width = '220px'
        calculate.style.margin = '40px'
        calculate.style.backgroundColor = 'rgb(41, 38, 38)'
        calculate.style.color = 'aliceblue'
        calculate.style.fontSize = '25px'
        calculate.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'
        clearScreen.style.padding = '12px'
        clearScreen.style.width = '220px'
        clearScreen.style.margin = '10px'
        clearScreen.style.backgroundColor = 'rgb(41, 38, 38)'
        clearScreen.style.color = 'aliceblue'
        clearScreen.style.fontSize = '25px'
        clearScreen.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'

    }

    else if(e.target.id =="Prob"){
        e.target.disabled = true;
        const Favorable = document.createElement('h1')
        const Favorable1 = document.createElement('input')
        const Total = document.createElement('h1')
        const Total1 = document.createElement('input')  
        const calculate = document.createElement('button')
        const result = document.createElement('h1')
        const break1 = document.createElement('br')
        const clearScreen = document.createElement('button');
        Favorable.innerText = "Enter Favorable Outcomes"
        Total.innerText = "Enter Total Outcomes"
       
        calculate.innerText = "Calculate"
        clearScreen.innerText="Clear"
        claculation.appendChild(Favorable)
        claculation.appendChild(Favorable1)
        claculation.appendChild(Total)
        claculation.appendChild(Total1)
        claculation.append(break1)
        claculation.appendChild(calculate)
        claculation.appendChild(clearScreen);

        calculate.addEventListener('click',function (e){
            answer =(Favorable1.value / Total1.value).toFixed(2)
            result.innerText = `Probability of Favorable Outcomes = ${Favorable1.value} and Total Outcomes = ${Total1.value} is ${answer}`
            claculation.appendChild(result)
        })

        clearScreen.addEventListener('click',function (e){
            claculation.innerHTML = ""
            e.target.disabled = false
        })
//+++++++++++++++++++adding style++++++++++++++++++++++++++++++++++++ 
        Favorable1.style.width = '200px'
        Total1.style.width = '200px'    
        Favorable1. style.padding = '10px'
        Total1.style.padding = '10px'
        calculate.style.padding = '12px'
        calculate.style.width = '220px'
        calculate.style.margin = '40px'
        calculate.style.backgroundColor = 'rgb(41, 38, 38)'
        calculate.style.color = 'aliceblue'
        calculate.style.fontSize = '25px'
        calculate.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'
        clearScreen.style.padding = '12px'
        clearScreen.style.width = '220px'
        clearScreen.style.margin = '10px'
        clearScreen.style.backgroundColor = 'rgb(41, 38, 38)'
        clearScreen.style.color = 'aliceblue'
        clearScreen.style.fontSize = '25px'
        clearScreen.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'

    }
    
    
   else if(e.target.id =="Theorem"){
        e.target.disabled = true;
        const A = document.createElement('h1')
        const A1 = document.createElement('input')
        const B = document.createElement('h1')
        const B1 = document.createElement('input')
        const calculate = document.createElement('button')
        const result = document.createElement('h1')
        const break1 = document.createElement('br')
        const clearScreen = document.createElement('button');
        A.innerText = "Enter the First side"
        B.innerText = "Enter the Second side"
       
        calculate.innerText = "Calculate"
        clearScreen.innerText="Clear"
        claculation.appendChild(A)
        claculation.appendChild(A1)
        claculation.appendChild(B)
        claculation.appendChild(B1)
        claculation.append(break1)
        claculation.appendChild(calculate)
        claculation.appendChild(clearScreen);


        calculate.addEventListener('click',function (e){
            answer =Math.sqrt((A1.value * A1.value) + (B1.value * B1.value)).toFixed(2)
            result.innerText = ` Pythagoras Theorem of side 1 = ${A1.value} and Side 2 = ${B1.value} is ${answer}`
            claculation.appendChild(result)
        })

        clearScreen.addEventListener('click',function (e){
            claculation.innerHTML = ""
            e.target.disabled = false
        })
//+++++++++++++++++++adding style++++++++++++++++++++++++++++++++++++ 
        A1.style.width = '200px'
        B1.style.width = '200px'    
        A1. style.padding = '10px'
        B1.style.padding = '10px'
        calculate.style.padding = '12px'
        calculate.style.width = '220px'
        calculate.style.margin = '40px'
        calculate.style.backgroundColor = 'rgb(41, 38, 38)'
        calculate.style.color = 'aliceblue'
        calculate.style.fontSize = '25px'
        calculate.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'
        clearScreen.style.padding = '12px'
        clearScreen.style.width = '220px'
        clearScreen.style.margin = '10px'
        clearScreen.style.backgroundColor = 'rgb(41, 38, 38)'
        clearScreen.style.color = 'aliceblue'
        clearScreen.style.fontSize = '25px'
        clearScreen.style.fontWeight = 'bolder'
        clearScreen.style.fontFamily = 'Georgia, \'Times New Roman\', Times, serif'



    


    }






 })
})
