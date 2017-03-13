import {EventEmitter} from "events";

class ProjectStore extends EventEmitter {
    constructor() {
        super();

        this.projects = [
            {
                projectName: "Tagcash",
                projectUrl: "http://www.tagcash.com",
                projectDescription: "A Payments & Rewards platform. Tagcash features multi currency wallets or your own closed loop community created points."
            },
            {
                projectName: "Tag77",
                projectUrl: "http://www.tag77.com",
                projectDescription: "An Events & Tickets platform. Create Events and sell tickets. Offer rewards and referrals to promote those tickets on Facebook, Twitter and other sites and let others earn commissions selling for you"
            },
            {
                projectName: "Tagcash Payment",
                projectUrl: "http://pay.tagcash.com",
                projectDescription: "Portal for payment using Tagcash, Dragonpay and Stripe"
            },
            {
                projectName: "Posif",
                projectUrl: "http://www.posif.com",
                projectDescription: "A Universal Rating System."
            },
            {
                projectName: "Philkraft Genealogy",
                projectUrl: "http://phikraft.net/genealogy",
                projectDescription: "A Networking view for customer using Pyramid schemes"
            },
            {
                projectName: "Miskio",
                projectUrl: "http://miskio.com",
                projectDescription: "Social networking, Chats & Gaming"
            },
            {
                projectName: "Realtct",
                projectUrl: "http://realtct.com",
                projectDescription: "Real Estate website"
            },
            {
                projectName: "The Moment Group",
                projectUrl: "http://momentgroup.ph/",
                projectDescription: "Company Website"
            },
            {
                projectName: "GMovies",
                projectUrl: "http://gmovies.ph",
                projectDescription: "Cinema Reservations"
            },
            {
                projectName: "Rush",
                projectUrl: "http://rush.ph",
                projectDescription: "Loyalty tools"
            },
            {
                projectName: "SureSeats",
                projectUrl: "http://sureseats.com",
                projectDescription: "Cinema Reservations"
            }
        ]
    }
    getAll() {
        return this.projects;
    }
}

const projectStore = new ProjectStore();

export default projectStore;
