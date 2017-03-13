import React, {Component} from 'react';
import ProfileStore from "../stores/ProfileStore";
import SkillStore from "../stores/SkillStore";
import ProjectStore from "../stores/ProjectStore";

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profileData: ProfileStore.getData(),
            skillData: SkillStore.getAll(),
            projectData: ProjectStore.getAll()
        }
    }
    componentWillMount(){
        console.log(this.state.projectData)
    }
    render() {
        return (
            <div>
                { this.state.profileData.firstname + " " + this.state.profileData.lastname }
            </div>
        )
    }
}

export default Profile;
