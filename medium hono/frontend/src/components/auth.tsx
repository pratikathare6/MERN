import type { ChangeEvent } from 'react';
import {useState} from 'react'
import {Link} from 'react-router-dom'
 
import type {Signupinput} from "@pratik6/medium-common"



export const Auth =({type}: {type: "signup" | "signin"})=>{

     const [postInputs, setpostinputs] = useState<Signupinput>({
    name: "",
    username: "",
    password: ""
 })


    return <div className="h-screen flex justify-center flex-col">


        <div className="flex justify-center">
    <div>
            <div>
                        
            <div className="text-2xl font-bold text-extrabold">
                
                Create an account  
            
            </div>
            <div className="text-slate-400">

                {type ===  "signin" ? "Dont have an account":   "already have an account?" }
                
                <Link to={ type ===  "signin" ? "/signup" : "/signin"} className='pl2 underline'> Login</Link> 

                
            </div>


            </div>

            <div>

                 <Labeledinput label="Name" placeholder='Pratik Athare..' onChange={(e)=>{

                setpostinputs({

                    ...postInputs, //override existing and set the new value
                    name: e.target.value
                })

            }}/>

            <Labeledinput label="username" placeholder='email' onChange={(e)=>{

                setpostinputs({

                    ...postInputs,
                    username: e.target.value
                })

            }}/>

        

                <Labeledinput label="password"  type={"password"} placeholder='' onChange={(e)=>{

                setpostinputs({

                    ...postInputs,
                    password: e.target.value
                })

            }}/>

            <div className='mt-4 flex justify-center'>

            
            <button type="button" className="text-white bg-black box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{type === "signup" ? "sign up" : "sign in"}</button>

            </div>
            </div>

            
           
        </div>

        </div>
        

    </div>
}

interface Labeledinputtype{

    label: string;
    placeholder: string 
    onChange: (e: ChangeEvent <HTMLInputElement>) =>void;
    type? : string;
}


function Labeledinput ({label,placeholder,onChange,type }: Labeledinputtype  ){

    return <div>

         <div>
            <label   className="block mb-2.5 text-sm font-medium text-heading">{label}</label>
            <input onChange={onChange} type={type || "text" } id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder={placeholder} required />
        </div>

    </div>
}