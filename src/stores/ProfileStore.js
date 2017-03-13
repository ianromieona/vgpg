import { EventEmitter } from "events";

class ProfileStore extends EventEmitter {
    constructor() {
        super();
        this.profileData = {
            firstname: "Ian Romie",
            lastname: "Ona",
            profession: "Software Engineer"
        }
    }

    getData() {
        return this.profileData;
    }

}
const profileStore = new ProfileStore();

export default profileStore;
