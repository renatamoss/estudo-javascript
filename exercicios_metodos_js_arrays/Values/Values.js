export function Values() {

    const cadastro = [
        {
            name: `Paul`,
            age: 30
        },
        {
            name: `Lisa`,
            age: 25
        }

    ]


    console.log(Object.values(cadastro));
    console.log(cadastro[0].name)


}