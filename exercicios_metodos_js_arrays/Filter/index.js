
function Filter() {

    //dados
    const numbers = [9, 6, 3, 0];

    //tela
    return ` The return is 
    ${numbers.map((item) => {
    return item
    }).filter(x => x >= 6).join("/")} 
    `
};

export default Filter;


