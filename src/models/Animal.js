export default class Ticket {

    id
    name
    admission_date
    photo
    type
    family
    gender

    constructor(id, name, admission_date, photo, type, family, gender) {
        this.id = id
        this.name = name
        this.admission_date = admission_date
        this.photo = photo
        this.type = type
        this.family = family
        this.gender = gender
    }

    getId() {
        return this.id
    }
    
    getName() {
        return this.name
    }

    getAdmission_date() {
        return this.admission_date
    }
    
    getPhoto() {
        return this.photo
    }

    getType() {
        return this.type
    }

    getFamily() {
        return this.family
    }

    getGender() {
        return this.gender
    }
}