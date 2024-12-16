import { useState } from "react"


export const Bmi = () => {

    const [data,setdata]=useState(false)
    const [out,setout]=useState(false)
    const[loading,setloading]=useState(false)

    function calculate() {
        const height=document.getElementById("height").value
        const weight=document.getElementById("weight").value
        
        const heightInMeters = Number(height) / 100;

        // // Calculate BMI
        const bmi = Number(weight) / (heightInMeters ** 2);
        if (!height && !weight ){
            setdata("Please enter valid data")
            setloading(false)
            setout(false)
        }

        else
            setdata(true)
            console.log(height)
            console.log(weight)
            console.log(Number(height/100)/Number(weight))
            setloading("Your bmi value :")
            setout(Math.floor(bmi))
            

            
    }

    function reset(){
        document.getElementById("height").value=""
        document.getElementById("weight").value=""
        setloading(false)
        setout(false)
    
    }



    return (<div>
        <h3>Bmi Calculator</h3>
        {data}
        <p>Height (cm):</p>
        <input type="text" id="height" name="height" placeholder="Enter Height" />
        <p>Weight (Kg):</p>
        <input type="text" name="weight" id="weight" placeholder="Enter Weight" />
        <button onClick={calculate}>Calculate</button>
        <button onClick={reset}>Reset</button>
        <p>{loading}{out}</p>

    </div>)
}