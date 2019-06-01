"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserMockRepository {
    constructor() {
        this.users = [
            {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                age: 31
            },
            {
                id: 2,
                firstName: "Lizzy",
                lastName: "Doe",
                age: 18
            },
            {
                id: 3,
                firstName: "Greg",
                lastName: "Doe",
                age: 21
            }
        ];
        this.getAllUsers = () => this.users;
        this.getUserByID = (id) => this.users.find(user => user.id === id) || null;
        this.addUser = (userForCreation) => {
            const id = this.users[this.users.length - 1].id + 1;
            const user = Object.assign({}, userForCreation, { id });
            this.users.push(user);
            return user;
        };
        this.updateUser = (id, userForUpdate) => {
            const oldUserData = this.users.find(user => user.id === id);
            if (!oldUserData) {
                return null;
            }
            const userIndex = this.users.findIndex(user => user.id === id);
            const newUserData = Object.assign({}, oldUserData, userForUpdate, { id });
            this.users[userIndex] = newUserData;
            return newUserData;
        };
        this.removeUser = (id) => {
            const userIndex = this.users.findIndex(user => user.id === id);
            if (!userIndex) {
                return null;
            }
            this.users.splice(userIndex, 1);
        };
    }
}
exports.UserMockRepository = UserMockRepository;
//# sourceMappingURL=UserMockRepository.js.map