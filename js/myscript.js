
var app = new Vue({
    el: "#container",
    data: {
        selectedId: 1,
        userMsg: "",
        search: "",
        contacts: [ 
            {
                id: 1,
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },  
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        status: 'received'
                    },
                ],   
            },  
           
            {   
                id: 2,
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                ],
            }, 

            {
                id: 3,
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    },
                ],
            },

            {   
                id: 4,
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
        ],   
    },

    computed: {
            
    },

    methods: {
        addActive(c) {
            this.selectedId = c;
        }, 

        // getLastMessageDate() {
        //     let contact = this.contacts.filter(contact => contact.id === this.selectedId)[0];
        //     let lastMessage = contact.messages[contact.messages.length - 1];
        //     console.log(lastMessage);
        //     return lastMessage.date;
        // },

        getSelectedContact() {
            let contact = this.contacts.filter(contact => contact.id === this.selectedId)[0];
            return contact      
        },

        getSelectedMessages() {
            let messagesArr = this.getSelectedContact().messages;
            return messagesArr;
        },

        getLastMessage() {
            let lastMessage = this.getSelectedMessages();
            return lastMessage.length - 1;
        },

        autoAnswer(selectedMsg){
            const pcAnswer = {
                date: dayjs().format('YYYY/MM/DD HH:mm:ss'),
                text: "ok",
                status: 'received'
            };
            selectedMsg.push(pcAnswer);
        },
      
        submit(){
           const userMsg = {
                date: dayjs().format('YYYY/MM/DD HH:mm:ss'),
                text: this.userMsg,
                status: 'sent'
            };
            
            let selectedMsg = this.getSelectedMessages();

            selectedMsg.push(userMsg);
            
            this.userMsg = "";

            setTimeout(() => {
                this.autoAnswer(selectedMsg)
            }, 1000);
        }, 
    },
})

