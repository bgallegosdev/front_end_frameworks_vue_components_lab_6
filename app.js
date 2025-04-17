const app = Vue.createApp({
    data(){
        return{
            auditionShow: 'true',
            eventShow: 'true',
            auditions: [
                {auditionName: 'Mamma Mia', audRunning: 'October 9th - October 12th, 2025', audDate: 'June 6th, 2025', audTime: '12:00 p.m. - 9:00 p.m.', audDescription: '2 Monologues(One Modern Dramatic Piece, One Modern Comedic Piece), 8 - 16 bars of a song (no accompaniment), headshot/resume required', auditionImg: './images/audition_mamma_mia.jpg', auditionAlt: 'Mediterranean Street Photo'},

                {auditionName: 'Romeo & Juliet', audRunning: 'October 24th - October 26th, 2025', audDate: 'June 20th, 2025', audTime: '3:00 p.m. - 8:00 p.m.', audDescription: '2 Monologues(One Shakespeare Sonnet/Monologue, One Modern Drama Piece) and headshot/resume required', auditionImg: './images/audition_romeo_juliet.jpg', auditionAlt: 'A Candle with Romeo & Juliet Label'},

                {auditionName: 'StageLeft Winter Cabaret!', audRunning: 'December 5th - December 6th, 2025', audDate: 'September 5th, 2025', audTime: '5:00 p.m. - 9:00 p.m.', audDescription: 'Any song piece, monologue piece, or talent piece (pieces must be under a 2 minute time limit, unless talent piece requires additional time - for approval: contact StageLeft administration), and headshot/resume required', auditionImg: './images/audition_winter_cabaret.jpg', auditionAlt: 'Microphone Image On Stage'},

                {auditionName: 'Willy Wonka', audRunning: 'March 20th - March 22nd, 2026', audDate: 'November 21st, 2025', audTime: '12:00 p.m. - 9:00 p.m.', audDescription: '2 Monologues(Both Comedic Pieces), 8 - 16 bars of a song (no accompaniment), headshot/resume required', auditionImg: './images/audition_willy_wonka.jpg', auditionAlt: 'Chocolate Bar with Broken Pieces'},

                {auditionName: 'The Glass Menagerie', audRunning: 'April 10th - April 12th, 2026', audDate: 'December 12th, 2025', audTime: '5:00 p.m. - 9:00 p.m.', audDescription: '2 Monologues(Both Dramatic Pieces), ensemble movement audition required, and headshot/resume required', auditionImg: './images/audition_glass_menagerie.jpg', auditionAlt: 'Stained Glass Window'}
            ],
            events: [
                {eventName: '2025-2026 Season Reveal Party', eventDate: 'May 16th, 2025', eventTime: '7:30 p.m.', eventDescription: 'Join us for the 2025 - 2026 reveal party with our Executive Director. Enjoy free drinks and a buffet of treats to enjoy while you speak with designers and future directors of the shows!', eventImg: './images/event_celebration.jpg', eventAlt: 'Image of Party with Glasses'},

                {eventName: 'Audition Preperation/Feedback', eventDate: 'May 31st, 2025', eventTime: '2:00 p.m. - 6:00 p.m.', eventDescription: 'Need help with a monologue? How about tuning your audition song to be just right? Come join our veteran actors and assistant directors for audition guidance and feedback. Bring at most two pieces to receive feedback. Please note: we want to get to everyone who joins, we may only get to one piece per person.', eventImg: './images/event_audition_prep.jpg', eventAlt: 'Group of People Onstage'},

                {eventName: 'Summer Time Movie Night', eventDate: 'July 4th, 2025', eventTime: '7:30 p.m.', eventDescription: 'No plans for July 4th holiday? Come join StageLeft Theatre for a back-to-back movie night! We will be serving popcorn and drinks while watching the stage version of Hamilton and then a late night showing of Independence Day.', eventImg: './images/event_movie_night.jpg', eventAlt: 'Theatre Projector Screen Image'},

                {eventName: 'Costuming 101: Halloween Done Right', eventDate: 'October 3rd, 2025', eventTime: '7:30 p.m.', eventDescription: 'Get prepared for Halloween by visiting our costuming workshop with our costume designers. We will talk costuming for kids and intermediate costuming DIY ideas.', eventImg: './images/event_costume_supplies.jpg', eventAlt: 'Costuming Thread Image'},

                {eventName: 'Cookies and Music - Oh My!', eventDate: 'December 19th, 2025', eventTime: '6:30 p.m.', eventDescription: 'Practice your holiday spirit and decoration with our season actors and staff by decorating cookies and listening to the classics of holiday music! Supplies are included and you get to eat your creations!', eventImg: './images/event_cookies.jpg', eventAlt: 'Decorating Cookies Image'}
            ]
        }
    },
    methods: {
        toggleAudition(){
            this.auditionShow = !this.auditionShow
        },
        toggleEvent(){
            this.eventShow = !this.eventShow
        }
    }
})

app.mount('#app')