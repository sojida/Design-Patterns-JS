// The mediator is built for our problem case
const Mediator = function(){
    const participants = {};

    const register = function(arrayOfParticipants){
        arrayOfParticipants.forEach(function(participant){
            if (!participants[participant.service]){
                participants[participant.service] = []
            }
    
                participants[participant.service].push(participant);
        })
    }

    // Helper function to send to all clients
    // This has a business logic that checks 
    // the availability of each client before notifying them
    const notifyAll = function(arr, message, from){
        for(let participants = 0; participants < arr.length; participants++)
        {
            if (arr[participants].available){
                arr[participants].receive(message, from)
            }
        }
    };

    const notify = function(message, from, to){
        // if the message is directed to service
        if (to && participants[to]){
           notifyAll(participants[to], message, from) 
           console.log(`Message sent to all in ${to}`)
        }

        // if the message is no directed to any one then send to all
        if (!to){
            for(service in participants){
                notifyAll(participants[service], message, from)
            }
            console.log('Message sent to all services')
        }
    }

    return {
        register,
        notify,
    }

}

module.exports = Mediator;
