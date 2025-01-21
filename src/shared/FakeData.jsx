import { faker } from "@faker-js/faker";

function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image:'https://www.google.com/imgres?q=bmw%20x7&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fcw%2Fec%2F136217%2Fx7-exterior-right-front-three-quarter-8.jpeg%3Fisig%3D0%26q%3D80&imgrefurl=https%3A%2F%2Fwww.carwale.com%2Fbmw-cars%2Fx7%2F&docid=761JCC2LuewzwM&tbnid=T82TP8hMrl-74M&vet=12ahUKEwjm7NqWloeLAxW61AIHHastFA8QM3oECFEQAA..i&w=664&h=374&hcb=2&ved=2ahUKEwjm7NqWloeLAxW61AIHHastFA8QM3oECFEQAA',
        miles: 1000,
        gearType: 'Automatic',
        price: faker.finance.amount({min:40000, max:200000})
    }
}

const carList = faker.helpers.multiple(createRandomCarList, { count: 7})

export default {carList}