import { faker } from "@faker-js/faker";

function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image:'/defender.avif',
        miles: 1000,
        gearType: 'Automatic',
        price: faker.finance.amount({min:40000, max:200000})
    }
}

const carList = faker.helpers.multiple(createRandomCarList, { count: 8})

export default {carList}