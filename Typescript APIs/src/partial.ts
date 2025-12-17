interface User{

    name: string;
    age: number;
    add: string;
    email: string;
}

type Updateprops = Pick<User, 'name'|'age'|'add'|'email'>

type Updatepropsoptional = Partial<Updateprops>

//with the partial you can pick selected proprties from the Pick
// same like name? : string; '?'=optional



