import z from "zod";

//type inference in zod
export const signupinput = z.object({

    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})


export type Signupinput = z.infer<typeof signupinput>



export const siginInput = z.object({

    username: z.string().email(),
    password: z.string().min(6)
})

export type Signininput = z.infer<typeof siginInput>

export const  createbloginput = z.object({

    title: z.string(),
    content: z.string()

})

export type Createbloginput = z.infer<typeof createbloginput> 

export const updatebloginput = z.object({

        title: z.string(),
        content: z.string(),
        id: z.string()
})

export type Updatebloginput = z.infer<typeof updatebloginput>