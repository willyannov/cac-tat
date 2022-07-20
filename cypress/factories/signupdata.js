import faker from "faker"

export default {

    user: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {

            name: `${firstName}`,
            lastname: `${lastName}`,
            email: faker.internet.email(firstName),
            phonenumber: '15999999999',
            product: 'Cursos',
            message: 'Belo Curso mas voce é calvo',
            image: 'cnh-digital.jpg.jpg'

        }

        return data
    }


}