const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // Check one: Any pending setTimeout, setInterval, setImmediate?
    // Check two: Any pending OS tasks? (Like server listening to port)
    // Check three: Any pending long running operations? (Like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
    // Node looks at pendingTimers and sees if any functions are ready to be called

    // Node looks at pending OS tasks and pending operations and calls relevent callbacks

    // Pause execution, COntinue when...
        // - a new pendingOSTasks done
        //  - a new pendingOperation is done
        //  - a timer is about to complete

        // Look at pendingTimers

        // Handle any close events
}