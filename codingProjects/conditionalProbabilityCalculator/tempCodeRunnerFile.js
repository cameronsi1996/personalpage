function handlingNegativeP(...args, id) {
        message = "Found probability that is > 1 or < 0, i.e. very likely to be erroneous."
        for (let i of ...args) {
            if  (i < 0 || i > 1) {
                return print("probabilityErrorMessage", message)
            }
        }
        return null