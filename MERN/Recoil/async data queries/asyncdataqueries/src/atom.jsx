import { atom, selector } from 'recoil'
export const notifications = atom({

    key: "networkAtom",
    default: selector({

            key: 'fetch',
            get: async()=>{

                const res = await fetch('http://localhost:3000/random');
                const data =await res.json();
                return data
            } 
    })

})

export const totalnotify = selector({

    key: 'totalnotify',
    get: ({get})=>{

        const  data = get(notifications);
        
        return data.network+data.jobs+data.notifications+data.messaging;


    }

})
