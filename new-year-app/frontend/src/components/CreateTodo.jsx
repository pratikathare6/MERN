export function CreateTodo(){

        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
    
    return <div>

        <input type="text" placeholder="title" onChange={function(e){

            const value = e.target.value;
            setTitle(value);

        }} /> <br />
        <input type="text" placeholder="Description" onChange={function(e){

            const value = e.target.value;
            setDescription(value);  
        }}/> <br />

        <button onClick={()=>{

            fetch('http://localhost:3000/todo',{

                method: 'POST',
                body: JSON.stringify({

                    title: title, 
                    description: description 
                }),
                headers: {
                    "contentType": "application/json"
                }
            })

            .then(async function(res){

                    const json = await res.json();
                    alert('todo added'); 

            })

        }


        }>Add a Todo</button>

    </div>
}