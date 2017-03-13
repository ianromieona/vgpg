import {EventEmitter} from "events";

class SkillStore extends EventEmitter {

    constructor() {
        super();

        this.skills = [
            'PHP',
            'Laravel',
            'HTML',
            'CSS',
            'SASS',
            'Javascript',
            'Vuejs',
            'ReactJs',
            'AngularJs',
            'JQuery',
            'AJAX',
            'MySQL',
            'MongoDB',
            'API',
            'Gulp',
            'Git'
        ]
    }

    getAll() {
        return this.skills;
    }
}
const skillStore = new SkillStore();

export default skillStore;
