import { atom, selector } from 'recoil'
export const networkAtom = atom({

    key: "networkAtom",
    default: 104

})

export const jobsAtom = atom({

    key: "jobsAtom",
    default: 0

})

export const messagingAtom = atom({

    key: "messagingAtom",
    default: 12

})

export const notificationAtom = atom({

    key: "notificationAtom",
    default: 0

})

export const totalnotify = selector({

    key: 'totalnotify',
    get: ({get})=>{

        const  networkatomcount = get(networkAtom);
        const jobscount= get(jobsAtom);
        const messagingcount = get(messagingAtom);
        const notificationcount = get(notificationAtom);

        return networkatomcount+jobscount+messagingcount+notificationcount;


    }

})
