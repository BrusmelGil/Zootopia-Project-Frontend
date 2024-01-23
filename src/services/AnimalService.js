import Animal from "@/models/Animal";
import AnimalRepository from "@/repositories/AnimalRepository";

export default class AnimalService {

    repository = new AnimalRepository
    animals = []; 

    constructor(repository) {
        this.repository = repository
    }

    async index() {
        const animals = await this.repository.getAll()
        
        animals.forEach((animal) => {
            const animalToAdd = new Animal(animal.id, animal.name, animal.admission_date, animal.photo, animal.type, animal.family, animal.gender)
            this.animals.push(animalToAdd)
        });

        return this.animals
    }

    async delete(id) {
        const animals = await this.repository.getAll()
        await this.repository.deleteById(id)
        
        animals.splice(id, 1)
        return this.animals
    }

    async create(animal) {
        const animals = await this.repository.getAll()
        await this.repository.create(animal)
        
        animals.push(animal)
        return this.animals
    }

    async update(id, animal) {
        const animals = await this.repository.getAll()
        await this.repository.update(id, animal)

        let indexOfTicket = animals.findIndex((element) => element.id == id)

        animals[indexOfTicket] = animal
        return this.animals
    }

}