interface User{

    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type Updateprops = Pick<User, 'name'| 'age' | 'email'>

//to pic the values all 3 name age email